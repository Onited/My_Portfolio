<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
    background-image: url('https://img.freepik.com/vecteurs-libre/fond-degrade-sombre-espace-copie_53876-99548.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais');
    height: 100%;
    backdrop-filter: blur(10px);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /* pour que l'arrière-plan reste fixe lors du défilement */
}

/* Pour s'assurer que le fond couvre également le contenu qui défile */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
