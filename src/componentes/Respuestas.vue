<template>

  <section class="src-componentes-respuestas">
    <div class="jumbotron">
      <h2><i>Respuestas</i></h2>

      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Numero de Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(respuesta,index) in respuestas" :key="index">
            <td>{{ respuesta.numero }}</td>
            <td>{{ respuesta.respuestas }}</td>
          </tr>
        </table>
      </div>      

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas : [
          {
            numero: 1,
            respuestas : ['a']
          },
          {
            numero: 2,
            respuestas : ['b','c']
          },
          {
            numero: 3,
            respuestas : ['b']
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuestas {

  }
  .jumbotron {
    background-color: rgb(90, 196, 90);
    color: #222;
  }
</style>
