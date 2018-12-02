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
                    <input class= "form-control"
                           style=" width: 40%;"
                           placeholder="yyyy"
                           v-model="year"
                           v-mask="'####'"
                           type="text"
                           name="year"
                           id="year"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group pb-3" @click="addQualifications()" style="cursor:pointer;">
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
                                class="btn btn-sm btn-success float-right edit-btn"
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
<script src="./js/qualification.js"></script>