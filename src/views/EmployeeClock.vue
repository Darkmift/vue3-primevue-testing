<template>
	<div class="employee-clock">{{ user.name }}</div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
	name: "EmployeeClock",
	components: {},
	props: {},
	setup() {
		const user = { name: "joe" };
		return { user };
	},
};
</script>