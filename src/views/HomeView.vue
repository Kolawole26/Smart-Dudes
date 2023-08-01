<script >
import { useRouter } from 'vue-router'
import { mapActions } from 'vuex';
import gsap from 'gsap';


  export default {
    data() {

      return {
          router :  useRouter(),
      }
    },

    methods:{
      ...mapActions(['fetchQuestionSport']),
      ...mapActions(['fetchQuestionMovies']),
      ...mapActions(['fetchQuestionMusic']),
      ...mapActions(['fetchQuestionBooks']),

       
       async shareData() {
         await this.fetchQuestionSport()
          this.router.push("/gameplay");
          
        },

       async shareDataMovies() {
          await this.fetchQuestionMovies()
          this.router.push("/gameplay");
          
        },
       async shareDataMusic() {
         await this.fetchQuestionMusic()
          this.router.push("/gameplay");
          
        },

       async shareDataBooks() {
          await this.fetchQuestionBooks()
          this.router.push("/gameplay");
          
        },

    },
    

    
    mounted() {
    // Get the DOM element to animate

    const box = this.$refs.box;
    const des = this.$refs.des;
    const sport = this.$refs.sport;
    const movie = this.$refs.movie;
    const music = this.$refs.music;
    const book = this.$refs.book;

    // Animate the box using GSAP
    gsap.from(des, {
      delay: 0.9,
      duration: 2,
      ease: "back.out(1.7)",
      x: 300,
      autoAlpha: 0,
    });

    gsap.from(box, {
      delay: 2,
      duration: 2.5,
      ease: "back.out(1.7)",
      y: 50,
      autoAlpha: 0,
    });

    const tl = gsap.timeline({ delay: 0.8, paused: true });
    tl.from(sport, { x:'-200', autoAlpha: 0, duration: 1 });
    tl.from(movie, { x:'-200', autoAlpha: 0, duration: 1 });
    tl.from(music, { x:'+200', autoAlpha: 0, duration: 1 });
    tl.from(book, { x:'+200', autoAlpha: 0, duration: 1 });
    tl.play();

    // gsap.to(box, { duration: 2.5, ease: "back.out(1.7)", y: -500 });




    const loadingContainer = this.$refs.loadingContainer;
    const loadingCircle = this.$refs.loadingCircle;
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    // Set initial scale, opacity, and color
    gsap.set(loadingCircle, { scale: 0, opacity: 1 });

    // Animate the circle to expand to full screen
    gsap.to(loadingCircle, {
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
      onStart: () => {
        // Make the loading container visible before the animation starts
        gsap.set(loadingContainer, { display: 'flex' });
      },
      onUpdate: (progress) => {
        // Update the width and height of the circle based on the animation progress
        gsap.set(loadingCircle, {
          width: `${progress * fullWidth}px`,
          height: `${progress * fullHeight}px`,
        });

        // Change the color of the circle twice before the end of the animation
        if (progress > 0.3 && progress < 0.6) {
          gsap.to(loadingCircle, { backgroundColor: 'blue' });
        } else if (progress >= 0.6 && progress < 0.9) {
          gsap.to(loadingCircle, { backgroundColor: 'green' });
        }
      },
      onComplete: () => {
        // Animation completed, hide the loading container
        gsap.to(loadingContainer, { opacity: 0, display: 'none', duration: 0.3 });
      },
    });


  }, 
    
  beforeRouteLeave() {
    const content = this.$refs.content;
    gsap.from(content, {
      duration: 0.5,
      ease: "power2.in",
      x: 1000,
      autoAlpha: 0,
      onComplete: () => {
        next();
      }
    });
  }
      
      
  };
</script>

<template>
    <main class=" bg-B-purple text-center lg:h-screen" ref="content">
        <div class=" md:px-14 px-10  pb-7 lg:pb-0 ">
              <img src="../assets/images/Smart.svg" alt="smart logo" class=" mb-7 pt-4 mx-auto md:w-64 md:h-64 w-32 h-32" ref="box">
           
            <h3 ref="des"  class=" font-bold md:text-4xl text-lg text-white mb-24">Choose Category to play</h3>
            <div class=" lg:flex justify-between max-w-screen-2xl mx-auto ">
              
              <div ref="sport"    
               @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              @click="shareData" 
                class="bg-white rounded-2xl md:px-24 px-10 text-center btn pt-10 pb-2 mb-10 lg:mb-0 ">
                  
                  
                  <svg class="mb-7 mx-auto w-16 h-16 md:w-24 md:h-24" xmlns="http://www.w3.org/2000/svg" width="91.631" height="92.047" viewBox="0 0 91.631 92.047">
                    <path id="Icon_awesome-football-ball" data-name="Icon awesome-football-ball" d="M88.952,10.268a9.777,9.777,0,0,0-6.891-6.941A82.429,82.429,0,0,0,62.7.562l28.93,29.1a83.727,83.727,0,0,0-2.679-19.393ZM2.679,82.9A9.777,9.777,0,0,0,9.57,89.844,82.429,82.429,0,0,0,28.93,92.609L0,63.511A83.727,83.727,0,0,0,2.679,82.9ZM.776,51.671l39.941,40.2A58.832,58.832,0,0,0,90.873,41.5L50.914,1.3C26.436,4.905,4.951,23.333.776,51.671ZM59.394,28.733a1.478,1.478,0,0,1,2.088,0l2.088,2.1a1.5,1.5,0,0,1,0,2.1l-5.228,5.252,5.228,5.252a1.5,1.5,0,0,1,0,2.1l-2.088,2.1a1.478,1.478,0,0,1-2.088,0l-5.228-5.252-4.175,4.213,5.228,5.252a1.5,1.5,0,0,1,0,2.1l-2.088,2.1a1.478,1.478,0,0,1-2.088,0L45.815,50.78,41.64,54.974l5.228,5.252a1.5,1.5,0,0,1,0,2.1l-2.088,2.1a1.478,1.478,0,0,1-2.088,0l-5.228-5.252L32.237,64.42a1.478,1.478,0,0,1-2.088,0l-2.088-2.1a1.5,1.5,0,0,1,0-2.1l5.228-5.252-5.228-5.233a1.5,1.5,0,0,1,0-2.1l2.088-2.1a1.478,1.478,0,0,1,2.088,0L37.465,50.8,41.64,46.6l-5.228-5.252a1.5,1.5,0,0,1,0-2.1l2.088-2.1a1.478,1.478,0,0,1,2.088,0l5.228,5.252,4.175-4.194-5.228-5.252a1.5,1.5,0,0,1,0-2.1l2.088-2.1a1.478,1.478,0,0,1,2.088,0l5.228,5.252Z" transform="translate(0 -0.563)" fill="#d65db1"/>
                  </svg>
                  <p class="font-normal md:text-4xl text-3xl text-black mb-8 hover:text-white">Sports</p>
              </div>
             

             
                  <div ref="movie" @click="shareDataMovies" class="bg-white rounded-2xl md:px-24 px-10 text-center btn pt-10 pb-2 mb-10 lg:mb-0 ">
                
                  <svg class="mb-7 mx-auto w-16 h-16 md:w-24 md:h-24" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91">
                    <path id="Icon_map-movie-theater" data-name="Icon map-movie-theater" d="M81,23.2H69.771L81.065,12.372,69.892,1.44H54.078L65.407,12.267,53.793,23.2H40.362L51.911,12.372,40.5,1.44H24.417L35.747,12.267,24.117,23.2H12.734L24.289,12.372,12.859,1.44H1.44v91h91v-91H81.279L92.44,12.328ZM80.57,80.57H13.31V68.7H80.57Zm0-21.761H13.31V46.94H80.57Z" transform="translate(-1.44 -1.44)" fill="#d65db1"/>
                  </svg>

                  <p class="font-normal md:text-4xl text-3xl text-black mb-8">Movies</p>
                  </div>
             
                  
              
                  <div ref="music" @click="shareDataMusic" class="bg-white rounded-2xl md:px-24 px-10 text-center btn pt-12 pb-2 mb-10 lg:mb-0 ">
                    <svg class="mb-13 mx-auto w-16 h-16 md:w-24 md:h-16" xmlns="http://www.w3.org/2000/svg" width="91" height="67.053" viewBox="0 0 91 67.053">
                    <path id="Icon_material-queue-music" data-name="Icon material-queue-music" d="M61.974,9H4.5v9.579H61.974Zm0,19.158H4.5v9.579H61.974ZM4.5,56.895H42.816V47.316H4.5ZM71.553,9V48.178a14.345,14.345,0,1,0,9.579,13.506V18.579H95.5V9Z" transform="translate(-4.5 -9)" fill="#D65DB1"/>
                    </svg>

                    <p class="font-normal md:text-4xl text-3xl text-black mb-8">Music</p>
                  </div>
              
              
              
              
                  <div ref="book" @click="shareDataBooks" class="bg-white rounded-2xl md:px-24 px-10 text-center btn pt-12 pb-2 mb-10 lg:mb-0 "> 
                    <svg class=" mb-13 mx-auto w-16 h-16 md:w-24 md:h-16" xmlns="http://www.w3.org/2000/svg" width="91" height="63.567" viewBox="0 0 91 63.567">
                      <path id="Icon_metro-books" data-name="Icon metro-books" d="M21.112,8.571H5.22A2.656,2.656,0,0,0,2.571,11.22V69.489A2.656,2.656,0,0,0,5.22,72.138H21.112a2.656,2.656,0,0,0,2.649-2.649V11.22a2.656,2.656,0,0,0-2.649-2.649ZM18.463,24.463H7.869v-5.3H18.463ZM47.6,8.571H31.706a2.656,2.656,0,0,0-2.649,2.649V69.489a2.656,2.656,0,0,0,2.649,2.649H47.6a2.656,2.656,0,0,0,2.649-2.649V11.22A2.656,2.656,0,0,0,47.6,8.571ZM44.949,24.463H34.355v-5.3H44.949ZM65.9,12.667,51.705,19.818a2.657,2.657,0,0,0-1.174,3.557L74.367,70.681a2.656,2.656,0,0,0,3.557,1.174L92.116,64.7a2.656,2.656,0,0,0,1.174-3.557L69.454,13.841A2.656,2.656,0,0,0,65.9,12.667ZM79.381,69.489a2.649,2.649,0,1,1-2.649-2.649A2.649,2.649,0,0,1,79.381,69.489Z" transform="translate(-2.571 -8.571)" fill="#d65db1"/>
                    </svg>
                    <p class="font-normal md:text-4xl text-3xl text-black mb-8">Books</p>
                  </div>
              
              
              
              
            </div>
        </div>

        <!-- <div ref="box" class="box"></div> -->
        <div class="loading-container" ref="loadingContainer">
          <div class="loading-circle" ref="loadingCircle"></div>
        </div>
    </main>

</template>

<style scoped>

  .btn:hover {
    background-color:#D65DB1;
    cursor: pointer;
    transition-duration: 0.3s;
    transition: ease-out;
    
  }

  .btn:hover p {
    color:#fff
  }
  
   .btn:hover svg path {
    fill:white
  }
  
  .box {
  width: 100px;
  height: 100px;
  background-color: #ff6384;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #845EC2;
}
</style>
