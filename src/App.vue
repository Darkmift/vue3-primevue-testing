<template>
	<div class="#app p-grid">
		<div class="p-col-12">
			<app-nav />
		</div>
		<div class="p-col-12">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

import AppNav from "./components/AppNav.vue";

export default {
	name: "App",
	components: { AppNav },
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = to.name || "App";
			},
		},
	},
	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch({
				type: "logUser",
				user: { fname: "Jhon", lname: "smith", role: 1, id: "43g5e" },
			});
		});
	},
};
</script>
