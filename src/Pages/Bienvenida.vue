<!-- src/Pages/Bienvenida.vue -->
<template>
    <div class="bienvenida text-center">
      <h1 class="titulo">¡Bienvenido a Mi Vue App!</h1>
      <p class="subtitulo"> Gracias por unirte explora nuestros componentes :)</p>
    </div>
  </template>
  
  <style scoped>
  .bienvenida {
    margin-top: 100px;
    padding: 40px;
    background: linear-gradient(135deg, #c3f0ff, #e0f7fa);
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  
  .titulo {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3a8a;
    font-family: 'Poppins', sans-serif;
  }
  
  .subtitulo {
    font-size: 1.2rem;
    color: #374151;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
  }
  </style>
  