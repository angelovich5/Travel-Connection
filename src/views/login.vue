<template>
  <v-container>
    <h2>Iniciar Sesión como {{ roleCapitalized }}</h2>

    <v-text-field label="Correo electrónico" v-model="email" />
    <v-text-field label="Contraseña" type="password" v-model="password" />

    <!-- Campo solo visible para conductores -->
    <v-text-field
      v-if="role === 'conductor'"
      label="Número de licencia"
      v-model="licencia"
    />

    <v-btn color="primary" @click="login">Entrar</v-btn>

    <div class="mt-4">
      <span>¿No tienes cuenta?</span>
      <v-btn text color="primary" @click="goToRegister">Crea una aquí</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      licencia: ''
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
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
          role: this.role
        };

        const res = await axios.post('http://localhost:5000/api/users/login', payload);
        alert('Login exitoso');

        if (this.role === 'conductor') {
          this.$router.push('/homeConductor');
        } else {
          this.$router.push('/homePasajero');
        }
    } catch (error) {
        console.error('Error en login:', error.response?.data?.message || error.message);
        alert(error.response?.data?.message || 'Error al iniciar sesión');
    }
  },
    goToRegister() {
      this.$router.push({ path: `/register/${this.role}` });
    }
}
};
</script>

