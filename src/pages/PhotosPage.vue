<template>
	<v-container>
		<PhotoForm />
		<v-row>
			<Photo v-for="photo in $store.getters.getAllPhotos" :photo="photo" />
		</v-row>
		<PhotoDialog />
	</v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';
import PhotoDialog from '@/components/photo/PhotoDialog.vue';
import PhotoForm from '@/components/photo/PhotoForm.vue';
import { mapActions } from 'vuex';
export default {
	components: {
		Photo,
		PhotoForm,
		PhotoDialog
	},
	data: () => ({
		photos: [],
	}),
	mounted() {
		this.fetchPhotos()
	},
	methods: {
		...mapActions(['fetchPhotos']),
	}
}
</script>

<style scoped>

</style>