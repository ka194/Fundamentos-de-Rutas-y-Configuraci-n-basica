<script>
export default {
    data(){
        return{
            numero1: 0,
            numero2: 0,
            resultado: 0,
        }
    },
    methods:{
        sumar(){
            this.resultado = parseFloat(this.numero1) + parseInt(this.numero2);
        },
        Restar(){
            this.resultado = parseFloat(this.numero1) - parseInt(this.numero2);
        },
        multiplicar(){
            this.resultado = parseFloat(this.numero1) * parseInt(this.numero2);
        },
        dividir(){
            this.resultado = parseFloat(this.numero1) / parseInt(this.numero2);
        }
    }
}
</script>

<template>
    <div class="conteiner mt-s">
        <div class="card shadow p-4">
            <h1 class="text-center"> CalculadoraV1</h1>
            <h2 class="text-center bg-light p-2 rounded mb-3"> Resultado: {{ resultado }} </h2> 
            <div class="mb-3">
                <label for="">Numero 1</label>
                <input type="number" class="form-control" v-model="numero1">
            </div>
            <div class="mb-3">
                <label for="">Numero 2</label>
                <input type="number" class="form-control" v-model="numero2">
            </div>
            <div class="d-flex justify-content-center gap-2 mt-3">
                <button @click="sumar" class="btn btn-danger">Sumar</button>
                <button @click="Restar" class="btn btn-warning">Restar</button>
                <button @click="multiplicar" class="btn btn-success">Multiplicar</button>
                <button @click="dividir" class="btn btn-primary">Dividir</button>
            </div>
        </div>
    </div>
</template>
