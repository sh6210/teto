<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Subject</label>
                    <input type="text"
                           id="subject"
                           v-model="subject"
                           class="form-control"
                           placeholder="Math, English"
                    />
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label>Grade</label>
                    <input type="text"
                           v-model="grade"
                           class="form-control"
                           style=" width: 40%;"
                           placeholder="A+/A/B-"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <span class="another-qualification" @click="addSubject()">
                        <i class="fas fa-plus-circle"></i>
                        Add another Subject
                    </span>
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(subject, index) in subjects">
                        {{'subject: ' + subject.subject + ', grade: ' + subject.grade}}
                        <button
                                class="btn btn-sm btn-danger float-right"
                                @click="deleteSubject(index)">
                            <i class="fa fa-times"></i>
                        </button>
                        <button
                                class="btn btn-sm btn-success float-right"
                                @click="editSubject(index)">
                                    <i class="fa fa-pen"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script src="./js/subject.js"></script>