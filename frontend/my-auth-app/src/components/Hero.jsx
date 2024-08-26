import React from 'react'

function Hero() {
  return ( 
    <section className="hero" style={styling.hero}>
      
       <div className='hero_content' style={styling.hero_content}>
  
        <h1 style={styling.h1}>Welcome to the Kids' Store</h1>
        <p style={styling.p} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magni dignissimos eum eveniet, dicta laudantium illum <br />
        necessitatibus deleniti <br />
        assumenda autem cumque maiores explicabo numquam ea exercitationem earum soluta doloremque neque?  </p>
        </div>
    </section>
   
  )
}
const styling = {
  hero:{
    position: "relative",
  height: "100vh", /* Full viewport height */
  // background:"white",
  background: "url(https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)no-repeat center center/cover",
  margin:'5px',
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
   marginBottom: "200px",
    

  },
  hero_content:{
  background: 'rgba(0, 0, 0, 0.5)',
  display:" flex",
  flexDirection:"column",
  justifyContent:"center",
  alignContent: 'cente',
alignItems:'center',
gap:"10px",

    maxWidth: '100%',
    height:'95vh',
  padding:' 20px',
  /* Optional: semi-transparent background for better text readability */
  // borderRadius: '10px',
  margin:"50px 0"
  },
  h1:{
    color:"gray",
fontSize: '3rem',
marginBottom: '0.5rem'
  },
 p: {
  color:"gray",
  fontSize: '1.25rem',
  margin:"0"

  }
  
}


export default Hero