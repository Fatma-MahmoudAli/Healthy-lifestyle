const Feed = () => {
    return ( 
        <div>
              <section class="test" id="test">
                    <div class="title white">
                        <h2 class="titletext"><span>Our Coach</span></h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. doloribus ptate.</p>
                    </div>
                    <div class="content">
                        <div class="box">
                                        <div class="imgbox">
                                        <img src="images/testi1.jpg" />
                                        </div>
                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga accusamus est porro! Impedit qui reprehenderit,
                                                 deserunt quae officia, natus possimus repellendus quisquam autem itaque numquam in ipsa! Veniam, saepe!</p>
                                              <h3>Sara</h3>
                                         </div>
                        </div>
                        <div class="box">
                            <div class="imgbox">
                            <img src="images/testi2.jpg" />
                            </div>
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga accusamus est porro! Impedit qui reprehenderit,
                                     deserunt quae officia, natus possimus repellendus quisquam autem itaque numquam in ipsa! Veniam, saepe!</p>
                                  <h3>Ahmed</h3>
                             </div>
            </div>
            <div class="box">
                <div class="imgbox">
                <img src="images/testi3.jpg" />
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga accusamus est porro! Impedit qui reprehenderit,
                         deserunt quae officia, natus possimus repellendus quisquam autem itaque numquam in ipsa! Veniam, saepe!</p>
                      <h3>Manar</h3>
                 </div>
                </div>
                </div>
                </section>

                <section class="contact" id="contact">
                    {/* <div class="title">
                        <h2 class="titletext"><span>C</span>ontact Us</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. doloribus ptate.</p>
                    </div> */}
                   <form action="Thank.html">
                    <div class="contactform" >
                        <h3>Join Us</h3>
                        <div class="inputBox">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div class="inputBox">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="inputBox">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="send" id="submit" />
                        </div>
                    </div>
                   </form>
                    
                </section>


                <div class="copyright">
                    <p>copyright <a>online tutrial</a> All Right reserved </p>
                </div>
        </div>
     );
}
 
export default Feed;