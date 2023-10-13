<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'


const artilharia = ref([])

onMounted(async () => {
  let response = await api.get('campeonatos/2/artilharia')
  artilharia.value = response.data
})

</script>
<template>
  <div class="jogadores">
    <h1>Artilheiros do copão futsal 2023</h1>
  <hr />
    <div class="jogador" v-for="jogador in artilharia" :key="jogador.id">
        <div class="right-side-jogador">
        <div class="img_jogador"> </div>
        <div class="escudo-time" > <img style="width:3vh;" :src="jogador.time.escudo" alt=""> </div>
      <div class="jogador-nome-box">
        <div class="jogador_nome">{{ jogador.atleta.nome_popular }}</div>
        <div class="jogador_posicao">{{ jogador.atleta.posicao.nome }}</div>
      </div>
    </div>

      <div class="gols">{{ jogador.gols }}</div>

    </div>
  </div>
</template>
<style scoped>
.jogadores{
    padding: 54px 0px 0px 0px;
    display: flex;
    gap: 1vh;
    flex-direction: column;
    align-items: center;
    width: 60.94vw;
    margin-right: auto;
    margin-left: auto;
}

.jogador{
    border-top: 1px solid #DDD;
    display: flex;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
}
.img_jogador{
    height: 8vh;
    width: 8vh;
    border-radius: 15%;
    background-color: black;
}
.right-side-jogador{
    display: flex;
    align-items: center;
}
.escudo-time{
    display: flex;
    height: 8vh;
    align-items: flex-end;
    width: 2.0vw;
    justify-content: center
}
.jogador_nome{
    font-weight: 700;
    font-size:1.4em;
}
.jogador_posicao{
    color: #414141;
}
.gols{
    font-weight: 700;
    font-size:1.4em;
}
.jogador-nome-box{
    display: flex;
    flex-direction: column;
}
</style>
