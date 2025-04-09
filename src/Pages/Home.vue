<script>
export default {
    data() {
        return {
            display: '',
            currentValue: 0,
        };
    },
    methods: {
        agregarNumero(input) {
            this.display += input;  
        },
        calculo() {
            try {
                this.currentValue = eval(this.display); 
                this.display = this.currentValue.toString();  
            } catch (error) {
                this.display = 'Error';  
            }
        },
        limpiarDisplay() {
            this.display = '';  
        },
        eliminarNumero() {
            this.display = this.display.slice(0, -1);  
        },
    },
};
</script>

<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 380px;">
        <div class="card p-3" style="width: 280px; background-color: #9bc2d3+;">
            <div class="card-body">
                <h6 class="text-center">Calculadora V2</h6>
                <!-- Display de la Calculadora -->
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="display" disabled />
                </div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-secondary" @click="agregarNumero('%')">%</button>
                    <button class="btn btn-secondary" @click="limpiarDisplay">CE</button>
                    <button class="btn btn-secondary" @click="limpiarDisplay">C</button>
                    <button class="btn btn-secondary" @click="eliminarNumero">B</button>
                 
                </div>
                <!-- Botones de la Calculadora -->
                <div class="d-flex justify-content-between mt-4">
                    <button class="btn btn-light" @click="agregarNumero(9)">9</button>
                    <button class="btn btn-light" @click="agregarNumero(8)">8</button>
                    <button class="btn btn-light" @click="agregarNumero(7)">7</button>
                    <button class="btn btn-danger" @click="agregarNumero('/')">/</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-light" @click="agregarNumero(4)">4</button>
                    <button class="btn btn-light" @click="agregarNumero(5)">5</button>
                    <button class="btn btn-light" @click="agregarNumero(6)">6</button>
                    <button class="btn btn-danger" @click="agregarNumero('*')">X</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-light" @click="agregarNumero(1)">1</button>
                    <button class="btn btn-light" @click="agregarNumero(2)">2</button>
                    <button class="btn btn-light" @click="agregarNumero(3)">3</button>
                    <button class="btn btn-danger" @click="agregarNumero('-')">-</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-secondary" @click="calculo">=</button>
                    <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
                    <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>
                    <button class="btn btn-danger" @click="agregarNumero('+')">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>