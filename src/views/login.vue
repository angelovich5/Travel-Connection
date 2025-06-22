<template>
  <v-container fluid class="pa-0 fill-height d-flex align-center justify-center">
    <!-- Botón Home -->
    <v-btn icon class="position-absolute top-0 right-0 ma-4" @click="goHome">
      <i class="fas fa-home"></i>
    </v-btn>

    <v-row no-gutters class="fill-height w-100">
      <!-- Columna azul -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center blue-background">
        <v-img
          :src="logo"
          max-width="500"
          contain
          alt="Logo"
        />
      </v-col>

      <!-- Columna blanca -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center white-background">
        <v-card flat max-width="450" class="w-100">
          <h2 class="mb-2 font-weight-bold">¡Bienvenido a Travel Connection!</h2>
          <p class="mb-6">Inicia sesión como {{ roleCapitalized }}</p>

          <v-text-field label="Correo electrónico" v-model="email" outlined dense class="mb-3" />
          <v-text-field label="Contraseña" type="password" v-model="password" outlined dense class="mb-3" />

          <v-text-field
            v-if="role === 'conductor'"
            label="Número de licencia"
            v-model="licencia"
            outlined
            dense
            class="mb-4"
          />

          <v-btn color="primary" class="mb-4" block @click="login">Entrar</v-btn>
        <div class="mt-2 text-center">
          ¿No tienes cuenta?
          <span class="text-primary" style="cursor:pointer;" @click="goToRegister">
          Crea una cuenta
          </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import logo from '@/assets/travelconnection2.png';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      licencia: '',
      logo
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
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
.blue-background {
  background-color: #5ba4e5;
  height: 100%;
}
.white-background {
  background-color: white;
  height: 100%;
}
</style>
