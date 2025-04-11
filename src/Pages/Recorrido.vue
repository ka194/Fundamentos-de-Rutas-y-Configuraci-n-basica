<script>
export default {
  data(){
    return{

    alumnos:[
        {nc:21620184, nombre:'Karina', carrera:'ISC', semestre:8},
        {nc:21620184, nombre:'Evelin', carrera:'ICV', semestre:8},
        {nc:21620184, nombre:'ximena', carrera:'TICS', semestre:8},
    ]

    }

  }  }

</script>
<template>

<div class="container">
    <h3 class="mt-5 text-center">Lista de alumnos</h3>  
    <ul>
    <li v-for="alumno in alumnos" :key="alumno.nc">
        <strong>{{ alumno.nombre }}  </strong> -
        <strong>{{ alumno.carrera }} </strong>
    </li>
    </ul> 

</div>
</template>
<style>
h3{
    color:black;
    background-color: rgb(174, 152, 152);
    border-radius: 15px;
    padding: 10px;
}
ul{
    list-style-type:none;
    padding: 0%;
}
li{
    color:white;
    background-color: black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
}
</style>