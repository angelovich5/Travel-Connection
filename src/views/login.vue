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
    login() {
      // Tu lógica de login
      console.log('Rol:', this.role);
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      if (this.role === 'conductor') {
        console.log('Licencia:', this.licencia);
      }
    },
    goToRegister() {
      this.$router.push({ path: `/register/${this.role}` });
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
