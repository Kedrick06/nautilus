import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
           
<div>
<nav className='nav'>
<ul>
    <li>
        <a href='issues'>ISSUES</a>
    </li>
    <li>
        <a href='topics'>TOPICS</a>
    <li>
        <a href='/blog'>BLOG</a>
    </li>
    <li>
        <a href='newsletter'>NEWSLETTER</a>
    </li>
    </li>
</ul>

 </nav>
<div className="hero">
<img src='C:\Users\bflob\Desktop\nautilus_mockup\nautilus\assets\clover_card.jpg' />
<h3>The Nautilus Spotlight</h3>
<h1>WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
<button>Read Now</button> 
</div>
</div>

<div className="grid">

</div>
           

          
     
        )
    };
}



export default Home; 