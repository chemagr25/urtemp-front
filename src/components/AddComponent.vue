<template>
<form action="" @submit.prevent="addLog">
   <div class="form">
      <div class="title">Crear</div>
      <div class="input-container ic1">
        <input v-model="form.student_id" id="id" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="id" class="placeholder">id</label>
      </div>
      <div class="input-container ic2">
        <input v-model="form.temp" id="temp" class="input" type="num" placeholder=" " />
        <div class="cut"></div>
        <label for="temp" class="placeholder" >Temp</label>
      </div>
      <button type="text" class="submit">submit</button>
      <button type="text" class="submit"><router-link to="/all">Regresar</router-link></button>
    </div>
  </form>
</template>
<script>
import axios from 'axios'
export default {

  data () {
    return {
      form: {
        student_id: '',
        temp: ''
      }
    }
  },
  methods: {
    addLog () {
      axios.post('https://ur-temp-api.herokuapp.com/api/v1/logs', this.form)
        .then(alert('Registro añadido'))
        .then(window.location.href = '#/all')
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
a {
  text-decoration: none;
  color: #fff;
}

</style>
