<script setup>
import Menu from 'vue-material-design-icons/Menu.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>
<template>
  <header>
    <div class="container">
      <Menu class="icons" size="30" />
      <router-link to="/tabela" >
        <img class="logo" src="https://i.ibb.co/M21tp39/COPAO.png" alt="">
      </router-link>
      <Magnify class="icons" size="30" />
    </div>
    <div class="sub-header">
      <div class="sub-container">
        <router-link to="/tabela">Classificação</router-link>
        <router-link to="/artilharia">Artilharia</router-link>
        <router-link to="/chaveamento">Chaveamento</router-link>
        <router-link to="/jogos">Jogos</router-link>
      </div>
    </div>

  </header>
  <RouterView />
</template>
<style scoped>

header{
  background-image: radial-gradient(#17842a 20%, #096318 80%);
  display: flex;
  flex-direction: column;
}
.container{
  width: 60.94vw;
  height: 13.89vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.sub-header{
  display: flex;
  height: 3.70vh;
  background: #00420c;
  width: 100vw;
}
.logo{
  width: 25vw;
}
.sub-container{
  width: 60.94vw;
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-right: auto;
    margin-left: auto;
}
.sub-container a{
  color: white;
}
</style>
