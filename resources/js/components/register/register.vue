<template>
	<div>
		
		<div>
		
			<step1></step1>
			<step2></step2>
		
		</div>
		
	</div>
</template>

<script>
	import step1 from './partials/step1'
	import step2 from './partials/step2'
    export default {
        name: "register",
	    components:{step1, step2}
    }
</script>

<style scoped>

</style>
