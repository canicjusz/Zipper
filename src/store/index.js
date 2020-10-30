import { createStore } from 'vuex'

export default createStore({
  state: {
    activeSection: 'zip',
    zipFiles: [],
    unzipFile: {},
    softwareKeys: {left: '', center: '', right: 'Refresh'},
    zipFileTitle: '',
    error: '',
    showError: false,
    timeout: undefined
  },
  mutations: {
    updateZipFileTitle(state, value){
      state.zipFileTitle = value
    },
    changeSection(state){
      state.activeSection = state.activeSection === 'zip' ? 'unzip' : 'zip'
    },
    removeZipFiles(state){
      state.zipFiles = []
    },
    addZipFile(state, value){
      state.zipFiles.push(value)
    },
    deleteZipFile(state, index){
      state.zipFiles.splice(index, 1)
    },
    changeUnzipFile(state, value){
      state.unzipFile = value
    },
    changeError(state, value){
      state.error = value
    },
    changeErrorVisibility(state, bool){
      state.showError = bool
    },
    changeSoftkeys(state, object){
      state.softwareKeys = object
    }
  },
  actions: {
    openError({ commit, state }, value){
      clearInterval(state.timeout)
      commit('changeError', value)
      commit('changeErrorVisibility', true)
      state.timeout = setTimeout(()=>commit('changeErrorVisibility', false), 2500)
    },
    refreshComponent({commit}){
      commit('changeSection', '')
      setTimeout(()=>{
        commit('changeSection', 'zip')
      }, 1)
    }
  },
  modules: {
  }
})
