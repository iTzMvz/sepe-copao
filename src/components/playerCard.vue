<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'

const props = defineProps({
  jogador: Object
})

const jogadores = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'jogadores'))
  let test = []
  querySnapshot.forEach((doc) => {
    const jogador = {
      id: doc.id,
      nomeJogador: doc.data().nome.toUpperCase(),
      posicao: doc.data().posição.toUpperCase(),
      gols: doc.data().gols,
      escudo: doc.data().escudo
    }
    test.push(jogador)
  })
  jogadores.value = test
})
</script>
<template>
  <div class="playerCard">
    <div class="pic">
      <img
        class="pic"
        src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-14.jpg"
        alt=""
      />
    </div>

    <div class="lowerPart">
      <div class="name">
        <h1>7</h1>
        <span class="upLine"></span>
        <h1>Muller</h1>
      </div>
      <span class="line"></span>
      <div class="teamInfo">
        <img src="https://i.ibb.co/JnpYXwh/vermelho.png" alt="" />
        <h2>ALA</h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lowerPart{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name {
  display: flex;
  gap: 2vw;
  align-items: center;
}
.teamInfo {
  display: flex;
  flex-direction: row;
}
.line {
  width: 70%;
  height: 0.2vh;
  background-color: rgb(61, 61, 61);
  border-radius: 20%;

}
.upLine {
  height: 70%;
  width: 0.2vw;
  background-color: rgb(61, 61, 61);
  border-radius: 20%;
}
img {
  width: 2.5vw;
}
h1 {
  font-weight: 500;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.253);
}
.pic {
  width: 25vh;
  height: 25vh;
  background-color: rgb(0, 0, 0);
}
.playerCard {
    gap: 2vh;
  justify-content: center;
  display: flex;
  width: 15vw;
  height: 44vh;
  background-color: rgb(255, 255, 255);
  border-radius: 8%;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.089);
  flex-direction: column;
  align-items: center;
}
</style>
