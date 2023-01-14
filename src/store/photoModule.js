import axios from 'axios'

export default {
  state: {
		photos: [],
		dialogVisible: false,
		currentPhoto: {}
  },
  getters: {
		getAllPhotos(state) {
			return state.photos
		},
		getDialogVisible: (state) => state.dialogVisible,
		getCurrentPhoto: (state) => state.currentPhoto
  },
  mutations: {
		setPhotos(state, payload) {
			state.photos = payload
		},
		showDialog(state) {
			state.dialogVisible = true
		},
		hideDialog(state) {
			state.dialogVisible = false
		},
		setCurrentPhoto(state, payload) {
			state.currentPhoto = payload
		}
  },
  actions: {
		fetchPhotos(context) {
			axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
				.then(response => context.commit('setPhotos', response.data))
		}
  },
}