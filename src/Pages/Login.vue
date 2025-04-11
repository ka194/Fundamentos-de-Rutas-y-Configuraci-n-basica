<template>
    <div class="login-container">
      <form class="login-box">
        <h2>Iniciar Sesión</h2>
        
        <div class="input-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="ejemplo@correo.com" required />
        </div>
  
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" placeholder="••••••••" required />
        </div>
  
        <button type="submit">Entrar</button>
        
        <p class="register-link">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
      </form>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #74ebd5, #acb6e5);
    padding: 20px;
  }
  
  .login-box {
    background-color: #fff;
    padding: 30px 40px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .login-box h2 {
    margin-bottom: 25px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
    color: #555;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus {
    outline: none;
    border-color: #74ebd5;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #74ebd5;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #5cd1bf;
  }
  
  .register-link {
    margin-top: 15px;
    font-size: 14px;
    color: #555;
  }
  
  .register-link a {
    color: #007bff;
    text-decoration: none;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }
  </style>
  