import React from 'react';
// Image imports
// import HeroImage from './../assets/featured-ambassador-nico-sol.jpg';
import Nico2 from './../assets/02-Nico-Sol.jpg';
import Nico3 from './../assets/03-Nico-Sol.jpg';
import Nico4 from './../assets/04-Nico-Sol.jpg';
import Nico5 from './../assets/05-Nico-Sol.jpg';
import Nico6 from './../assets/06-Nico-Sol.jpg';
import Nico7 from './../assets/07-Nico-Sol.jpg';
import Nico8 from './../assets/08-Nico-Sol.jpg';
import Nico9 from './../assets/09-Nico-Sol.jpg';
import Nico10 from './../assets/10-Nico-Sol.jpg';
import Nico11 from './../assets/11-Nico-Sol.jpg';
import StoriesConnections from './../assets/Stories-Connections.jpg';
import StoriesBasecamp from './../assets/Stories-Basecamp.jpg';
import StoriesShelter from './../assets/Stories-Shelter.jpg';


class Home extends React.Component{
    render(){
        return(
        <div className='home-container'>
            <div className='featured-photo'>
                {/* <img src={HeroImage} alt='man running with dog'/> */}
                <div className='featured-text-container'>
                    <h1 className='mile-text'>BE IN THE MILE</h1>
                    <div className='button-container'>
                        <button className='adventureBtn'>Start Adventure</button>
                        <button className='shopCollectionBtn'>Shop Collection</button>
                    </div>
                </div>
            </div>
           
            <div className='pace-container-1'>
                <div className='pace-text-container-1'>
                   <h1>IT'S NOT ABOUT PACE</h1>
                   <p>time, or average heart rate. It's not about miles covered or vertical gain. It's not about speed workouts, hill repeats, or races. It's not about personal records. It's not about sponsorships.</p>
                </div>
                <div className='pace-image-container-1'>
                   <img src={Nico2} alt='running with a dog' />
                </div>
            </div>

            <div className='pace-container-2'>
                <div className='pace-image-container-2'>
                   <img src={Nico3} alt='running with a dog' />
                </div>
                <div className='pace-text-container-2'>
                   <h1>IT'S ABOUT JOY.</h1>
                   <p>And suffering. It’s the grit to keep going. It’s gratitude for morning alpenglow. For the full moon, the quiet forest, the first snow. For shared experiences. For best friends.</p>
                </div>
            </div>

            <div className='blue-text-container'>
                <div className='blue-text'>
                    <p>Hi! I’m Sol. I was born on the Navajo reservation and then abandoned with my seven litter-mates in a cardboard box along the side of the road. I was picked up and taken to the Coconino Humane Society, where my human Nico and I found each other. I was just 5 weeks old. Nico and I went everywhere together, and we still do. One time, we were at a </p>

                    <p>sidewalk café and a couple ranchers said I’d be a good working dog. They offered Nico a lot of money for me, but he told them there was no way he’d give me up, not for any amount of money in the world. I wouldn’t give Nico up for anything either.</p>
                </div>
            </div>

            <div className='pace-container-1'>
                <div className='pace-text-container-1'>
                   <h1>IT'S TACKY DIRT</h1>
                   <p>between your toes. Gritty red sandstone under your paws. Quaking aspens laying down a carpet of yellow. The silent stillness of falling snow.</p>
                </div>
                <div className='pace-image-container-1'>
                   <img src={Nico4} alt='running with a dog' />
                </div>
            </div>

             <div className='pace-container-2'>
                <div className='pace-image-container-2'>
                   <img src={Nico5} alt='running with a dog' />
                </div>
                <div className='pace-text-container-2'>
                   <h2>Your lungs know what to do</h2>
                   <p>They draw on the sharp, desert winds. They gulp air, grasping for oxygen in the high alpine. They burn with effort. They don't flinch at the cold bite of winter.</p>
                </div>
            </div>

             <div className='blue-text-container'>
                <div className='blue-text'>
                    <p>Nico became my home. He's a professional mountain runner who spends every single day outside. I was carved from the red Navajo sandstone, where the wind howls and wild horses roam. Running is in our souls. When I was a puppy, Nico was careful not to run me too hard. I knew I could flop down in a bed of pine needles to let him know I was tired and he </p>

                    <p>would listen, turning us back for a drink and some rest. By the time I was two, I was joining Nico on most of his training runs and sometimes joining him at the end of his races, running through the finish by his side. Running is our shared celebration of freedom, of our bond, of our passion for the land. It’s how we have learned to live and run in the moment.</p>
                </div>
            </div>

            <div className='pace-container-1'>
                <div className='pace-text-container-1'>
                   <h1>LOOK UP</h1>
                   <p>Ferns glisten with dew. Tall grasses sparkle in golden sunlight. Wildflowers sway. A snowflake lands on your nose. The trail beckons.</p>
                </div>
                <div className='pace-image-container-1'>
                   <img src={Nico6} alt='running with a dog' />
                </div>
            </div>

            <div className='pace-container-2'>
                <div className='pace-image-container-2'>
                   <img src={Nico7} alt='running with a dog' />
                </div>
                <div className='pace-text-container-2'>
                   <h2>Your heart knows how to beat</h2>
                   <p>You don't need to keep track of it. It matches the rhythm of your footsteps as you round switchbacks. It leaps with you over downed trees. It flutters as you emerge above treeline and lifts a little higher as you take in the view.</p>
                </div>
            </div>

             <div className='pace-container-1'>
                <div className='pace-text-container-1'>
                   <p>The forest tastes of trees, plants, and stone. They're ground together into a fine dust that collects in the corners of your mouth. The tumbling waters of fresh snowmelt quench, cool, and refresh. Autumn tastes of decaying leaves and pinecones. Spring tastes like wildflowers.</p>
                </div>
                <div className='pace-image-container-1'>
                   <img src={Nico8} alt='running with a dog' />
                </div>
            </div>

            <div className='pace-container-2'>
                <div className='pace-image-container-2'>
                   <img src={Nico9} alt='running with a dog' />
                </div>
                <div className='pace-text-container-2'>
                   <h2>Your muscles remember what to do</h2>
                   <p>They don’t need to be told how to power you up a hill. They instinctively propel you over rocks and roots. They work together to provide stability on slick mud and hard packed snow. And your feet know where to go. One in front of the other.</p>
                </div>
            </div>

              <div className='pace-container-1'>
                <div className='pace-text-container-1'>
                   <h1>Listen</h1>
                   <p>The birds have songs for you. The insects will tell you their stories. The chipmunks will show you their cache, and the owls will ask you your name.</p>
                </div>
                <div className='pace-image-container-1'>
                   <img src={Nico10} alt='running with a dog' />
                </div>
            </div>

            <div className='pace-container-2'>
                <div className='pace-image-container-2'>
                   <img src={Nico11} alt='running with a dog' />
                </div>
                <div className='pace-text-container-2'>
                    <h2>Allow your mind to wander</h2>
                   <p>Allow it to dwell, spin, rinse and release. Be with the moment. It’s adventure. Breathe deeply. It’s love. Follow your nose.</p>
                </div>
            </div>
            
            <div className='latest-stories-container'>
                <h1>LATEST STORIES</h1>
                <div className='stories-images'>
                    <div className='stories-connections-container'>
                        <div className='stories-images-container'>
                        <img className='stories-connections' src={StoriesConnections} alt='stories connection' />
                        </div>
                        <div className='stories-text'>
                            <h3>CONNECTIONS BUILT TO LAST</h3>
                            <h5>Adventures</h5>
                        </div>
                    </div>
                    <div className='stories-basecamp-container'>
                        <div className='stories-images-container'>
                        <img className='stories-basecamp' src={StoriesBasecamp} alt='stories basecamp' />
                        </div>
                        <div className='stories-text'>
                            <h3>A PLACE THAT FEELS LIKE HOME</h3>
                            <h5>Adventures</h5>
                        </div>
                    </div>
                    <div className='stories-shelter-container'>
                        <div className='stories-images-container'>
                        <img className='stories-shelter' src={StoriesShelter} alt='stories shelter' />
                        </div>
                        <div className='stories-text'>
                            <h3>CONNECTIONS BUILT TO LAST</h3>
                            <h5>Adventures</h5>
                        </div>
                    </div>
                </div>
            </div>  

         </div>
        )
    }
}

export default Home