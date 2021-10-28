<template>
	<div class="manager">{{ user.name }}</div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
	name: "Manager",
	components: {},
	props: {},
	setup() {
		const user = { name: "admin" };
		return { user };
	},
};
</script>