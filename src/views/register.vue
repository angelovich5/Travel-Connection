<template>
  <v-container>
    <h2>Registro como {{ roleCapitalized }}</h2>

    <v-text-field label="Nombre completo" v-model="nombre" />
    <v-text-field label="Correo electrónico" v-model="email" />
    <v-text-field label="Contraseña" type="password" v-model="password" />

    <!-- Campos especiales para conductores -->
    <v-text-field
      v-if="role === 'conductor'"
      label="Número de licencia"
      v-model="licencia"
    />
    <v-text-field
      v-if="role === 'conductor'"
      label="Vehículo (marca y modelo)"
      v-model="vehiculo"
    />

    <v-btn color="success" @click="registrar">Registrarse</v-btn>

    <div class="mt-4">
      <span>¿Ya tienes cuenta?</span>
      <v-btn text color="primary" @click="goToLogin">Inicia sesión aquí</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      licencia: '',
      vehiculo: ''
    };
  },
  computed: {
    role() {
      return this.$route.params.role;
    },
    roleCapitalized() {
      return this.role.charAt(0).toUpperCase() + this.role.slice(1);
    }
  },
  methods: {
  async registrar() {
    try {
      const data = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        role: this.role,
        licencia: this.role === 'conductor' ? this.licencia : null,
        vehiculo: this.role === 'conductor' ? this.vehiculo : null
      };

      const response = await axios.post('http://localhost:5000/api/users/register', data);

      // Si todo sale bien, redirige
      if (response.status === 201) {
        this.$router.push(`/login/${this.role}`);
      } else {
        alert(response.data.message || 'Registro fallido');
      }
    } catch (error) {
      console.error('❌ Error al registrar:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Error al registrar usuario');
    }
  },
  goToLogin() {
    this.$router.push({ path: `/login/${this.role}` });
  }
}

};
</script>
