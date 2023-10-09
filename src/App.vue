<template>
  <header>
    <div class="container">
      <h1>titulo</h1>
    </div>
    <div class="sub-header">
      <div class="sub-container">
      <router-link to="/tabela">Classificação</router-link>
      <router-link to="/">Artilharia</router-link>
      <router-link to="/">Chaveamento</router-link>
      <router-link to="/">Jogos</router-link> </div>
    </div>
    
</header>
  <RouterView />
</template>
<style scoped>
header {
  display: grid;
  height: 18.06vh;
  font-size: 1.2rem;
  background-color: #17842A;
  width: 100vw  ;
  justify-content: center;

}
.container{
  height: 14.35vh;
  width: 76.56vw;
}
.sub-header{
  height: 3.70vh;
  background-color: #00420C;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-container{
  display: flex;
  width: 76.56vw;
  justify-content: flex-start;
  gap: 1vw; 
}
.sub-container a{
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
}*/
</style>
