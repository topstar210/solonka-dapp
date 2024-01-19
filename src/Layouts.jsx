import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layouts = () => {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <div style={{ overflow: "hidden" }}>
            <header className="header">
                <nav className="navbar">
                    <div className="left-side-menu">
                        <a href="/home">
                            <img src="/images/logo.png" alt="logo" title="" />
                        </a>
                    </div>
                    <div className={`center-menu ${navToggle?'active':''}`}>
                        <div className="left-menu">
                            <a href="/home" className="tg" >
                                <li>Home</li>
                            </a>
                            <a href="/gems" className="tg" >
                                <li>Gems</li>
                            </a>
                            <a href="/roadmap" className="tg" >
                                <li>Roadmap</li>
                            </a>
                            <a href="#tools" className="tg">
                                <li>Tools</li>
                            </a>
                            <a href="/drops" className="tg">
                                <li>Drops</li>
                            </a>
                            <a href="https://solonka.gitbook.io/solonka-docs/" className="tg" target="_blank" rel="noreferrer">
                                <li>Docs</li>
                            </a>
                        </div>
                        <div className="right-side-menu">
                            <a href="https://forms.gle/iiBuTxyCtm4a2Naj6" className="presale" target="_blank" rel="noreferrer">
                                <img src="/images/presale.png" alt="logo" />
                            </a>
                            <a href="https://twitter.com/solonkapad" target="_blank" rel="noreferrer">
                                <img src="/images/TWITTER.png" alt="logo" />
                            </a>
                            <a href="https://t.me/solonkapad" target="_blank" rel="noreferrer">
                                <img src="/images/TELEGRAM.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div onClick={() => setNavToggle(!navToggle)} className={`navbar-toggle ${navToggle?'active':''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            <Outlet />

            <footer>
                <div className="menu">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/gems">Gems</a>
                        </li>
                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>
                        <li>
                            <a href="/">Tools</a>
                        </li>
                        <li>
                            <a href="/drops">Drops</a>
                        </li>
                        <li>
                            <a href="https://solonka.gitbook.io/solonka-docs/" target="_blank" rel="noreferrer">Docs</a>
                        </li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://t.me/solonkapad" target="_blank" rel="noreferrer">
                            <img src="/images/TELEGRAM.png" alt="" />
                        </a>
                        <a href="https://twitter.com/solonkapad" target="_blank" rel="noreferrer">
                            <img src="/images/TWITTER.png" alt="" />
                        </a>
                    </div>
                </div>
                <p className="copyright"><a href="https://t.me/willywonkagg" target="_blank" rel="noreferrer">@willywonkagg</a></p>
            </footer>
        </div>
    )
};

export default Layouts;