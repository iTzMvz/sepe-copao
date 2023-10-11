<script setup>
import Menu from 'vue-material-design-icons/Menu.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>
<template>
  <header>
    <div class="container">
      <Menu class="icons" size="30" />
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
  height: 18.06vh;
  background-image: radial-gradient(#17842a 20%, #096318 80%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around
}
.container{
  width: 60.94vw;
  height: 13.89vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub-header{
  display: flex;
  height: 3.70vh;
  background: #00420c;
  width: 100vw;
  justify-content: center
}

.sub-container{
  width: 60.94vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
}
.sub-container a{
  color: white;
}
</style>
