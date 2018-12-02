<template>
	<div>
			<div class="container">
				<div class="col-md-2"></div>
				<div class="col-md-8 mx-auto">
					<div class="step-main-top">
						<ul>
							<li>
								<div :class="{'circleCheck':true, 'active' :$root.$data.circleActive}"> </div>
								<div class="step-circle active">
									<i class="far fa-user"></i>
								</div>
								<div>Personal Detail </div>
								<div :class="{'bar':true, 'bar-active':$root.$data.barActive}"></div>
							</li>
							
							<li>
								<div :class="{'circleCheck':true,'active' :$root.$data.circleActiveTwo}"> </div>
								<div :class="{'step-circle':true,'active':$root.$data.stepCircleActiveTwo}">
									<i class="far fa-newspaper"></i>
								</div>
								<div>Qualification</div>
								<div :class="{'bar':true, 'bar-active':$root.$data.barActiveTwo}"></div>
							</li>
							<li>
							<div :class="{'circleCheck':true,'active' :$root.$data.circleActiveThree}"> </div>
								<div :class="{'step-circle':true,'active':$root.$data.stepCircleActiveThree}">
									<i class="fas fa-book"></i>
								</div>
								<div>Tutoring Subjects</div>
								<div :class="{'bar':true, 'bar-active':$root.$data.barActiveThree}"></div>
							</li>
							<li><div :class="{'circleCheck':true,'active' :$root.$data.circleActiveFour}"> </div>
								<div :class="{'step-circle':true,'active':$root.$data.stepCircleActiveFour}">
									<i class="far fa-credit-card"></i>
								</div>
								<div>Get Paid</div>
							</li>
						</ul>
					</div>
					<step1></step1>
					<step2></step2>
					<step3 :qualifications="qualifications" :subjects="subjects"></step3>
					<step4 :teaches="teaches" :selectedDates="selectedDates"></step4>
					<step5></step5>
					<step6></step6>
				</div>
				<div class="col-md-2"></div>
			</div>
	</div>
</template>

<script>
    import step1 from './partials/step1'
    import step2 from './partials/step2'
    import step3 from './partials/step3'
    import step4 from './partials/step4'
    import step5 from './partials/step5'
    import step6 from './partials/step6'
    export default {
        name: "register",
        components:{step1, step2,step3,step4,step5,step6},
		data(){
            return {
                qualifications:[],
				subjects:[],
				teaches:[],
                selectedDates:[
                    {morning:['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']},
                    {afternoon:['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']},
                    {evening:['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']}
				]
			}
		}
    }
</script>

<style scoped>

</style>
