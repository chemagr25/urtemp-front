<template>
    <div class="nav">
       <div v-if="auth" class="links">
            <router-link class="link" to="/">
                <p>Dashboard</p>
            </router-link>
            <router-link class="link" to="/all">
                <p>all logs</p>
            </router-link>
            <router-link v-show="!auth" class="link" to="/login">
                <p>login</p>
            </router-link>
            <router-link class="link" to="/register">
                <p>Create user</p>
            </router-link>
        </div>
        <div class="cont-pic" v-on:click="log"> </div>

  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      auth: true
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      window.location.href = '#/login'
      this.auth = false
    }
  },
  methods: {
    log: function () {
      console.log('hola')
      localStorage.clear()
      location.reload()
      // window.location.href = '#/login'
    }
  }

}
</script>

<style lang="scss" scoped>

.nav {
    position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 50px);
  height: 1rem;
  float: right;
  z-index: 1;
//   border-radius: 20px;
  padding: 30px;
  background-color: #EBF0FF;

}
.cont-pic {
    background-image: url('@/assets/avatar2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  background-color: red;
    cursor: pointer;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

}

.link{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(20, 104, 173,.7);
    color: white;
    border-radius: 15px 15px 30px 30px;
    width: 80%;
    height: 50px;
    padding: 0 8px;
    width:  150px;

}
.link:hover{
    background-color:rgba(20, 104, 173,1) ;
}
.links {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: -10px;

    a {
        margin-left:22px;
        margin-top: 16px;
        text-decoration: none;
        // color: rgb(20, 104, 173);

    }
    @media (max-width: 600px) {
      display: none;
}
}
.router-link-exact-active {
    background-color:rgba(20, 104, 173,1) ;

}

</style>
