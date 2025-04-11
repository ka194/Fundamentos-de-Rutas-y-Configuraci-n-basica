<template>  
  <div id="app">  
    <div class="container">  
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg custom-navbar">  
        <div class="container-fluid">  
          <router-link class="navbar-brand text-primary fw-bold" to="/welcome">Mi Vue App</router-link>  

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">  
            <span class="navbar-toggler-icon"></span>  
          </button>  

          <div class="collapse navbar-collapse" id="navbarNavDropdown">  
            <div class="navbar-nav ms-auto">  
              <router-link class="nav-link" to="/login" :class="{ active: $route.path === '/login' }" @click="closeDropdown">Login</router-link>  
              <router-link class="nav-link" to="/home" :class="{ active: $route.path === '/home' }" @click="closeDropdown">Home</router-link>  
              <router-link class="nav-link" to="/about" :class="{ active: $route.path === '/about' }" @click="closeDropdown">About</router-link>  
              <router-link class="nav-link" to="/componentes" :class="{ active: $route.path === '/componentes' }" @click="closeDropdown">Componentes</router-link>  

              <!-- CICLOS -->  
              <div class="nav-item dropdown" @click="toggleDropdown('ciclos')">  
                <a class="nav-link dropdown-toggle" href="#" :class="{ active: activeDropdown === 'ciclos' || ['/recorrido', '/recorrido2'].includes($route.path) }">Ciclos</a>  
                <ul class="dropdown-menu" :class="{ show: activeDropdown === 'ciclos' }">  
                  <li><router-link class="dropdown-item" to="/recorrido" :class="{ active: $route.path === '/recorrido' }" @click="closeDropdown">Recorrido</router-link></li>  
                  <li><router-link class="dropdown-item" to="/recorrido2" :class="{ active: $route.path === '/recorrido2' }" @click="closeDropdown">Recorrido2</router-link></li>  
                </ul>  
              </div>  

              <!-- HORARIO -->  
              <div class="nav-item dropdown" @click="toggleDropdown('horario')">  
                <a class="nav-link dropdown-toggle" href="#" :class="{ active: activeDropdown === 'horario' || ['/horario1', '/horario'].includes($route.path) }">Horario</a>  
                <ul class="dropdown-menu" :class="{ show: activeDropdown === 'horario' }">  
                  <li><router-link class="dropdown-item" to="/horario1" :class="{ active: $route.path === '/horario1' }" @click="closeDropdown">Horario1</router-link></li>  
                  <li><router-link class="dropdown-item" to="/horario" :class="{ active: $route.path === '/horario' }" @click="closeDropdown">Horario</router-link></li>  
                </ul>  
              </div>  

              <!-- PROPS -->  
              <div class="nav-item dropdown" @click="toggleDropdown('props')">  
                <a class="nav-link dropdown-toggle" href="#" :class="{ active: activeDropdown === 'props' || ['/padre'].includes($route.path) }">Props</a>  
                <ul class="dropdown-menu" :class="{ show: activeDropdown === 'props' }">  
                  <li><router-link class="dropdown-item" to="/padre" :class="{ active: $route.path === '/padre' }" @click="closeDropdown">Padre</router-link></li>  
                </ul>  
              </div>  

              <!-- EVENTOS -->  
              <div class="nav-item dropdown" @click="toggleDropdown('eventos')">  
                <a class="nav-link dropdown-toggle" href="#" :class="{ active: activeDropdown === 'eventos' || ['/eventos'].includes($route.path) }">Eventos</a>  
                <ul class="dropdown-menu" :class="{ show: activeDropdown === 'eventos' }">  
                  <li><router-link class="dropdown-item" to="/eventos" :class="{ active: $route.path === '/eventos' }" @click="closeDropdown">Eventos</router-link></li>  
                </ul>  
              </div>  

              <!-- CALCULADORA -->  
              <div class="nav-item dropdown" @click="toggleDropdown('calculadora')">  
                <a class="nav-link dropdown-toggle" href="#" :class="{ active: activeDropdown === 'calculadora' || ['/calculadorav1', '/calculadorav2'].includes($route.path) }">Calculadora</a>  
                <ul class="dropdown-menu" :class="{ show: activeDropdown === 'calculadora' }">  
                  <li><router-link class="dropdown-item" to="/calculadorav1" :class="{ active: $route.path === '/calculadorav1' }" @click="closeDropdown">Calculadorav1</router-link></li>  
                  <li><router-link class="dropdown-item" to="/calculadorav2" :class="{ active: $route.path === '/calculadorav2' }" @click="closeDropdown">Calculadorav2</router-link></li>  
                </ul>  
              </div>  
            </div>  
          </div>  
        </div>  
      </nav>  

      <router-view></router-view>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      activeDropdown: null  
    };  
  },  
  methods: {  
    toggleDropdown(dropdown) {  
      this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;  
    },  
    closeDropdown() {  
      this.activeDropdown = null;  
    }  
  }  
};  
</script>  

<style>  
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');  

body {  
  font-family: 'Poppins', sans-serif;  
  background-color: #f4f7fa;  
  margin: 0;  
  padding: 0;  
}  

.custom-navbar {  
  border-radius: 12px;  
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  
}  

.navbar-nav .nav-link {  
  color: #374151;  
  transition: background-color 0.3s, color 0.3s;  
  padding: 8px 16px;  
  border-radius: 8px;  
  font-weight: 500;  
}  

.navbar-nav .nav-link:hover {  
  background-color: #e0f2fe;  
  color: #1e3a8a;  
  font-weight: 600;  
}  

.navbar-nav .nav-link:focus {  
  background-color: #1e3a8a;  
  color: white !important;  
  font-weight: 600;  
  outline: none;  
}  

/* Activo: navlink o dropdown-item seleccionados */  
.navbar-nav .nav-link.active,  
.dropdown-menu .dropdown-item.active {  
  background-color: #1e3a8a !important;  
  color: white !important;  
  font-weight: 600;  
}  

.dropdown-menu .dropdown-item:hover {  
  background-color: #e0f2fe;  
  color: #1e3a8a;  
  font-weight: 600;  
}  

.dropdown-menu li {  
  background-color: rgb(215, 219, 197) !important;  
}  

.container {  
  margin-top: 30px;  
}  

@media (max-width: 768px) {  
  .navbar-nav .nav-link {  
    padding: 12px 16px;  
  }  

  router-view {  
    background-color: #ffffff;  
    color: #333333;  
    padding: 20px;  
    border-radius: 12px;  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);  
    margin-top: 20px;  
  }  
}  
</style>
