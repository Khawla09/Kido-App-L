
import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
function Reviews() {

    const [items, setItems] = useState([]);
  const [createForm, setCreateForm] = useState({ title: '', description: '' });
  const [updateForm, setUpdateForm] = useState({ id: null, title: '', description: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:3005/api/reviews/items');
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
// console.log(  items)

  const handleCreateChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const createItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3005/api/reviews/items', createForm);
      setItems([...items, res.data]);
      setCreateForm({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3005/api/reviews/items/${updateForm.id}`, updateForm);
      setItems(items.map(item => (item._id === updateForm.id ? res.data : item)));
      setUpdateForm({ id: null, title: '', description: '' });
      setEditing(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/api/reviews/items/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const startEdit = (item) => {
    setUpdateForm({ id: item._id, title: item.title, description: item.description });
    setEditing(true);
  };

  return (
    <div className="App">
      {/* <h1>Item Reviews</h1> */}

      <div>
        {/* <h2>Create Item</h2> */}
        {/* <form onSubmit={createItem}>
          <input
            type="text"
            name="title"
            value={createForm.title}
            onChange={handleCreateChange}
            placeholder="Title"
            required
          />
          <textarea
            name="description"
            value={createForm.description}
            onChange={handleCreateChange}
            placeholder="Description"
            required
          />
          <button type="submit">Create Item</button>
        </form> */}
      </div>

      {/* {editing && (
        <div>
          <h2>Update Item</h2>
          <form onSubmit={updateItem}>
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateChange}
              placeholder="Title"
              required
            />
            <textarea
              name="description"
              value={updateForm.description}
              onChange={handleUpdateChange}
              placeholder="Description"
              required
            />
            <button type="submit">Update Item</button>
          </form>
        </div>
      )} */}

      <div>
        <h1>Reviews ⭐⭐⭐⭐⭐</h1>
        {items.map((elm)=>{
            return(
                <>
                <h2> {elm.title}</h2>
                <h4>description: <h5> {elm.description}</h5> </h4>
                </>
                
            )
        })}
     
        {/* {items.map(item => (
          <div key={item._id} style={{ marginBottom: '1em' }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => startEdit(item)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div> 
        ))} */}
      </div>
    </div>
  );
}

export default Reviews;



