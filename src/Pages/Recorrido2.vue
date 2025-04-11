<script>
export default {
  data() {
    return {
      alumnos: [
        { id: 1, nombre: 'Karina López', gusto: 'Programación' },
        { id: 2, nombre: 'Evelin Martínez', gusto: 'Dibujar' },
        { id: 3, nombre: 'Ximena Torres', gusto: 'Ciberseguridad' },
        { id: 4, nombre: 'Luis Méndez', gusto: 'Videojuegos' },
        { id: 5, nombre: 'Sofía Ramírez', gusto: 'Fotografía' },
        { id: 6, nombre: 'Pedro Sánchez', gusto: 'Fútbol' },
        { id: 7, nombre: 'Elena Vargas', gusto: 'Pintura' },
        { id: 8, nombre: 'Javier Ortega', gusto: 'Música' },
        { id: 9, nombre: 'Valeria Torres', gusto: 'Baile' },
        { id: 10, nombre: 'Andrés Navarro', gusto: 'Cocina' },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <h3 class="titulo">Lista de alumnos</h3>  
    <ul>
      <li v-for="alumno in alumnos" :key="alumno.id" class="alumno-card">
        <span class="id">#{{ alumno.id }}</span> 
        <span class="nombre">{{ alumno.nombre }}</span>  
        <span class="gusto">-{{ alumno.gusto }}</span>
      </li>
    </ul> 
  </div>
</template>

<style scoped>

.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}


.titulo {
  color: #ffffff;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border-radius: 15px;
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}


ul {
  list-style-type: none;
  padding: 0;
}


.alumno-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  border-radius: 12px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  font-size: 16px;
  font-weight: bold;
}

.alumno-card:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
}


.id {
  background: #ac6c87;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
}


.nombre {
  flex: 1;
  text-align: center;
  font-size: 18px;
}


.gusto {
  background: #a283d4;
  color: black;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 17px;
}
</style>

