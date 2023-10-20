<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  jogador: Object
})

onMounted(()=> {
  console.log(props.jogador)
})
</script>
<template>
  <div class="playerCard">
    <div class="pic">
      
    </div>
    <div class="nameBox">
      <h1 class="name">{{props.jogador.nomeJogador}}</h1>
      <h1 class="pos">{{props.jogador.posicao}}</h1>
    </div>
    <span class="span"></span>
    <div class="stats">
      <div class="statsMiniBox">
        <font-awesome-icon class="icon" :icon="['fas', 'futbol']" />
        <h1>{{props.jogador.gols}}</h1>
      </div>
      <div class="statsMiniBox"><font-awesome-icon class="icon" :icon="['fas', 'shoe-prints']" />
        <h1>{{props.jogador.assits}}</h1></div>
      <div class="statsMiniBox"><span class="cardV"></span>
        <h1>{{props.jogador.cardV}}</h1></div>
      <div class="statsMiniBox"><span class="cardA"></span>
        <h1>{{props.jogador.cardY}}</h1></div>
  </div>


  </div>
</template>
<style scoped>
.icon{
  width: 2vw;
  height: 2vw;
}
.statsMiniBox{
  height: 50%;
  width: 10vh;
  display: flex;
align-items: center;
justify-content: space-around;
}
.stats{
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.nameBox{
  margin-top: 5px;
  width: 20vw;
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
}
.pos{
  font-size: 1.3em;
  color: #096318;
}
.name{
  font-weight: 900;
}

.cardA {
  width: 1vw;
  height: 3vh;
  background-color: yellow;
  border-radius: 20%;
}

.cardV {
  width: 1vw;
  height: 3vh;
  background-color: rgb(255, 0, 0);
  border-radius: 20%;
}

.icons {
  width: 2vw;
  height: 2vw;
  color: rgb(0, 0, 0);
}



.span {
  width: 18vw;
  height: 0.2vh;
  background-color: rgb(136, 136, 136);
  border-radius: 10%;
}

img {
  width: 1.5vw;
  height: 1.5vw;
}



.pic {
  border-radius: 8%;
  width: 20vw;
  height: 30vh;
  background-color: rgb(255, 255, 255);
  box-shadow: inset 0px -5px 100px #0000001F;
}

.playerCard {
  justify-content: flex-start;
  display: flex;
  width: 20vw;
  height: 55vh;
  background-image: radial-gradient(#FFFFFF 20%, #FFFFFF 80%);
  border-radius: 8%;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.089);
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 0px #096318;
}</style>
