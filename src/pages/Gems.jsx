const Gems = () => {
    return <>
        <section className="gems" id="gems">
            <img src="/images/bulb-5.png" alt="" className="bulb-5" />
            <img src="/images/gems.png" alt="" className="heading" />
            <div className="gradient-bg">
                <div className="left">
                    <img src="/images/img-2.png" alt="" />
                </div>
                <div className="right">
                    <div>
                        <h4>Pickey</h4>
                        <h5>Presale</h5>
                        <h5>Min.: 1 SOL</h5>
                        <h5>Max.: 10 SOL</h5>
                        <h5>Liq.: Burned </h5>
                        <h5>SC: 500 SOL</h5>
                        <h5>HC: 5K SOL</h5>
                        <h5>Status: Active</h5>
                    </div>
                    <div>
                        <a href="#gems-dashboard">
                            <img src="/images/access-btn.png" alt="" />
                        </a>
                        <p>Waiting:</p>
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="gems-2" id="gems-dashboard">
            <a href="#!" className="cw">
                <img src="/images/cw.png" alt="" />
            </a>
            <img src="/images/glass.png" alt="" className="glass" />
            <img src="/images/paper.png" alt="" className="paper" />
            <img src="/images/paper-2.png" alt="" className="paper-2" />
            <img src="/images/gems-2.png" alt="" className="heading" />
            <div className="gradient-bg">
                <div className="left">
                    <img src="/images/img-2.png" alt="" />
                </div>
                <div className="right">
                    <div>
                        <h4>Pickey</h4>
                        <h5>Presale</h5>
                        <h5>Min.: 1 SOL</h5>
                        <h5>Max.: 10 SOL</h5>
                        <h5>Liq.: Burned</h5>
                        <h5>SC: 500 SOL</h5>
                        <h5>HC: 5K SOL</h5>
                        <h5>Status: Waiting</h5>
                    </div>
                    <div>
                        <p>Waiting:</p>
                        <div className="progress-bar"></div>
                        <p>Starts at: 1/19, 7PM UTC</p>
                        <p> Ends at: 1/23 1PM U</p>
                    </div>
                </div>
            </div>
            <div className="gradient-bg gradient-bg-2">
                <div className="left">
                    <img src="/images/img-7.jpg" alt="" />
                    <p>PICKEY | PepeMickey
                        SOL</p>
                    <p>
                        "In the SOL LABS, where memes and toon collide,
                        cookin’ up a storm, with swagger and pride.
                        Pepe and Mickey in the mix, no lie.
                        The result? Pickey, reachin’ for the sky.
                        Ears of Mickey with Pepe’s cool grace,
                        Pickey’s the dopest creation, takin’ the space.
                        Crypto meme vibes, cartoon allure,
                        in the wold world, Mickey’s the cure.
                        Born From the lab, It’s a mad creation,
                        crazy fusion, no hesitation.
                        Pepe and Mickey, a legendary blend,
                        Pickey’s the perfect creation, on which legends depend."
                    </p>
                    <p>Tax: 0</p>
                    <p>Mint: Revoked</p>
                    <p>Freeze authority: Revoked </p>
                    <p>Liquidity: Burned</p>
                    <p>Utility: Disclosed on main chat</p>
                    <p><a href="https://www.pickey.fun/">https://www.pickey.fun/</a></p>
                    <p><a href="https://t.me/pickeyportal">https://t.me/pickeyportal</a></p>
                    <p><a href="https://twitter.com/Pickeysol">https://twitter.com/Pickeysol</a></p>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="live">
                            <div>
                                <a href="https://t.me/pickeyportal" target="_blank" rel="noreferrer">
                                    <img src="/images/tg.png" alt="" />
                                </a>
                                <a href="https://twitter.com/Pickeysol" target="_blank" rel="noreferrer">
                                    <img src="/images/twitr.png" alt="" />
                                </a>
                            </div>
                            <img src="/images/live.png" alt="" />
                        </div>
                        <h5 className="text-left">Total Contributors:<span>0</span></h5>
                        <h5 className="text-left">My Contribution:<span>0 SOL</span></h5>
                        <div className="amount">
                            <h6>Amount <span id="value">5</span></h6>
                            <img src="/images/max-sol.png" alt="" id="max" style={{ cursor: 'pointer' }} />
                            <a href="#!">
                                <img src="/images/button.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="bottom">
                        <h6>Waiting</h6>
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </section>
        <img src="/images/img-1.png" alt="" />
    </>;
};

export default Gems;