<template>
  <v-container class="text-center">
    <h2>{{ title }}</h2>

    <v-btn color="primary" class="ma-2" @click="goTo('pasajero')">
      Pasajero
    </v-btn>

    <v-btn color="secondary" class="ma-2" @click="goTo('conductor')">
      Conductor
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'SelectRole',
  computed: {
    title() {
      return this.$route.params.mode === 'login'
        ? 'Iniciar Sesión'
        : 'Crear Cuenta';
    }
  },
  methods: {
    goTo(role) {
      const mode = this.$route.params.mode; // 'login' o 'register'
      this.$router.push(`/${mode}/${role}`);
    }
  }
};
</script>
