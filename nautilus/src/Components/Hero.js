import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
           <div>
   

 <h2 class='site logo'>Catalysts</h2>
 <p>Agents of change</p>
 <a href="catalysts/catalysts" class="button">Read More</a>


<h2>Chapter one</h2>
<h3 class="chapter-title">Art</h3>
<p>Published December 05,2019</p>

 <img src='/Nautilus/assets/matches.png'alt="pic"/>
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
    <li>
        <a href='https://www.presspassnow.com/nautilus/subscriptions/' class='button' target='blank'>Subscribe</a>
    </li>
    </li>
</ul>

 </nav>
        <img class="print-render psite-logo" src="http://nautilus-prod.s3.amazonaws.com/nautilus-logo-print.png"></img>
        <img src='src/Components/nautilus_mockup-master/assets/clover_card.jpg'/> 


           </div>
           

          
     
        )
    };
}



export default Home; 