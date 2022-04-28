<template>
    <div class="  absolute top-0 bottom-0 right-0 left-0 z-30 bg-Ash flex justify-center items-center ">
        
        <div class=" bg-white border border-Ash-2 md:pt-28 pt-8 md:pb-20 pb-8 md:px-52 px-8 max-w-4xl text-center">
            <h3 class=" font-bold text-xl text-black mb-7">The Correct Answer is:</h3>
            <p class=" max-w-md font-normal text-black md:text-xl text-xl mb-24">{{answer}}</p>
            <router-link to="/" >
                    <img src="../assets/images/reload.svg" alt="Reload" class=" md:w-12 md:h-12 w-8 h-8 mx-auto cursor-pointer">
            </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    props:['answer'],
}
</script>