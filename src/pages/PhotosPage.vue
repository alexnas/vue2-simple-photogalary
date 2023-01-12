<template>
	<v-container>
		<PhotoForm @addPhoto="addPhoto" />
		<v-row>
			<Photo v-for="photo in photos" :photo="photo" />
		</v-row>
	</v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';
import PhotoForm from '@/components/photo/PhotoForm.vue';
export default {
	components: {
		Photo,
		PhotoForm
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
		},
		addPhoto(photo) {
			this.photos.push(photo)
		}
	}
}
</script>

<style scoped>

</style>