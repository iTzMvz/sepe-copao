<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import playerCard from '../components/playerCard.vue'

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
  <playerCard></playerCard>
</template>
<style scoped>
</style>
