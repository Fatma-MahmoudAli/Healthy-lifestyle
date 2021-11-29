const Home = () => {
    return ( 
        <div>
            <section className="banner" id="banner">
        <div className="content">
            <h2>Be healthy</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="Healthy.html" className="btn" target="_blank"> Let's start</a>
        </div>
    </section>

    <section className="about" id="about">
        <div className="row">
                        <div className="col50">
                            <h2 className="titletext"><span>L</span>ife Style</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus, fuga cum quibusdam earum alias facere quaerat sed quam,
                                ducimus deleniti, quia voluptatem? Temporibus molestias beatae sint ipsum fugit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus, fuga cum quibusdam earum alias facere quaerat sed quam,
                                ducimus deleniti, quia voluptatem? Temporibus molestias beatae sint ipsum fugit!
                                
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus, fuga cum quibusdam earum alias facere quaerat sed quam,
                                ducimus deleniti, quia voluptatem? Temporibus molestias beatae sint ipsum fugit! <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi architecto atque nemo quod,
                            dignissimos cupiditate impedit eveniet voluptas, at voluptatibus culpa nam error consequuntur minima quas magni sed pariatur.</p>
                        </div>
                        <div className="col50">
                            <div className="imgbox">
                                <img src="./images/MUFF.jpg" />
                            </div>
                        </div>

        </div>

    </section>
        </div>
     );
}
 
export default Home;
