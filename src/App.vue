<script >
import { mapActions } from "vuex";
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


  <RouterView></RouterView>
  
</template>

