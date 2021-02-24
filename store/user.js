export default {
	namespaced:true,
	state:{
		userData:uni.getStorageSync('userData')?JSON.parse(uni.getStorageSync('userData')):{}
	},
	mutations:{
		setUserInfo(state,payload){
			state.userData = payload
		}
	}
}