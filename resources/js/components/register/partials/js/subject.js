export default {
    props: ['subjects'],
    data() {
        return {
            grade: '',
            subject: ''
        }
    },
    methods:{
        addSubject(){

            if(!this.subject || !this.grade){
                alert('missing input')
                return null
            }

            this.subjects.push({subject:this.subject, grade:this.grade})

            this.subject = ''
            this.grade = ''

            $('#subject').focus()
        },
        deleteSubject(index){
            this.subjects.splice(index, 1)
        },

        editSubject(index){

            this.grade = this.subjects[index].grade
            this.subject = this.subjects[index].subject
            this.deleteSubject(index)
            $('#subject').focus()
        },
    }
}