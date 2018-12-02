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

							<tr v-for="(timeSegment, timeSegmentIndex) in dates">
								<td>
									{{ Object.keys(timeSegment)[0] }}
								</td>
								<td v-for="(nameOfDays, dayIndex) in timeSegment[Object.keys(timeSegment)]" class="check-data">
									<!--{{nameOfDays}}-->
									<input class="check-box-adjustment" type="checkbox" v-model="selectedDates[timeSegmentIndex][dayIndex]"
										   :class="{
									    'day':true,
									    'checkMark': selectedDates[timeSegmentIndex][dayIndex]
									}
									">
								</td>
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
						<v-select multiple v-model="language" name="language" multiple :options="['arabic', 'english']"></v-select>
						<!--<input type="text" name="language" placeholder="English, Arabic, French" class="form-control"-->
						       <!--style="width:50%;">-->
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
        props: ['teaches', 'selectedDates'],
        components: {teach},
		data(){
            return {
                language:[],
                dates:[
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
