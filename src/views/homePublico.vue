<template>
  <v-app>
    <!-- NAVBAR FIJO -->
    <v-app-bar color="white" app flat class="sticky-navbar no-shadow">
      <v-toolbar-title class="text-primary font-weight-bold">
          <div style="padding-top:15px ;">
            <v-img
              :src="logo5"
              max-width="200px"
              contain
              alt="Logo Travel Connection"           
            />
          </div>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text color="primary" @click="$router.push('/select/login')">Iniciar Sesión</v-btn>
      <v-btn text color="primary" @click="$router.push('/select/register')">Registrarse</v-btn>
    </v-app-bar>

    <!-- CONTENIDO PRINCIPAL -->
    <v-main>
      <v-container class="pantalla py-0">
        <!-- Sección de pantalla completa: ¿Qué somos? -->
        <v-row
          class="full-screen-section"
          align="center"
          justify="space-between"
        >
          <!-- Texto -->
          <v-col cols="12" md="6" class="text-left px-10  section-info">
            <h2 class="font-weight-bold text-primary">¿Qué somos?</h2>
            <p>
              Somos una agencia de transporte que ofrece una plataforma para la gestión del transporte en ciudades con demanda.
            </p>
          <div class="btn-wrapper">
            <v-btn color="primary" class="mt-4 boton" @click="$router.push('/select/login')">
              Conéctate con nosotros
            </v-btn>
          </div>
          </v-col>

          <!-- Imagen -->
          <v-col cols="12" md="6" class="text-center">
            <v-img
              :src="logo"
              max-width="100%"
              contain
              alt="Logo Travel Connection"
            />
          </v-col>
        </v-row>

<!-- Puedes trabajar con nosotros -->
<h2 class="font-weight-bold text-center mt-12" style="font-size: 40px;">Puedes trabajar con nosotros</h2>

<!-- SECCIÓN ALTERNADA CENTRADA -->
<div style="background-color: #E4F1FF; width: 100vw; margin-left: calc(-50vw + 50%);">
  <v-container fluid class="py-12">

    <!-- 1. TEXTO DERECHA / IMAGEN IZQUIERDA -->
    <v-row align="center" justify="center" class="mb-10 flex-row-reverse text-center">
      <v-col cols="12" md="5">
        <v-img :src="logo1" max-width="400px" contain alt="Conductor 1" />
      </v-col>
      <v-col cols="12" md="5">
        <p class="texto-conductor">
          Puedes hacer transporte a sitios regulares o de pronto si tienes cosas que hacer.
        </p>
      </v-col>
    </v-row>

    <!-- 2. TEXTO IZQUIERDA / IMAGEN DERECHA -->
    <v-row align="center" justify="center" class="mb-10 text-center">
      <v-col cols="12" md="5">
        <v-img :src="logo2" max-width="400px" contain alt="Conductor 2" />
      </v-col>
      <v-col cols="12" md="5">
        <p class="texto-conductor">
          Puedes publicar de manera rápida el lugar donde te diriges.
        </p>
      </v-col>
    </v-row>

    <!-- 3. TEXTO DERECHA / IMAGEN IZQUIERDA -->
    <v-row align="center" justify="center" class="mb-10 flex-row-reverse text-center">
      <v-col cols="12" md="5">
        <v-img :src="logo3" max-width="400px" contain alt="Conductor 3" />
      </v-col>
      <v-col cols="12" md="5">
        <p class="texto-conductor">
          Y podrías ganar dinero por carrera.
        </p>
      </v-col>
    </v-row>

    <!-- BOTÓN AL FINAL -->
    <v-row justify="center">
      <v-col cols="12" md="auto" class="text-center">
        <v-btn color="primary" class="mt-6 boton" @click="$router.push('/register/conductor')">
          Crea una cuenta como conductor
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</div>




        <!-- ¿Necesitas conseguir transporte rápido? -->
        <v-col cols="12" class="mb-10 text-center mt-10">
          <h2 class="font-weight-bold text-primary" style="font-size: 50px;">¿Necesitas conseguir transporte rápido?</h2>
          <p style="padding-left:10% ;width: 90%;font-size: 30px ; padding-top: 30px; text-align: justify;">
            Como pasajero, indícanos a dónde deseas dirigirte y enseguida te conseguiremos un conductor.
          </p>

        </v-col>

        <!-- Llegarás a tu destino -->
        <v-row class="mt-12" justify="center" align="center">
          <v-col cols="12" md="6" class="text-center">
            <v-img
              :src="logo4"
              max-width="550px"
              contain
              alt="Logo Travel Connection"
              class="mx-auto"
            />
            <p class="mt-4" style="font-size: 30px; padding-bottom: 20px;">Llegarás a tu destino de forma segura.</p>
          <v-btn
            color="primary"
            class="mt-4 mx-auto"
            style="display: flex; justify-content: center; align-items: center; font-size: 20px;"
            @click="$router.push('/register/pasajero')"
          >
            Crear cuenta pasajero
          </v-btn>

          </v-col>
        </v-row>
        <div style="height: 150px;"></div>
      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer color="blue darken-4" dark padless>
      <v-col class="text-center py-4">
        ©2025 Travel Connection - Todos los derechos reservados. |
        <a href="#" class="text-white">Términos y condiciones</a> |
        <a href="#" class="text-white">Política de Privacidad</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import logo from '@/assets/conexiones.png';
import logo1 from '@/assets/carro.png';
import logo2 from '@/assets/ubicacion.png';
import logo3 from '@/assets/dinero.png';
import logo4 from '@/assets/mapa.png';
import logo5 from '@/assets/travelconnection3.png';

export default {
  name: 'HomePublic',
  data() {
    return {
      logo,logo1,logo2, logo3, logo4, logo5
    };
  }
};
</script>

<style scoped>
.section-info h2{
  font-size: 70px;
}
.section-info p{
  font-size: 30px;
  text-align:justify;
}
.btn-wrapper {

  display: flex;
  justify-content: center;
  /* margen arriba para separar texto y botón */
  margin-top: 5px;

}
.boton {
  font-size: 20px;
  padding: 12px 24px; /* padding vertical y horizontal razonable */
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; /* para que el texto no se divida en líneas */
}
.texto-conductor {
  font-size: 30px;
  text-align: justify;
  padding: 0 0 10px;
}
p {
  color: #424242;
  font-size: 16px;
  line-height: 1.6;
}
h2, h3 {
  margin-bottom: 10px;

}
a {
  text-decoration: none;
}
.full-screen-section {
  height: 85vh;
}
</style>

<style>
.sticky-navbar {
  position: sticky !important;
  top: 0;
  z-index: 10;
}
</style>
