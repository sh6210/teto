<template>
	<div v-if="$root.stepTwo">
	   <div class="custom-modal" >
		   <div class="modalContainer">
			   <div class="innerArea">
				   <div class="form-group">
					   <label >Please enter your phone verification number</label>
					   <input class="form-control" type="number" name="" id="" placeholder="X X X X X">
				   </div>
				   <p>Did you receive phone verification number ? <a href="" class="link"> send again</a></p>
				   <div class="modalControl">
					   <button data-v-07636019="" class="back-button" @click.prevent="$root.closeModal">Back</button>
					   <button data-v-07636019="" class="continue-button" @click.prevent="$root.callThirdStep">Continue</button>
				   </div>
			   </div>
		   </div>
	   </div>
	</div>
</template>

<script>
    export default {
        name: "step2",
    }
</script>

<style scoped>

</style>
