<template>
  <header>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/tabela">tabela</router-link>
  </nav>
</header>
  <RouterView />
</template>
<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: rgb(0, 70, 0);
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>
