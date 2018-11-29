<template>
	<div v-if="$root.stepOne">
		<div class="step-form">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label  >First Name</label>
						<input type="text"  class= "form-control step-input"    placeholder="Komol" >
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label >Last Name</label>
						<input type="text"  class= "form-control"  placeholder="Kuchkarov">
					</div>
				
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label >Gender: Male/Female</label>
						<input type="text"  class= "form-control"  placeholder="Male/Female">
					</div>
				</div>
				<div class="col-md-6">
				
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label >Phone Number</label>
						<input type="text"  class= "form-control"  placeholder="1-888-243-0000">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label >E-mail</label>
						<input type="text"  class= "form-control"  placeholder="komolkuchkarov@gmail.com">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<label >Current address</label>
						<input type="text"  class= "form-control"  placeholder="Enter your address">
					</div>
				</div>
			
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label >City</label>
						<input type="text"  class= "form-control"  placeholder="">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label >Zip code</label>
						<input type="text"  class= "form-control"  placeholder="">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label >State</label>
						<input type="text"  class= "form-control"  placeholder="">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label >Country</label>
						<input type="text"  class= "form-control"  placeholder="">
					</div>
				</div>
				<div class="col-md-12">
					<div class="control-button">
						<button class="back-button" @click.prevent="$root.backMessege">Back</button>
						<button class="continue-button" @click="$root.callSecondStepModal">Continue</button>
					</div>
				</div>
				
			</div>
		</div>
		
	
	</div>
</template>

<script>
    export default {
        name: "step1"
    }
</script>

<style scoped>

</style>
