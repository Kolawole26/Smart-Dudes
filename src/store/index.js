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
            const response = await axios.get('https://opentdb.com/api.php?amount=25&category=21&difficulty=medium&type=multiple');

            commit('setQuestionsSport', response.data)
            
            
        },
        async fetchQuestionMovies({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=25&category=11&difficulty=medium&type=multiple');

            commit('setQuestionsMovies', response.data)
            
            
        },
        async fetchQuestionMusic({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=25&category=12&difficulty=medium&type=multiple');

            commit('setQuestionsMusic', response.data)
            
            
        },
        async fetchQuestionBooks({commit}) {
            const response = await axios.get('https://opentdb.com/api.php?amount=25&category=10&difficulty=medium&type=multiple');

            commit('setQuestionsBooks', response.data)
            
            
        },
    },
    getters: {
        allData: (state) => state.data
    }
})