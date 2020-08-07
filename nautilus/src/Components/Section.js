import React, {Component} from 'react';


class Section extends Component {
    render() {
        return (
            <div>

                <div>
                    <div className="logo"></div>
                    <div className="nav">
                        <ul>
                            <li className="linktabs"><a href="#">Issues</a></li>
                            <li className="linktabs"><a href="#">Topics</a></li>
                            <li className="linktabs"><a href="#">Blog</a></li>
                            <li className="linktabs"><a href="#">Newsletter</a></li>
                            <li className="linktabs"><a href="http://www.facebook.com" title="Facebook" target="_blank">Facebook</a></li>
                            <li className="linktabs"><a href="http://twitter.com" title="Twitter" target="_blank">Twitter</a></li>
                            <li className="linktabs"><a href="">Login</a></li>
                            <li className="linktabs"><a href="" className="btnrv" target="">Subscribe</a></li>
                        </ul>
                    </div>
                </div>

                <section>
                    <div className="medianDiv"></div>
                    <div className="medianText">
                        <p>THE NAUTILUS SPOTLIGHT</p>
                        <p>Why the laws of physics are inevitable</p>
                    </div>

                    <div>
                        <button className="button ">READ NOW</button>
                    </div>

                </section>

                <aside>
                    <div className="aside">
                        <div className="info">
                            <h1>Issue 079</h1>
                            <h2>Catalyst</h2>
                            <p> “Lorem ipsum ..."</p>

                            <ul id="issueTabs" className="sub_tabs" >
                                <li>
                                    <div className="tabs">
                                        <h4>Chapter 1</h4>
                                        <h3>Art</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="tabs">
                                        <h4>Chapter 2</h4>
                                        <h3>Mind</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="tabs">
                                        <h4>Chapter 3</h4>
                                        <h3 >Energy</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="tabs">
                                        <h4>Chapter 4</h4>
                                        <h3>Stars</h3>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="centerDiv">

                        <div className="imageCenter">

                        </div>
                        <div className="subsection">
                            <span> Artificial Intelligence</span>
                            <h4 >Best Screen Play goes to the Algorithms</h4>
                            <h5 >By Arthur I. Miller </h5>
                        </div>
                    </div>
                    <div className="midCenter">
                        <div className="midCenter1"></div>
                        <div className="musicTalk">
                            <span> Music</span>
                            <h4>How I taught My Computer to write its Own Music</h4>
                            <h5 >By John Supko </h5>
                        </div>
                        <div className="centerMiddle"></div>
                        <div className="subsection">
                            <span> Art</span>
                            <h4 >Picasso's got Nothing on an AI Artist</h4>
                            <h5 >By Kevin Berger </h5>
                        </div>
                    </div>
                    <div>
                        <h3 className="h3">Channels</h3>
                        <h4>Tune in to Nautilus' deep dive portals!</h4>

                    </div>

                    <div className="container">

                        <div className="box">
                            <label className="caption">Making sense ofGenome, at last</label>
                        </div>
                        <div className="box2">
                            <label className="caption">Your Brain is on Brink of Chaos</label>
                        </div>
                        <div className="box3">
                            <label className="caption">Mathematics Calculate How Randomness creeps in</label>
                        </div>
                    </div>
                    <div className="container1">

                        <div className="box4">
                            <label className="caption">
                                The Deep time of Walden Pond
                        </label>
                        </div>
                        <div className="box5">
                            <label className="caption">
                                The Best Burger place is a Lab
                        </label>
                        </div>
                        <div className="box6">
                            <label className="caption">
                                How much Shoud Expectation drive Science?
                        </label>
                        </div>
                    </div>
                    <div className="container2">

                        <div className="box7">
                            <label className="caption">
                                On observation and Imagination
                        </label>
                        </div>
                        <div className="box8">
                            <label className="caption">
                                Yes, Life in the fast Lane Kills you
                        </label>
                        </div>
                        <div className="box9">
                            <label className="caption">
                                Taking to the Stars
                        </label>
                        </div>

                    </div>
                    <div className="box10">
                        <label className="caption">
                            Taking to the Stars
                        </label>
                    </div>
        


                </aside>
            </div>

        )
    }
}


export default Section;