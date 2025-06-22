<template>
  <v-container fluid class="d-flex fill-height pa-0">
    <!-- Botón Home -->
    <v-btn icon class="position-absolute top-0 right-0 ma-4" @click="goHome">
      <i class="fas fa-home"></i>
    </v-btn>

    <!-- Columna azul -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center blue-background">
      <v-img
        :src="logo"
        max-width="500"
        contain
        alt="Logo Travel Connection"
      />
    </v-col>

    <!-- Columna blanca -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center white-background">
      <v-card flat max-width="450" class="w-100">
        <v-card-title class="text-h5 font-weight-bold mb-4">
          ¡Bienvenido a Travel Connection!
        </v-card-title>
        <p class="mb-6">Crea una nueva cuenta como {{ roleCapitalized }}</p>

        <v-text-field label="Nombre completo" v-model="nombre" />
        <v-text-field label="Correo electrónico" v-model="email" />
        <v-text-field label="Contraseña" type="password" v-model="password" />

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

        <v-btn color="primary" block class="mt-4" @click="registrar">
          Crear Cuenta
        </v-btn>

        <div class="mt-2 text-center">
          ¿Ya tienes cuenta?
          <span class="text-primary" style="cursor:pointer;" @click="goToLogin">
            Inicia sesión
          </span>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import axios from 'axios';
import logo from '@/assets/travelconnection2.png';

export default {
  name: 'Register',
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      licencia: '',
      vehiculo: '',
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
        if (response.status === 201) {
          this.$router.push(`/login/${this.role}`);
        } else {
          alert(response.data.message || 'Registro fallido');
        }
      } catch (error) {
        console.error('Error al registrar:', error.response?.data?.message || error.message);
        alert(error.response?.data?.message || 'Error al registrar usuario');
      }
    },
    goToLogin() {
      this.$router.push({ path: `/login/${this.role}` });
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
