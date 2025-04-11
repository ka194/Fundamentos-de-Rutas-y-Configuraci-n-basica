<script setup>
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue'
import Hijo2 from './Hijo2.vue'

defineProps({
  nombre: String
})
</script>

<template>
  <div class="container">
    <h1>Soy el componente Padre</h1>

    <div class="card-box">
      <h2>Componentes Hijos</h2>

      <div class="hijo-card">
        <Hijo1 edad="10" />
      </div>

      <div class="hijo-card">
        <Hijo2 edad="4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

/* Estilo general */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #f0f4f8, #e0ecff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* Título principal */
.container h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 40px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Caja contenedora de hijos */
.card-box {
  width: 85%;
  max-width: 720px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Título de sección de hijos */
.card-box h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 20px;
}

/* Estilo individual para cada hijo */
.hijo-card {
  margin: 20px 0;
  padding: 20px;
  border-radius: 15px;
  background-color: #f9fbff;
  border: 1px solid #dce6f1;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hijo-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
</style>
