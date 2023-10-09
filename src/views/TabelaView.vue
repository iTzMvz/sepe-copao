<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'

const tabela = ref([])

onMounted(async () =>{
  let response = await api.get('campeonatos/2/tabela')
  tabela.value = response.data
}
)

</script>
<template>
  
    <h1>Tabela</h1>
    <div class="table1">
  <table>
    <thead>
    <tr>
      <th>Classificação</th>
      <th>nome</th>
      <th>pontuação</th>
      <th>jogos</th>
    </tr></thead>
    <tbody>
<tr v-for="times in tabela" :key="times.id">
<td>{{ times.posicao }}</td>
<td>{{ times.time.nome_popular }}</td>
<td>{{ times.pontos }}</td>
<td>{{ times.jogos }}</td>
</tr></tbody>
  </table>

</div>

</template>
<style scoped>
h1{
    text-align: center;
}
.table1{
    margin: 0px0,23;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}

</style>