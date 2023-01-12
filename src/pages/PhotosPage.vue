<template>
	<v-container>
		<Photo v-for="photo in photos" :photo="photo" />
	</v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';
export default {
	components: {
		Photo
	},

	data: () => ({
		photos: []
	}),

	mounted() {
		this.fetchPhotos()
	},

	methods: {
		fetchPhotos() {
			this.axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
				.then(response => this.photos = response.data)
		}
	}
}
</script>

<style scoped>

</style>