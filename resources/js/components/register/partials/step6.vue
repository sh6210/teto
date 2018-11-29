<template>
	<div v-if="$root.stepSix">
		<div class="step-form">
				<div class="congratulations">
					<img src="/site-images/icons/cong.png" alt="congratulationicon">
					<p class="congratulation"> Congratulation</p>
					<p class="successfully">Congratulation You have successfully submitted your profile</p>
					<p class="forget">We are currently reviewing your profile and will send you an email when it is approved and ready.
				 Please do not forget to verify your email address.</p>
				</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "step6"
    }
</script>

<style scoped>

</style>
