<template>
<div class="ola">
   <div class="form" v-if=" auth == false" >
      <div class="title">Login</div>
      <div class="input-container ic1">
        <input v-model="user.email" id="email" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="email" class="placeholder">Correo</label>
      </div>
      <div class="input-container ic2">
        <input v-model="user.password" type="password" placeholder="" id="password" class="input"   />
        <div class="cut"></div>
        <label for="password" class="placeholder">Contraseña</label>
      </div>
      <button type="text" class="submit" @click="login">Login</button>
    </div>
    <div class="ols" v-else>Ya estas Logueado</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      auth: true,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      try {
        axios.post('https://ur-temp-api.herokuapp.com/api/login', this.user)
          .then(data => localStorage.setItem('token', JSON.stringify(data.data.token)))
          .then(alert('loagueado :)'))
          .then(window.location.href = '/')
      } catch (e) {
        alert('error')
      } // console.log(this.form)
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.auth = false
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: rgba(20, 104, 173, 1);
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
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
  color: rgb(17, 16, 16);
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

</style>
