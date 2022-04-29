<template>
  
  <div class=" relative">

  <GamePlay1 v-if="incorrectAnswer" :answer="answer " :percent="percentageScore"></GamePlay1>
  <GameEnd v-if="endofQuiz" :percent="percentageScore"></GameEnd>
  <div class="bg-pink lg:pb-28 pb-7 lg:px-24 px-9 ">
    <div class="flex justify-between items-center pt-5">
      <img
        src="../assets/images/Smart.svg"
        alt="smart logo"
        class="md:w-32 md:h-32 w-16 h-16"
      />
      <router-link to="/">
        <img
          src="../assets/images/home.svg"
          alt="smart logo"
          class="md:w-14 md:h-12 w-7 h-6"
        />
      </router-link>
    </div>
    <div class="pt-4 flex justify-end relative lg:right-48 md:mb-20 mb-10">
      <div class="flex items-center">
        <img
          src="../assets/images/grade.svg"
          alt="smart logo"
          class="md:w-10 md:h-9 w-5 h-5"
        />
        <p class="text-white font-bold md:text-3xl text-base ml-1">
          {{ score }}
        </p>
      </div>
      <div class="flex items-center md:ml-14 ml-7">
        <img
          src="../assets/images/clock.svg"
          alt="smart logo"
          class="md:w-10 md:h-10 w-5 h-5"
        />
        <p class="text-white font-bold md:text-3xl text-base md:ml-4 ml-2">
          {{minuteTime}}:{{secondTime}}
        </p>
      </div>
    </div>
    <div class="">
      <p
        class="
          max-w-6xl
          font-normal
          md:text-3xl
          text-base text-white
          mx-auto
          md:mb-36
          mb-16
        "
      >
        {{ formattedQuestion }}
      </p>

      <div class="lg:grid grid-cols-2 gap-16 text-center">
        <div v-for="(choice, item) in currentQuestion.choices" :key="item">
          <div
            class="
              bg-white
              md:py-12 md:px-12
              py-6
              px-6
              rounded-2xl
              max-w-xl
              mx-auto
              
              option-default
              mb-10
              lg:mb-0
            "
            :ref="optionChosen"
            @click="onOptionClicked(choice, item)"
          >
            <span class="hidden">{{ item }}</span>
            <p class="font-normal md:text-xl text-base text-black">
              {{ choice }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<style scoped>
.btn:hover {
  background-color: #401633;
  transition-duration: 0.3s;
  transition: ease-out;
}
.option-default {
  cursor: pointer;
}
.btn:hover p {
  color: white;
}
</style>

<script>
import { onMounted, ref } from "vue";
import GamePlay1 from "../components/GamePlay1.vue";
import GameEnd from "../components/GameEnd.vue";
import store from "../store";
export default {


    

  setup() {
    //data
    let canClick = true;
    let questionCounter = ref(0);
    let score = ref(0);
    let timer = 180
    let minuteTime = ref("")
    let secondTime = ref("")
    const answer = ref("")
    let incorrectAnswer = ref(false);
    let endofQuiz = ref(false);
    const currentQuestion = ref({
      category: "",
      question: "",
      answer: 1,
      choices: [],
    });
    let percentageScore = ref(0);

    const questions = [];


    const loadQuestion = () => {
      canClick = true;
      //check if there are more questions to load

      if (questions.value.length > questionCounter.value) {
    
        //load questions
        currentQuestion.value = questions.value[questionCounter.value];
        questionCounter.value++;
        
      } else {
        //no more questions
        
        onQuizEnd();
      }
    };
    const clearSelected = (divSelected) => {
      
      divSelected.classList.add("option-default");
      
     

      setTimeout(() => {
       
        loadQuestion();
         divSelected.classList.remove("btn");
      }, 1000);
    };
    //methods/functions
    let itemsRef = []
    const optionChosen = (element) => {
      if(element){
        itemsRef.push(element)
      }
    }
    const onOptionClicked = (choice, item) => {
      const divContainer = itemsRef[item];
      if (canClick) {
        //Todo select an option
        
        const optionID = item + 1;
        if (currentQuestion.value.answer == optionID) {
         //correct answer
          divContainer.classList.add("btn")
          divContainer.classList.remove("option-default")
          score.value += 10;
          clearSelected(divContainer);
        } else {
          //Wrong answer
          divContainer.classList.add("btn")
          divContainer.classList.remove("option-default")
          percentageScore.value = (score.value / 100) * 40;
          
          incorrectAnswer.value = true;
          
          answer.value = currentQuestion.value.choices[currentQuestion.value.answer - 1]
            
          
        }
        canClick = false;
        //Todo go to next question 
         
        console.log(choice)
      } else {
        //cant select an option
      
      }
    };
    const countDownTimer = function () {

      let interval = setInterval(() => {

      const mins = Math.floor(timer / 60) % 60;
      const sec = Math.floor(timer) % 60;
      minuteTime.value = setTime(mins)
      secondTime.value = setTime(sec)
      
      
        if (timer > 0) {
          timer--
        } else {
          
          onQuizEnd();
          clearInterval(interval);
        }
      }, 1000);
    };

    function setTime(value) {
      return value > 9 ? value.toString() : `0${value}`
      
    }

    

    const fetchQuestionsFromServer = async function () {
      const datas = store.getters.allData

   
          // map json to fit our own arrangement
          const newQuestions = datas.results.map((serverQuestion) => {
            const arrangedQuestion = {
               category: serverQuestion.category,
              question: serverQuestion.question,
              choices: "",
              answer: "",
            };
            
            
            const choices = serverQuestion.incorrect_answers;
            arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);
            choices.splice(
              arrangedQuestion.answer - 1,
              0,
              serverQuestion.correct_answer
            );
            arrangedQuestion.choices = choices;
            return arrangedQuestion;
          });
          
          
          questions.value = newQuestions;
          
          loadQuestion();
          countDownTimer();
        
    }
    const onQuizEnd = function () {
      //calculate the percentage
      percentageScore.value = (score.value / 100) * 40;

      //stop the Timer
      timer = 0;

      //show overlay
      endofQuiz.value = true;
    };

    

    //lifecycle hooks
    onMounted(() => {
      fetchQuestionsFromServer();
       

    });
    //return
    return {
      currentQuestion,
      questions,
      questionCounter,
      percentageScore,
      incorrectAnswer,
      endofQuiz,
      score,
      minuteTime,
      secondTime,
      timer,
      answer,
      optionChosen,
      loadQuestion,
      onOptionClicked,
      onQuizEnd,
    
    };
  },

  

  computed: {
    formattedQuestion() {
      let entities = {
        amp: "&",
        apos: "'", 
        "#x27": "'",
        "#x2F": "/",
        "#39": "'",
        "#47": "/",
        lt: "<",
        gt: ">",
        nbsp: " ",
        quot: '"',
        "#039": "'",
      };
      return this.currentQuestion.question.replace(
        /&([^;]+);/gm,
        function (match, entity) {
          return entities[entity] || match;
        }
      );
    },
  },


  components: { GamePlay1, GameEnd },
};
</script>