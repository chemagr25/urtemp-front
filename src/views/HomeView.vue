<template>
<div class="container">
  <div class="section-cards">
     <card-section
     v-for="(category, index) in categories"
     :key="index"
     :name="category.name"
     :cant="category.cant"
     :id='category.id'
     ></card-section>
  </div>
  <div class="section-graphic-all">
    <graphic-all></graphic-all>
  </div>
  <div class="section-graphics-genre">
      <graphics-gender class="genre"
      v-for="(genre,id) in genres"
      :name="genre.name"
      :key="id"
      ></graphics-gender>
  </div>
  <div class="last-logs" @click="countM">
    <last-logs></last-logs>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import CardSection from '@/components/CardSection'
import GraphicsGender from '@/components/GraphicsGender'
import GraphicAll from '@/components/GraphicAll'
import LastLogs from '@/components/LastLogs'

export default {

  name: 'home-view',
  components: { CardSection, GraphicsGender, GraphicAll, LastLogs },
  data () {
    return {
      Males: 0,
      Females: 0,
      categories: [
        { name: 'Students', cant: 50 },
        { name: 'Males', cant: 27 },
        { name: 'Females', cant: 23 }
      ],
      users: [],
      genres: [
        { name: 'Male' },
        { name: 'Female' }

      ],
      lastLogs: [{
        name: '',
        temp: '',
        gender: ''

      }

      ]
    }
  },
  mounted () {
    axios
      .get('https://ur-temp-api.herokuapp.com/api/v1/students')
      .then(response => {
        this.users = response.data.data
        console.log(response.data.data.length)
        this.categories[0].cant = response.data.data.length
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    countM () {
      console.log(this.Females)
      console.log(this.Males)
    },
    mounted () {
      if (!localStorage.getItem('token')) {
        window.location.href = '#/login'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.section-cards {
  display: flex;
  justify-content: space-between;
    @media (max-width: 1024px) {
      width: 500px;
      align-items: center;
      flex-direction: column;
}
}
.section-graphics-genre {
  display: flex;
  width: 100%;
  height:350px;
  justify-content: space-between;
  margin-bottom: 40px;
}
.genre {
  margin: 10px;
}
.section-graphic-all {
  display: flex;
  justify-content: center;
  width: 100%;
  height:350px;
  margin-bottom: 40px;

}
.section-graphics-genre {
  display: none;
}
.section-graphic-all {
  display: none;
}
.last-logs {
  width: 100%;
  height: 500px;
  // display: flex;
  justify-content: center;
}
</style>
