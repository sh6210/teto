
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueTheMask from 'vue-the-mask'
import vSelect from 'vue-select'

Vue.use(VueTheMask)

Vue.component('v-select', vSelect)
Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('site-header', require('./components/site-header.vue'));
Vue.component('site-footer', require('./components/site-footer.vue'));
Vue.component('register', require('./components/register/register.vue'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    data(){
        return{
            barActive:false,
            barActiveTwo:false,
            barActiveThree:false,
            stepOne:true,
            stepTwo:false,
            stepThree:false,
            stepFour:false,
            stepFive:false,
            stepSix:false,
            stepCircleActiveTwo:false,
            stepCircleActiveThree:false,
            stepCircleActiveFour:false,
            circleActive:true,
            circleActiveTwo:false,
            circleActiveThree:false,
            circleActiveFour:false,
            check:false,
            counter:0
        }
    },
    methods:{
        callMondayMorning(){

          if(mondayMorning){
             this.counter++;
                  if(this.counter % 2!=0)
                  {
                      this.check=true
                  }
                  else{
                      this.check=false
                  }
                  console.log(this.counter)
          }

        },
        callSecondStepModal(){
            this.stepTwo=true
        },
        callThirdStep(){
            this.stepThree=true
            this.stepTwo=false
            this.stepOne=false
            this.barActive=true
            this.stepCircleActiveTwo=true
            this.circleActiveTwo=true
            this.circleActive=true

        },
        backSecondPage(){
            this.stepThree=false
            this.stepTwo=true
            this.stepOne=false
            this.barActiveTwo=false
            this.stepCircleActiveTwo=false
            this.circleActiveTwo=false
            this.circleActive=true
        },
        backThirdPage(){
            this.stepThree=true
            this.stepTwo=false
            this.stepOne=false
            this.stepFour=false
            this.barActiveTwo=false
            this.stepCircleActiveThree=false
            this.circleActiveThree=false

        },
        callFourStep(){
            this.stepFour=true
            this.stepThree=false
            this.stepTwo=false
            this.stepOne=false
            this.barActiveTwo=true
            this.stepCircleActiveThree=true
            this.circleActiveThree=true
            this.circleActiveTwo=true

        },
        callFiveStep(){

            this.stepFive=true
            this.stepFour=false
            this.stepThree=false
            this.stepTwo=false
            this.stepOne=false
            this.barActiveThree=true
            this.stepCircleActiveFour=true
            this.circleActiveFour=true


        },
        backFourthPage(){

            this.stepFour=true
            this.stepFive=false
            this.stepThree=false
            this.stepTwo=false
            this.stepOne=false
            this.barActiveThree=false
            this.stepCircleActiveFour=false
            this.circleActiveFour=false



        },
        callSixStep(){
            this.stepSix=true
            this.stepOne=false
            this.stepTwo=false
            this.stepThree=false
            this.stepFour=false
            this.stepFive=false
        },
        backMessege(){
            alert("You don't have any permission to go back ")
        },
        closeModal(){
            this.stepTwo=false
            this.barActive=false
            this.stepOne=true
        }
    }
});
