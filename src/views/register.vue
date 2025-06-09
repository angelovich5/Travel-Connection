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
    registrar() {
      // Tu lógica de registro
      console.log('Registrando como', this.role);
      console.log('Nombre:', this.nombre);
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      if (this.role === 'conductor') {
        console.log('Licencia:', this.licencia);
        console.log('Vehículo:', this.vehiculo);
      }
    },
    goToLogin() {
      this.$router.push({ path: `/login/${this.role}` });
    }
  },
  watch: {
  '$route.params.role'(newRole) {
    // Aquí puedes actualizar datos o forzar recarga si es necesario
    console.log('Role cambió a:', newRole);
    // Por ejemplo, resetear campos o lógica necesaria
  }
}

};
</script>
