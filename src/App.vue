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
.icons {
  margin-inline: 10vw;
}

header {
  display: grid;
  height: 18.06vh;
  font-size: 1.2rem;
  background-color: #17842A;
  width: 100vw;
  justify-content: center;
}

.container {
  display: flex;
  height: 14.35vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
}

.sub-header {
  height: 3.70vh;
  background-color: #00420C;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sub-container {
  display: flex;
  width: 76.6vw;
  justify-content: flex-start;
  gap: 1vw;
}

.sub-container a {
  color: white;
  font-size: 1em;
}

/*
nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}*/</style>
