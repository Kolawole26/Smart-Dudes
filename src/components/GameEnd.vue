<template>
    <div class="  absolute z-30 top-0 bottom-0 right-0 left-0 bg-Ash flex justify-center items-center ">
        
        <div class=" bg-white border border-Ash-2 md:pt-28 pt-8 md:pb-20 pb-8 md:px-52 px-24 max-w-4xl text-center">
            <h3 class=" font-bold text-xl text-black mb-7">All Done!</h3>
            <p class=" max-w-md font-normal text-black text-2xl mb-24">{{percent}}% score</p>
            <router-link to="/" >
                    <img src="../assets/images/reload.svg" alt="Reload" class=" md:w-12 md:h-12 w-8 h-8 mx-auto cursor-pointer" ref="box">
            </router-link>
            
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import anime from 'animejs';

export default {
    props:['percent'],

    
    // Get the DOM element to animate
    mounted() {
    const box = this.$refs.box;

    anime({
  targets: box,
  rotateY: '360deg',
  duration: 1000,
  easing: 'easeInOutQuad',
});
    }
}
</script>