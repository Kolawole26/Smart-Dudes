import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  
    state: {

        data: []
      },
    mutations: {
        setQuestionsSport: (state, data) => (state.data = data),
        setQuestionsMovies: (state, data) => (state.data = data),
        setQuestionsMusic: (state, data) => (state.data = data),
        setQuestionsBooks: (state, data) => (state.data = data),
    },
    actions: {
        async fetchQuestionSport({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=10&category=21');

            commit('setQuestionsSport', response.data)
            console.log('response>>>>', response.data)
            
            
        },
        async fetchQuestionMovies({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple');

            commit('setQuestionsMovies', response.data)
            console.log('response>>>>', response.data)
            
            
        },
        async fetchQuestionMusic({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=10&category=12&type=multiple');

            commit('setQuestionsMusic', response.data)
            console.log('response>>>>', response.data)
            
            
        },
        async fetchQuestionBooks({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=10&category=10&type=multiple');

            commit('setQuestionsBooks', response.data)
            console.log('response>>>>', response.data)
            
            
        },
    },
    getters: {
        allData: (state) => state.data
    }
})