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
                                        <h4>Chapter one</h4>
                                        <h4>Art</h4>
                                    </div>
                                </li>
                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter two</h4>
                                        <h4>Mind</h4>
                                    </div>
                                </li>
                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter three</h4>
                                        <h4 >Energy</h4>
                                    </div>
                                </li>
                                <li className="sideList">
                                    <div className="tabs">
                                        <h4>Chapter Four</h4>
                                        <h4>Stars</h4>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="centerSection">
                        <div className="centerImg"></div>
                        <div className="subsection">
                            <span> Artificial Intelligence</span>
                            <h4 >Best Screen Play goes to the Algorithms</h4>
                            <h5 >By Arthur I.Miller </h5>
                        </div>
                    </div>
                    <div className="bottomMid">
                        <div className="midBtm1"></div>
                        <div className="details2">
                            <span> Music</span>
                            <h4>How I taught My Computer to write its Own Music</h4>
                            <h5 >By John Supko </h5>
                        </div>
                        <div className="midBtm2"></div>
                        <div className="subsection">
                            <span> Art</span>
                            <h4 >Picasso's got Nothing on AI Artist</h4>
                            <h5 >By Kevin Berger </h5>
                        </div>
                    </div>
                    <div className="lastItem">
                        <h3>Channels</h3>
                        <h4>Tune in to Nautilus' deep dive portals</h4>

                    </div>

                    <div className="container">

                        <div className="conA">
                            <label className="imageText">Making sense ofGenome , at last</label>
                        </div>
                        <div className="conB">
                            <label className="imageText">Your Brain is on Brink of Chaos</label>
                        </div>
                        <div className="conC">
                            <label className="imageText">Mathematics Calculate How Randomness creeps in</label>
                        </div>
                    </div>
                    <div className="container1">

                        <div className="conA1">
                            <label className="imageText">
                                The Deep time of Walden Pond
                        </label>
                        </div>
                        <div className="conB1">
                            <label className="imageText">
                                The Best Burger place is a Lab
                        </label>
                        </div>
                        <div className="conC1">
                            <label className="imageText">
                                How much Shoud Expectation drive Science ?
                        </label>
                        </div>
                    </div>
                    <div className="container2">

                        <div className="conA2">
                            <label className="imageText">
                                On observation and Imagination
                        </label>
                        </div>
                        <div className="conB2">
                            <label className="imageText">
                                Yes , Life in the fast Lane Kills you
                        </label>
                        </div>
                        <div className="conC2">
                            <label className="imageText">
                                Taking to the Stars
                        </label>
                        </div>

                    </div>
                    <div className="C2">
                        <label className="imageText">
                            Taking to the Stars
                        </label>
                    </div>
        


                </aside>
            </div>

        )
    }
}


export default Section;