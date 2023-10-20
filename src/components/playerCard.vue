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
      <img class="pic" src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-14.jpg"
        alt="" />
    </div>
    <div class="lowerPart">
      <div class="div-1">
        <h1>NAME </h1>
        <div class="box">
          <font-awesome-icon class="icons" :icon="['fas', 'shirt']" />
          <h1> 10</h1>
        </div>
      </div>
      <span></span>
      <span></span>
      <div class="box">
        <font-awesome-icon :icon="['fas', 'futbol']" />
        <h1>10</h1>
        <font-awesome-icon :icon="['fas', 'shoe-prints']" />
        <h1>10</h1>
      </div>
      <span></span>
      <h1>NAME</h1>
      <span></span>

    </div>
  </div>
</template>
<style scoped>
.div-1 {
  display: flex;
  gap: 2vw;
}

.box {
  display: flex;
  align-items: center;

}

.icons {
  width: 2vw;
  height: 2vw;
}

.lowerPart {
  display: flex;
  height: 20vh;
  width: 20vw;
  background-color: aqua;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

span {
  width: 15vw;
  height: 0.2vh;
  background-color: black;
  border-radius: 10%;
}

img {
  width: 1.5vw;
  height: 1.5vw;
}

h1 {
  font-weight: 700;
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
  width: 20vw;
  height: 55vh;
  background-color: rgb(255, 0, 0);
  border-radius: 8%;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.089);
  flex-direction: column;
  align-items: center;
}</style>
