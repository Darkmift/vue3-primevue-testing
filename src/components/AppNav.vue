<template>
	<div class="app-nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/manager">Admin</router-link> |
		<router-link to="/employee-clock">Sign In/Out</router-link>
	</div>
</template>

<style lang="scss" scoped>
.app-nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>

<script>
export default {
	name: "EmployeeClock",
	components: {},
	props: {},
	setup() {},
};
</script>