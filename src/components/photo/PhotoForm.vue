<template>
	<v-container>
		<v-row class="d-flex">
			<v-text-field v-model="title" />
			<v-file-input v-model="img" />
			<v-btn :disabled="!isFormValid" @click="onAddPhoto">Add new</v-btn>
		</v-row>
	</v-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	data: () => ({
		title: '',
		img: null,
	}),
	computed: {
		isFormValid() {
			return this.title.trim().length && this.img
		}
	},
	methods: {
		...mapMutations(['addPhoto']),

		onAddPhoto() {
			const reader = new FileReader()
			reader.onload = () => {
				let photo = {
					id: Date.now(),
					title: this.title,
					url: reader.result,
				}
				this.addPhoto(photo)
				this.title = ''
				this.img = null
			}
			reader.readAsDataURL(this.img)
		}
	}
}
</script>

<style scoped>

</style>