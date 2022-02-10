import React from 'react';
import './Navbar.css';



const Navbar =()=>{
        
  
       
    return (

        <>
         <nav id='navbar' class='navbar'>
         <a id='logo' href="/">Logo</a>
            <div id='right'>
                <a href="/" style={{textDecoration:"underline"}}>Company</a>
                <a href="/">Latest</a>
                <a href="/">About</a>
                
            </div>
   <a className='icon' id='icon' onClick={()=>{
       var x= document.getElementById('navbar');
       if(x.className==='navbar'){
          x.className+=" responsive";
          }else{
          x.className="navbar";
       }
   }} href="javascript:void(0);"><i  className="fas fa-bars"></i></a>
</nav>
        
        
        
        </>
    );
}

export default Navbar;