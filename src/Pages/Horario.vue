<template>
    <div class="container mt-5">
        <h3 class="text-center text-white fw-bold p-3" style="background-color: #c39bd3; border-radius: 10px;">Mi Horario de Clases de ISC</h3>
        <div class="table-responsive">
            <table class="table table-striped table-bordered text-center align-middle" style="background-color: #f8f9fa; border-radius: 10px; overflow: hidden;">
                <thead style="background-color: #343a40; color: white;">
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Lunes</th>
                        <th scope="col">Martes</th>
                        <th scope="col">Miércoles</th>
                        <th scope="col">Jueves</th>
                        <th scope="col">Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(h, index) in horario" :key="index">
                        <td class="fw-bold" style="background-color: #e9ecef;">{{ h.hora }}</td>
                        <td :class="{'table-info': h.lunes}">{{ h.lunes || '-' }}</td>
                        <td :class="{'table-warning': h.martes}">{{ h.martes || '-' }}</td>
                        <td :class="{'table-success': h.miercoles}">{{ h.miercoles || '-' }}</td>
                        <td :class="{'table-danger': h.jueves}">{{ h.jueves || '-' }}</td>
                        <td :class="{'table-primary': h.viernes}">{{ h.viernes || '-' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const horario = ref ([
    { hora: '7:00 - 9:00', lunes: 'Programación Lógica y Funcional', martes: 'Inteligencia Artificial', miercoles: 'Desarrollo Ágil', jueves: 'Programación Lógica y Funcional' },
    { hora: '9:00 - 11:00', lunes: 'Desarrollo Ágil', martes: 'Administración de Redes', jueves: 'Administración de Redes' },
    { hora: '10:00 - 11:00', viernes: 'Desarrollo Ágil' },
    { hora: '11:00 - 12:00', viernes: 'Desarrollo en la Nube' },
    { hora: '11:00 - 13:00', martes: 'Desarrollo en la Nube', miercoles: 'Desarrollo en la Nube', jueves: 'Inteligencia Artificial' },
    { hora: '13:00 - 14:00', jueves: 'Realidad Aumentada' },
    { hora: '13:00 - 15:00', miercoles: 'Realidad Aumentada' },
    { hora: '14:00 - 16:00', viernes: 'Taller de Investigación II' },
    { hora: '15:00 - 17:00', martes: 'Realidad Aumentada', miercoles: 'Taller de Investigación II' },
]);
</script>

<style scoped>
.table-hover tbody tr:hover {
    background-color: #ac4b24;
    transition: 0.3s;
}
</style>
