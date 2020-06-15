export default {
	getStorage(state){
	  if(localStorage.getItem('assessment')){
	  	state.assessment=localStorage.getItem('assessment')
	  }
	  return state.assessment
	}
}
