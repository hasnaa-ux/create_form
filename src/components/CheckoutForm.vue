<template>
  <form @submit.prevent="setSubmit">
    <div class="names">
        <div class="form-control">
            <label for="fname">First Name</label>
            <input id="fname" name="fname" type="text" v-model="Fname" />
        </div>
        <div class="form-control">
            <label for="lname">Last Name</label>
            <input id="lname" name="lname" type="text" v-model="Lname" />
        </div>        
    </div>
    <div class="form-control">
        <label for="username">UserName</label>
        <input id="username" name="username" type="text" v-model="UserName" />
    </div>
    <div class="form-control">
        <label for="password">Password</label>
        <input id="password" name="password" type="number" v-model="PassWord" />
    </div>
    <div class="form-control">
        <label for="email">E-mail</label>
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
    <button>Continue to checkout</button>

  </form>
</template>

<script>
export default {
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
        };
    },
    methods:{
        setSubmit(){
            console.log(this.Fname);
            console.log(this.Lname);
            console.log(this.UserName);
            console.log(this.PassWord);
            console.log(this.Email);
            console.log(this.Country);
            console.log(this.City);
            console.log(this.Zip);
        }
    },
}
</script>

<style  scoped>

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
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
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

</style>