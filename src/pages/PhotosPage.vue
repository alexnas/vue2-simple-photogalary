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
		photos: [
			{ id: 1, title: 'photo 1' },
			{ id: 2, title: 'photo 2' },
			{ id: 3, title: 'photo 3' },
			{ id: 4, title: 'photo 4' },
		]
	})
}
</script>

<style scoped>

</style>