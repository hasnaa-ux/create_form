<template>
  <form @submit.prevent="setSubmit">
    <div class="names">
        <div class="form-control">
            <label for="fname">First Name</label>
            <input id="fname" name="fname" type="text" v-model="Fname" />
        </div>
        <div class="form-control">
            <label for="lname">Last Name</label>
            <input id="lname" name="lname" type="text"  v-model="Lname" />
        </div>        
    </div>
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
        <label for="username">UserName</label>
        <input id="username" name="username" type="text"  v-model.trim="UserName" @blur="validInput" />
        <p v-if="userNameValidity ==='invalid'">Please enter your a valid name </p>
    </div>
    <div class="form-control">
        <label for="password">Password</label>
        <input id="password" name="password" type="number" required v-model="PassWord" />
    </div>
    <div class="form-control">
        <label for="email">E-mail (Optional)</label>
        <input id="email" name="email" type="email" v-model="Email" />
    </div>
    <div class="places">
        <div class="form-control">
            <label for="country">Country</label>
            <select id="country" name="country" v-model="Country">
                <option value="egypt">Egypt</option>
                <option value="spain">Spain</option>
                <option value="england">England</option>
            </select>
        </div>
        <div class="form-control">
            <label for="city">City</label>
            <select id="city" name="city" v-model="City">
                <option value="cairo">Cairo</option>
                <option value="alex">Alex</option>
                <option value="giza">Giza</option>
                <option value="madrid">Madrid</option>
                <option value="barcalon">Barcalon</option>
                <option value="espaniol">Espaniol</option>
                <option value="london">London</option>
                <option value="liverpol">Liverpol</option>
                <option value="manchester">Manchester</option>
            </select>
        </div>
        <div class="form-control">
            <label for="zip">ZIP</label>
            <input id="zip" name="zip" type="number" v-model="Zip" />
        </div>
    </div>
    
        <div class="form-control">
            <country-select v-model="country" :country="country" topCountry="US" autocomplete="true" />
          <region-select v-model="region" :country="country" :region="region" autocomplete="true"/>
        </div>
   
    <base-button>Continue to checkout</base-button>

  </form>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
    
         

    data(){
        return{
            Fname:'',
            Lname:'',
            UserName:'',
            PassWord:null,
            Email:'',
            Country:[],
            City:[],
            Zip:null,
            userNameValidity: 'pending',
            country: '',
            region: ''
        };
    },
    methods:{
        validInput(){
            if(this.UserName === ''){
                this.userNameValidity = 'invalid'
            }
            else{
                this.userNameValidity = 'valid'
            }

        },

        setSubmit(){
           
        },
       
        
        
    },
    
}
</script>

<style  scoped>

.names,.places{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.names div{
    width: 49%;
}
.places div{
    width: 31%;
}
.places div select{
    width: 100%;
}
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-image: linear-gradient(#A100FFFF, #119CFDFF)
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input{
    border:1px solid red;
}

label {
  /*font-weight: bold; */
  color: white;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
    border: none;
    height: 35px;
    border-radius: 3px;
    color: #000000db;
    padding-left: 10px;
    outline: 0;
}





button {
  background-color: #002350;
  border-radius: 23px;
  display: block;
  margin: auto;
  margin-top: 25px;
}

</style>