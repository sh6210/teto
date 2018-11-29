<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Qualification</label>
                    <input type="text"  class= "form-control"
                           v-model="qualification"
                           name="qualification"
                           id="qualification">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label >Name of School/University</label>
                    <input type="text"  class= "form-control"
                           v-model="school_university"
                           name="school_university"
                           id="school_university">
                </div>

            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="Year">Year</label>
                    <input type="text"  class= "form-control"
                           style=" width: 40%;"
                           placeholder="yyyy"
                           v-model="year"
                           name="year"
                           id="year"
                           >
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group pb-3" @click="addQualifications()">
                    <!--<input type="radio"  name="" >-->
                    <span class="another-qualification">
                        <i class="fas fa-plus-circle"></i>
                        {{ !qualifications.length>0 ? 'Add qualification' : 'Add another qualification'}}
					</span>
                </div>
                <ul class="list-group">
                    <li v-for="(qua, index) in qualifications" class="list-group-item">
                        qualification: {{qua.qualification}} &nbsp;
                        university: {{qua.school_university}} &nbsp;
                        year:{{qua.year}}
                        <button
                                class="btn btn-sm btn-danger float-right"
                                @click="deleteQualification(index)">
                            <i class="fa fa-times"></i>
                        </button>
                        <button
                                class="btn btn-sm btn-success float-right"
                                @click="editQualification(index)">
                            <i class="fa fa-pen"></i>
                        </button>
                    </li>
                </ul>

                <input type="hidden" v-model="qualifications">
                <hr class="horizontalRule ">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['qualifications'],
        data(){
            return {
                school_university:'',
                qualification:'',
                year:'',
            }
        },
        methods:{

            deleteQualification(index){
                this.qualifications.splice(index, 1)
            },

            editQualification(index){
                this.school_university = this.qualifications[index].school_university
                this.qualification = this.qualifications[index].qualification
                this.year = this.qualifications[index].year
                this.deleteQualification(index)
                $('#qualification').focus()
            },

            addQualifications(){

                if(!this.qualification && !this.school_university && !this.year ){
                    alert( 'qualification is missing' )
                    return null
                }

                this.qualifications.push({
                    school_university:this.school_university,
                    qualification:this.qualification,
                    year:this.year,
                })

                this.school_university=''
                this.qualification=''
                this.year=''

                $('#qualification').focus()

            }
        }
    }
</script>