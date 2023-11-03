<!-- <template>
  <div class="home">
    <p>Développeur Full-Stack passionné avec X années d'expérience...</p>
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

.home{
  color: white;
}

</style>
-->

<template>
  <div class="home">
    <!-- Introduction Personnelle -->
    <div class="intro">
      <img src="../assets/pp.jpg" alt="Votre photo" class="profile-photo" />
      <h1>Bonjour, je suis Dorian BAUDRY</h1>
      <p>Développeur Web Full-Stack basé à Montpellier</p>
    </div>

    <!-- En-tête Accrocheur -->
    <div class="header">
      <h2>Compétences Principales</h2>
    </div>

    <!-- Résumé de Compétences -->
    <div class="skills">
      <div class="skill-item">
        <i class="fas fa-database"></i>
        <h3>Développement Back-End</h3>
      </div>
      <div class="skill-item">
        <i class="fas fa-code"></i>
        <h3>Développement Front-End</h3>
      </div>
      <div class="skill-item">
        <i class="fas fa-mobile-alt"></i>
        <h3>Design Réactif</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  text-align: center;
  color: white;
  margin-top: 150px;
}

.intro .profile-photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.skills {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.skill-item {
  width: 200px;
  padding: 20px;
  text-align: center;
}

.skill-item i {
  font-size: 48px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .skills {
    flex-direction: column;
    align-items: center;
  }

  .skill-item {
    width: 100%;
    margin-bottom: 20px;
  }

  .home {
    margin-top: 50px;
  }

  .intro .profile-photo {
    width: 100px;
    height: 100px;
  }
}

</style>
