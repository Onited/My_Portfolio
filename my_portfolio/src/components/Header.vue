<template>
    <header class="header">
        <div class="left-container">
            <img src="../assets/pp.jpg" alt="Votre photo" class="profile-photo" />
        </div>
        <div class="center-container">
            <AnimatedText />
        </div>
        <div class="right-container">
            <nav class="navbar">
                <a href="/home" class="nav-link">Accueil</a>
                <a href="portfolio" class="nav-link">Portfolio</a>
                <a href="resume" class="nav-link">CV</a>
                <a href="contact" class="nav-link">Contact</a>
            </nav>
        </div>
    </header>
</template>


<script>
import AnimatedText from '@/components/AnimatedText.vue';

export default {
    name: 'HeaderHome',
    components: {
        AnimatedText
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px;
}

.left-container,
.right-container {
    flex: 1;
}

.center-container {
    flex: 2;
    text-align: center;
}

.profile-photo {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.navbar {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #555;
}

@media (min-width: 768px) {
    .header {
        flex-direction: row;
    }
}

@media (max-width: 767px) {
    .header {
        flex-direction: column;
    }
    .nav-link {
    font-size: 16px;
    }
}
</style>
