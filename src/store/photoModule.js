import axios from 'axios'

export default {
  state: {
		photos: []
  },
  getters: {
		getAllPhotos(state) {
			return state.photos
		}
  },
  mutations: {
		setPhotos(state, payload) {
			state.photos = payload
		}
  },
  actions: {
		fetchPhotos(context) {
			axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
				.then(response => context.commit('setPhotos', response.data))
		}
  },
}