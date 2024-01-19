const Home = () => {
    return <>
        <section className="hero-section">
            <div className="hero-content">
                <img src="/images/pearl.png" alt="" className="pearl" />
                <img src="/images/book.png" alt="" className="book" />
                <img src="/images/bulb.png" alt="" className="bulb" />
                <img src="/images/bulb-2.png" alt="" className="bulb-2" />
                <img src="/images/ball.png" alt="" className="ball" />
                <img src="/images/ball.png" alt="" className="ball-2" />
                <div className="left" data-aos="fade-up">
                    <img src="/images/heading.png" alt="" />
                </div>
                <div className="right" data-aos="fade-left">
                    <img src="/images/man.png" alt="" className="ma" />
                </div>
            </div>
        </section>
        <img src="/images/img-1.png" alt="" className="img-1" />
        <section className="join" id="join">
            <h2>Join Us</h2>
            <a href="https://t.me/solonkapad" target="_blank" rel="noreferrer">
                <img src="/images/tg-btn.png" alt="" />
            </a>
            <img src="/images/bulb-3.png" alt="" className="bulb-3" />
            <img src="/images/bulb-4.png" alt="" className="bulb-4" />
        </section>
        <img src="/images/img-1.png" alt="" />
    </>;
};

export default Home;