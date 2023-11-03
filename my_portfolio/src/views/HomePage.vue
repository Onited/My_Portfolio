<template>
  <div class="home">
    <p>Développeur Full-Stack passionné avec X années d'expérience...</p>
    <div class="align-container">
      <a href="#portfolio" class="cta-button">Voir mon travail</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}

.home h1 {
  font-size: 48px;
}

.align-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.home .cta-button {
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #008CBA;
  color: white;
}

</style>

