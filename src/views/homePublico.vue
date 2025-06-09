<template>
  <v-container class="text-center">
    <h1>Bienvenido a Travel Connection</h1>
    <p>Conéctate con conductores y pasajeros de tu ciudad.</p>

    <v-btn color="primary" class="ma-2" @click="$router.push('/select/login')">
      Iniciar Sesión
    </v-btn>

    <v-btn color="secondary" class="ma-2" @click="$router.push('/select/register')">
      Crear Cuenta
    </v-btn>

  </v-container>
</template>

<script>
export default {
  name: 'HomePublic'
};
</script>
