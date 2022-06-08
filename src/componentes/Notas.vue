<template>

  <section class="src-componentes-notas">
      <div class="jumbotron">
      <h2><i>Ingreso de Alumnos</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              v-model.trim = "formData.nombre" 
              required 
              name="nombre" 
              autocomplete="off" 
              class="form-control"
              minlength="3"
              maxlength="15" />
      
            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
              <div slot="minlength" class="alert alert-danger mt-1">Ingrese un minimo de 3 letras</div>
              <div slot="maxlength" class="alert alert-danger mt-1">Ingrese un maximo de 15 letras</div>
            </field-messages>
        </validate>

        <br>

        <!-- Campo apellido -->
        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input 
              type="text" 
              id="apellido" 
              v-model.trim = "formData.apellido" 
              required 
              name="apellido" 
              autocomplete="off" 
              class="form-control"
              minlength="3"
              maxlength="15" />

          <field-messages name="apellido" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
              <div slot="minlength" class="alert alert-danger mt-1">Ingrese un minimo de 3 letras</div>
              <div slot="maxlength" class="alert alert-danger mt-1">Ingrese un maximo de 15 letras</div>
          </field-messages>
        </validate>
        <br>
        
        <!-- Campo nota -->
        <validate tag="div">
          <label for="nota">Nota</label>
          <input 
            type="number" 
            id="nota" 
            v-model.number = "formData.nota" 
            required 
            name="nota" 
            autocomplete="off" 
            class="form-control"
            min="0"
            max="10" />
    
          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="min" class="alert alert-danger mt-1">Ingrese un numero mayor a 0</div>
            <div slot="max" class="alert alert-danger mt-1">Ingrese un numero igual o menor que 10</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2><i>Historial de Notas</i></h2>
      <br>

      <div v-if="notas.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(alumno,index) in notas" :key="index" :style="{color: analizarNotaColor(alumno.nota).color}">
            <td>{{ alumno.nombre }}</td>
            <td>{{ alumno.apellido }}</td>
            <td :style="{color: analizarNotaColor(alumno.nota).color}"> {{ alumno.nota }}</td>
          </tr>
          <tr>
            <td>Promedio total</td>
            <td  :style="{color: analizarNotaColor(calularPromedio).color}"> {{ calularPromedio }} </td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay alumnos ingresados</h3>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        notas : [],
        promedioTotal : 0
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          apellido: null,
          nota: null
        }
      },
      enviar() {
        let alumno = {...this.formData}
        
        this.notas.push(alumno)
        this.promedioTotal += alumno.nota

        this.formData = this.getInitialData()
        this.formstate._reset()
      },
      analizarNotaColor(nota) {
        let color = 'red'
        if(nota >= 4 && nota < 7) color = 'yellow'
        if(nota >= 7 && nota <= 10) color = 'green'
        return {
          color
        }
      }
    },
    computed: {
      calularPromedio() {
        let nota = this.promedioTotal / (this.notas.length)
        console.log(nota);
        return nota
      }
    }
}


</script>

<style scoped lang="css">
  .src-componentes-notas {

  }

  .jumbotron {
    background-color: #f4f4f4;
    color: rgb(133, 12, 12);
    border: 2px inset rgb(0,0,0,0.5);
  }

  hr {
    background-color: #999;
  }

  label {
    font-weight: bold;
  }
</style>
