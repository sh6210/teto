<template>
	<div v-if="$root.stepFour">
		<div class="step-form">
			<p class="academic pb-3">What subject would you like to teach?</p>
			<teach :teaches="teaches"></teach>
			<p></p>
			<p class="academic pb-3"> General Availability</p>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<table class="table customTable">
							<thead>
							<tr>
								<th></th>
								<th>Mon</th>
								<th>Tue</th>
								<th>Wed</th>
								<th>Thu</th>
								<th>Fri</th>
								<th>Sat</th>
								<th>Sun</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>Morning</td>
								<td for="mondayMorning" :class="{'day':true, 'checkMark':$root.$data.check }" @click.prevent="$root.callMondayMorning">
									<!--<label  class="calenderItemBox" > monday </label>-->
									<input id="mondayMorning" type="checkbox" class="calenderCheckBox" v-model="$root.$data.mondayMorning">
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td class=""></td>
								<td class=""></td>
							</tr>
							<tr>
								<td>Afternoon</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>Evening</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							</tbody>
						</table>
					
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<p class="academic pb-3">How many language do you speak: English/Arabic/Mandarine</p>
						<input type="text" name="language" placeholder="English, Arabic, French" class="form-control"
						       style="width:50%;">
					</div>
				</div>
				<div class="col-md-12">
					<div class="control-button">
						<button class="back-button" @click.prevent="$root.backThirdPage">Back</button>
						<button class="continue-button" @click="$root.callFiveStep">Continue</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import teach from './teach.vue'

    export default {
        name: "step4",
        props: ['teaches'],
        components: {teach}
    }
</script>

<style scoped>

</style>
