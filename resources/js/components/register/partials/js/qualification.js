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