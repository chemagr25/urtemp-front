<template>
  <div class="app" id="app">
    <nav>
      <nav-bar></nav-bar>
    </nav>
    <section class="view-route">
        <router-view  class="view"></router-view>
    </section>
    <aside>
    </aside>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {
      auth: true
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.auth = false
      window.location.href = '#/login'
    }
  }
}
</script>

<style scoped lang="scss">

.view-route {
  margin-top: 80px;
  position: absolute;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 0;
  left: 10%;
  z-index: 0;
  border-radius:10px;
  background-color: rgba(255, 0, 0, 0.007);
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

.div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
</style>
