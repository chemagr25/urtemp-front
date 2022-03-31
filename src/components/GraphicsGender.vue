<template>
    <div class="genre">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
  name: 'graphics-genre',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
.genre {
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding:0 20px;
    width: 50%;
    height: 100%;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
</style>
