<template>
  <div class="container">
    <h3 class="mt-4 text-center">HORARIO DE CLASES DE SISTEMAS</h3>
    <table class="table table-bordered table-striped text-center mt-3 shadow-sm">
      <thead class="table-header">
        <tr>
          <th scope="col" class="col-hora">Hora</th>
          <th scope="col">Lunes</th>
          <th scope="col">Martes</th>
          <th scope="col">Miércoles</th>
          <th scope="col">Jueves</th>
          <th scope="col">Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(h, index) in horario" :key="index">
          <td class="fw-bold col-hora hora">{{ h.hora }}</td>
          <td>{{ h.lunes }}</td>
          <td>{{ h.martes }}</td>
          <td>{{ h.miercoles }}</td>
          <td>{{ h.jueves }}</td>
          <td>{{ h.viernes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const horario = ref([
  { hora: '7:00 - 9:00', lunes: 'IA', martes: 'Metodologías Ágiles', miercoles: 'Desarrollo Web', jueves: 'Base de Datos', viernes: 'Aplicaciones Móviles' },
  { hora: '9:00 - 11:00', lunes: 'Redes', martes: 'Seguridad Informática', miercoles: 'Sistemas Operativos', jueves: 'IA', viernes: 'Gestión de Proyectos' },
  { hora: '11:00 - 1:00', lunes: 'Arquitectura de Software', martes: 'Desarrollo Web', miercoles: 'Redes', jueves: 'Metodologías Ágiles', viernes: 'Base de Datos' },
  { hora: '2:00 - 4:00', lunes: 'Sistemas Distribuidos', martes: 'Programación Avanzada', miercoles: 'Seguridad Informática', jueves: 'Arquitectura de Software', viernes: 'IA' },
  { hora: '4:00 - 6:00', lunes: 'Aplicaciones Móviles', martes: 'Gestión de Proyectos', miercoles: 'Sistemas Operativos', jueves: 'Desarrollo Web', viernes: 'Programación Avanzada' }
])
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}

.table {
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  color: #333;
}

.col-hora {
  width: 150px;
  background-color: #e0e7ff; /* celeste claro */
  font-weight: bold;
}

.table-header {
  background-color: #4b0082; /* morado profundo */
  color: #ffffff;
}

tbody tr:nth-child(even) {
  background-color: #f4f4fc; /* azul/lila claro */
}

tbody tr:hover {
  background-color: #e0d7f5; /* al pasar el cursor */
}
</style>
