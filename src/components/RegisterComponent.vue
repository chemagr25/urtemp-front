<template>
<div class="ols" >
<div class="container" v-if="auth == true">
<form action="" @submit.prevent="addLog">
   <div class="form">
      <div class="title">Create</div>
       <div class="input-container ic1">
        <input v-model="form.name" id="name" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="id" class="placeholder">name</label>
      </div>
      <div class="input-container ic1">
        <input v-model="form.last_name" id="last_name" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="id" class="placeholder">last name</label>
      </div>
      <div class="input-container ic1">
        <input v-model="form.phone_number" id="email" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="id" class="placeholder">phone number</label>
      </div>
      <div class="input-container ic2">
        <input v-model="form.password" id="password" class="input" type="password" placeholder=" " />
        <div class="cut"></div>
        <label for="temp" class="placeholder" >password</label>
      </div>
       <div class="input-container ic2">
        <input v-model="form.user_name" id="phone_number" class="input" type="num" placeholder=" " />
        <div class="cut"></div>
        <label for="temp" class="placeholder" >user name</label>
      </div>
       <div class="input-container ic2">
        <input v-model="form.email" id="user_name" class="input" type="num" placeholder=" " />
        <div class="cut"></div>
        <label for="temp" class="placeholder" >email</label>
      </div>
       <div class="input-container ic2">
        <input v-model="form.role_id" id="role_id" class="input" type="num" placeholder=" " />
        <div class="cut"></div>
        <label for="temp" class="placeholder" >role id</label>
      </div>
      <button type="text" class="submit" @click="addUser">submit</button>
    </div>
  </form>
</div>
<div class="pa" v-else>Logueate pa</div>

</div>
</template>
<script>
import axios from 'axios'
export default {

  data () {
    return {
      form: {
        name: '',
        last_name: '',
        phone_number: '',
        password: '',
        user_name: '',
        email: '',
        role_id: ''
      },
      auth: true
    }
  },
  methods: {
    addUser () {
      axios.post('https://ur-temp-api.herokuapp.com/api/v1/users', this.form)
        .then(console.log(this.form))
        .then(alert('Añadido:)'))
        .then(window.location.href = '/')
    },
    mounted () {
      if (!localStorage.getItem('token')) {
        window.location.href = '#/login'
        this.auth = false
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.form {
  background-color: rgba(20, 104, 173, 1);
  border-radius: 20px;
  box-sizing: border-box;

  padding: 20px;
  width: 320px;
  margin-top: 100px;
}

.title {
  color: #eee;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #fff;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: rgb(20, 19, 19);
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: rgba(20, 104, 173, 1);
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #fff;
}

.submit {
  background-color: #08d;
  // border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  // outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}
button {
  font-family: 'Poppins', sans-serif;
  border-radius: 15px 15px 30px 30px;
}
a{
    text-decoration: none;
    color: #fff
}

</style>
