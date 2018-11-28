<template>
	<div>
			<div class="container">
				<div class="col-md-2"></div>
				<div class="col-md-8 mx-auto">
					<div class="step-main-top">
						<ul>
							<li>
								<div class="step-circle active">
									<i class="far fa-user"></i>
								</div>
								<div>Personal Detail </div>
							</li>
							<li>
								<div class="step-circle">
									<i class="far fa-newspaper"></i>
									<!--<img src="/site-images/icons/qualification.PNG" alt="" class="img-responsive">-->
								</div>
								<div>Qualification</div>
							</li>
							<li>
								<div class="step-circle">
									<i class="fas fa-book"></i>
								</div>
								<div>Tutoring Subjects</div>
							</li>
							<li>
								<div class="step-circle">
									<i class="far fa-credit-card"></i>
								</div>
								<div>Get Paid</div>
							</li>
						</ul>
					</div>
					<step1></step1>
					<step2></step2>
				</div>
				<div class="col-md-2"></div>
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
