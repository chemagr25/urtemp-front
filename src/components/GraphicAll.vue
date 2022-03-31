<template>
    <div @click="showCant" class="genre">
        <line-chart></line-chart>
    </div>
</template>

<script>
import axios from 'axios'
import LineChart from '@/components/LineChart'
export default {
  name: 'graphic-all',
  components: { LineChart },
  data () {
    return {
      temperatures: []
    }
  },
  props: {
    name: String
  },
  mounted () {
    axios
      .get('https://ur-temp-api.herokuapp.com/api/v1/logs')
      .then(response => {
        this.temperatures = response.data.data
        // console.log(response.data.data)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    showCant () {
      console.log(this.temperatures)
    }
  }
}
</script>

<style lang="scss" scoped>
.genre {
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>
