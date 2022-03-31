<template>
    <div class="aside">
        <div class="name-logo">
            <div class="logo-cont">
            </div>
            <div class="logo">
                <p class="title-app">UTEMP</p>
            </div>
        </div>
        <div class="links">
            <router-link class="link" to="/">
                <p>Dashboard</p>
            </router-link>
            <router-link class="link" to="/all">
                <p>all logs</p>
            </router-link>
            <router-link class="link" to="/login">
                <p>login</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'side-bar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.aside {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 190px;
    position: fixed;
    height: 100%;
    z-index: 2;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.name-logo {
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    padding-left: 15px;
}

.logo-cont {
    background-image: url('@/assets/logo2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width:60px;
    height:80px;
    margin-left: -30px;
    z-index: 0;

}

.title-app {
    position: relative;
    z-index: 2;
    left: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    color: rgb(20, 104, 173);
}
.link{
    display: flex;
    align-items: center;
    background-color:rgba(20, 104, 173,.7);
    color: white;
    border-radius:15px 0 0 30px;
    width: 80%;
    height: 50px;
    padding: 0 8px;

}
.link:hover{
    background-color:rgba(20, 104, 173,1) ;

}
.links {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    a {
        margin-left:22px;
        margin-top: 16px;
        text-decoration: none;
        // color: rgb(20, 104, 173);

    }
}
.router-link-exact-active {
    background-color:rgba(20, 104, 173,1) ;

}

</style>
