<script >
import HomeView from './views/HomeView.vue';
import GamePlayView from './views/GamePlayView.vue';
import { mapActions, mapGetters } from "vuex";
export default {
  methods:{
      ...mapActions(['fetchQuestionSport','fetchQuestionMovies', 'fetchQuestionMusic', 'fetchQuestionBooks' ]),
      
    },
    created() {
      
      this.fetchQuestionSport();
      this.fetchQuestionMovies();
      this.fetchQuestionMusic();
      this.fetchQuestionBooks();
    },
}


</script>

<template>


  <RouterView>
   
  </RouterView>
  
</template>

