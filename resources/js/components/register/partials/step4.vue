<template>
	<div v-if="$root.stepFour">
		<div class="step-form">
				<p class="academic pb-3">What subject would you like to teach?</p>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >Subject</label>
							<select  class= "form-control">
								<option>Math, English</option>
							</select>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label >Level</label>
							<input type="text" name="level" class="form-control" placeholder="GCSE">
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label >Price</label>
							<input type="number" name="price" class="form-control" placeholder="AED 30">
						</div>
					</div>
				
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<span class="another-qualification">
								<i class="fas fa-plus-circle"></i>
								Add Subject
							</span>
						</div>
					</div>
				</div>
				<p class="academic pb-3"> General Availability</p>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group"  >
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
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td class="checkMark"></td>
								<td class="checkMark"></td>
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
							<input type="text" name="language" placeholder="English, Arabic, French" class="form-control" style="width:50%;">
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
    export default {
        name: "step4"
    }
</script>

<style scoped>

</style>
