<template>
  <div class="page-center">
    <div class="content-box">
      <h4>Rutas</h4>
      <p>Esta es la Página de Home</p>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor que centra el cuadro */
.page-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Altura completa de la pantalla */
  background-color: #6aadf0; /* Fondo opcional para mejor contraste */
  margin: 0;
  padding: 0;
}

/* Cuadro estilizado */
.content-box {
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #333;
}

/* Encabezado */
.content-box h4 {
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

/* Párrafo */
.content-box p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}
</style>
