const Menu = () => {
    return (  
        <div>
            <section class="menu" >
        <div class="title">
            <h2 class="titletext"><span>Sports</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>


    <div class="content">


            <div class="box">

                            <div class="imgbox">
                                <a href="https://www.healthline.com/health/fitness-exercise/cardio-exercises-list"> <img src="images/sport3.jpg" /></a>
                            
                            </div>

                            
                            <div class="text">
                                <h3>Cardio</h3>
                            </div>
            </div>

            <div class="box">
                <div class="imgbox">
                <a href="https://www.nytimes.com/guides/well/strength-training-plyometrics"> <img src="images/sport2.jpg"/></a>
            </div>
            <div class="text">
                <h3> WorkOut</h3>
            </div>
        </div>

        <div class="box">
            <div class="imgbox">
                <a href="https://www.yogajournal.com/"> <img src="images/sport1.jpg" /></a>
        </div>
        <div class="text">
            <h3>Yoga</h3>
        </div>
            </div>
            
    </div>

    <div class="title">
        <a href="https://penaltyfile.com/types-of-sports/" class="bttn">Show More</a>
    </div>
</section>
              <section class="expert" id="Food">
    <div class="title">
        <h2 class="titletext"><span>Food</span> </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>




    <div class="content">

        <div class="box">


            <div class="card">
                       <div class="face front" >
                        <div class="imgbox">
                            <img src="images/green.jpg" />
                            </div>
                            <div class="text">
                                <h3>Drinks</h3>
                            </div>
                       </div>

                        <div class="face Back">
                            <p id="para" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus</p>
                        </div>
                    </div>           
                        
        </div>



        <div class="box">


            <div class="card">
                       <div class="face front" >
                        <div class="imgbox">
                            <img src="images/salad2.jpg" />
                            </div>
                            <div class="text">
                                <h3>Salad</h3>
                            </div>
                       </div>

                        <div class="face Back">
                            <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus</p>
                        </div>
                    </div>           
                        
        </div>


        <div class="box">


            <div class="card">
                       <div class="face front" >
                        <div class="imgbox">
                            <img src="images/pasta3.jpg" />
                            </div>
                            <div class="text">
                                <h3>Food</h3>
                            </div>
                       </div>

                        <div class="face Back">
                            <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus</p>
                        </div>
                    </div>           
                        
        </div>

        <div class="box">


            <div class="card">
                       <div class="face front" >
                        <div class="imgbox">
                            <img src="images/carrot.jpg" />
                            </div>
                            <div class="text">
                                <h3>Deserts</h3>
                            </div>
                       </div>

                        <div class="face Back">
                            <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis doloribus</p>
                        </div>
                    </div>           
                        
        </div>

</div>
    </section>
    <section id="Blog">
    <div class="title">
        <h2 class="titletext"><span>Healthy Style</span> </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/9f3j_MVDYwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
        </div>
    );
}
 
export default Menu;