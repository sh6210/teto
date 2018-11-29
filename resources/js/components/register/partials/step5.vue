<template>
	<div v-if="$root.stepFive">
		<div class="step-form">
				<p class="academic pb-3">
					In order to receive your earnings, please enter your bank account information
				</p>
				<p class="bankTransfer">Bank Transfer:</p>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >Account Holder</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label >Bank Name</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
				</div>
			 
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >Account number</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label >IBAN (What is IBAN?)</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
				</div>
			 
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >Nationality</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
				 
				
				</div>
				<hr>
				<p class="alternative">Alternatively, you can also receive your earnings through Paypal</p>
				<p class="bankTransfer ">Paypal:</p>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >Your paypal email address</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					<div class="col-md-6"></div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label >Billing address</label>
							<input type="text" class="form-control" placeholder="Enter your address">
						</div>
					</div>
				
				
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >City</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label >Zip code</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
				
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label >State</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label >Country</label>
							<input type="text" class="form-control" placeholder="">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="control-button">
							<button class="back-button" @click.prevent="$root.backFourthPage">Back</button>
							<button class="continue-button" @click="$root.callSixStep">Continue</button>
						</div>
					</div>
				
				</div>
		</div>
		
	</div>
</template>

<script>
    export default {
        name: "step5"
    }
</script>

<style scoped>

</style>
