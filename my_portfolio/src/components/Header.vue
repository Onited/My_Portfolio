<template>
    <header class="header">
        <div class="left-container">
            <!-- <img src="../assets/pp.jpg" alt="Votre photo" class="profile-photo" /> -->
            <AnimatedText />
        </div>
        <!-- <div class="center-container">
            
        </div> -->
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
    background-color: #010101;
}

.left-container, .right-container {
    flex: 1;
}

.center-container {
    flex: 2;
    text-align: center;
}

.navbar {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}

.nav-link {
    color: #8F754F;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #555;
    color: white;
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
    nav{
        padding: 0px;
    }
}
</style>
