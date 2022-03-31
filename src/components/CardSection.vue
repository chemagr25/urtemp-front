<template>
<div class="card-section">
    <div class="card">
        <div class="img"></div>
        <div class="data">
          <p class="name">{{name}}</p>
          <p class="cant">{{cant}}</p>
        </div>
    </div>
</div>

</template>

<script>

export default {
  name: 'card-section',
  props: {
    id: String,
    name: String,
    cant: Number
  }
}

</script>

<style lang="scss" scoped>
.card-section{
    display: flex;
    margin: 50px 0px;
    width: 100%;
    justify-content: center;

}
.card{
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
    align-items:center;
    border-radius: 15px;
    height: 80px;
    width: 10rem;
    padding: 10px 15px;
    margin: 10px 70px;
    background-color: #fdfdfd;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        p {
            margin: 0;
        }
        .cant {
            color: rgb(12, 107, 196);
            font-weight: bold;
        }
          @media (max-width: 1024px) {
      width: 40rem;
      height: 15rem;
      justify-content: center;
      align-items: center;
}
}
.img {
    margin-right: 10px;
    background-image: url('@/assets/avatar2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height:40px;
    width:40px;
}

;
</style>
