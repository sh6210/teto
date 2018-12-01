export default {
    props:['teaches'],
    data(){
        return {
            subject:'',
            level:'',
            price:''
        }
    },
    methods:{
        addTeach(){

            if(!this.subject || !this.level || !this.price){
                alert('missing input')
                return null
            }

            this.teaches.push({
                subject:this.subject,
                price: this.price,
                level:this.level,
            })

            this.subject = ''
            this.level = ''
            this.price = ''

            $('#subject').focus()
        },
        deleteTeach(index){
            this.teaches.splice(index, 1)
        },

        editTeach(index){

            this.subject = this.teaches[index].subject
            this.level = this.teaches[index].level
            this.price = this.teaches[index].price

            this.deleteTeach(index)
            $('#subject').focus()

        },
    }
}