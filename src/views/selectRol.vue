<template>
    <!-- Botón Home -->
    <v-btn icon class="position-absolute top-0 right-0 ma-4" @click="goHome">
      <i class="fas fa-home"></i>
    </v-btn>
  <v-container
    fluid
    class="fill-height d-flex flex-column align-center justify-center blue-background pa-4"
  >
    <!-- Título -->
    <h2 class="titulo mb-10 text-center">
      {{ title }}
    </h2>

    <!-- Contenedor flexible para botones e imagen -->
    <div class="selector-wrapper d-flex align-center justify-center flex-wrap">
      <v-btn
        class="role-btn pasajero mb-4"
        @click="goTo('pasajero')"
        depressed
      >
        Pasajero
      </v-btn>

      <!-- Imagen centrada -->
      <div class="center-icon mb-4"></div>

      <v-btn
        class="role-btn conductor mb-4"
        @click="goTo('conductor')"
        depressed
      >
        Conductor
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SelectRole',
  computed: {
    title() {
      return this.$route.params.mode === 'login'
        ? 'Inicio de Sesión'
        : 'Crear Cuenta';
    }
  },
  methods: {
    goTo(role) {
      const mode = this.$route.params.mode;
      this.$router.push(`/${mode}/${role}`);
    },
    goHome() {
      this.$router.push('/');
    }
  },

};
</script>

<style scoped>
/* Fondo azul */
.blue-background {
  background-color: #5ba4e5;
}

/* Título */
.titulo {
  color: white;
  padding: 0% 40% 0% 38%;
  font-size: 32px;
  font-weight: bold;
}

/* Contenedor de botones + imagen */
.selector-wrapper {
  gap: 40px;
  flex-direction: row;
}

/* Imagen del centro */
.center-icon {
  width: 400px;
  height: 400px;
  background-image: url('@/assets/travelconnection2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Botones */
.role-btn {
  padding: 25px 45px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  min-width: 140px;
  text-transform: none;
  display: flex;
  text-align: center;
}

/* Estilo pasajero */
.pasajero {
  background-color: white !important;
  color: #1976d2 !important;
  border: 2px solid #1976d2;
  box-shadow: none;
}

/* Estilo conductor */
.conductor {
  background-color: #1976d2 !important;
  color: white !important;
  border: 2px solid #134f8a;
  box-shadow: none;
}

/* Responsive: apilar en pantallas pequeñas */
@media (max-width: 768px) {
  .selector-wrapper {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
