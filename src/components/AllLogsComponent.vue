<template>
    <div class="all-logs">
      <h1>All logs</h1>
    <div class="data">
      <table class="table-logs" id="customers">
  <tr>
    <th class="name-title">Name</th>
    <th>Temperature</th>
    <th class="gender-title">Gender</th>
  </tr>
  <tr v-for="(log, index) in logs"
  :key="index">
      <td class="name">
      <div class="img"></div>
      <p :name="log.name">{{log.name}}</p>
      </td>
    <td :class="log.temp < 37 ? 'no' : 'alert'">{{log.temp}} C</td>
    <td>{{log.gender}}</td>
  </tr>
</table>

    </div>

      <router-link class="link" to="/create">Create</router-link>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'all-logs-component',
  data () {
    return {
      names: '',
      logs: []
    }
  },
  mounted () {
    // let dat = []
    axios
      .get('https://ur-temp-api.herokuapp.com/api/v1/logs')
      .then(response => {
        this.logs = response.data.data.reverse()
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>

.all-logs{
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px
  // background-color: #fff;
}

#customers {
  position: relative;
  border-collapse: collapse;
  width: 80%;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 150px;
  z-index: 0;
}
.name{
  display: flex;
  justify-content: flex-start;
  align-items:center;
  padding-left: 10px;

}

#customers td, #customers th {
  text-align: center;
  // border-bottom: 1px solid black;

}
.link {
 position: absolute;
  float: right;
  right: 1%;
  border: none;
  // background-color:rgba(20, 104, 173, .5
  background-color: #0476aa;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 15px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.377);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.39);
  cursor: pointer;
  text-decoration: none;
}

#customers tr:nth-child(even){background-color: #f2f2f2; margin-bottom:150px}

#customers tr:hover {background-color: #ddd;}
.name-title{
  border-radius: 10px 0 0 0;
}
.gender-title{
  border-radius: 0 10px 0 0;
}
.img{
  background-image: url('@/assets/avatar2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width:40px;
    height:80px;
    margin-right: 10px;
}

#customers th {
  margin: 5px;
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #0476aa;
  color: white;
}
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.delete {
  background-image: url('@/assets/delete.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width:30px;
    height:80px;
    cursor: pointer;
}
.edit {
  background-image: url('@/assets/edit.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width:30px;
    height:80px;
    cursor: pointer;
}
.alert{
  color: red;
}
.data {
  display: flex;
  justify-content: center;
}

@media (max-width: 350px) {
  .data {
    margin-left: -30px
  }
}

</style>
