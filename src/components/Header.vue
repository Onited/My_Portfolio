<template>
    <header class="header">
        <div class="left-container">
            <AnimatedText />
        </div>
        <div class="right-container">
            <nav class="navbar">
                <router-link to="/" class="nav-link" active-class="router-link-active">Accueil</router-link>
                <router-link to="/projects" class="nav-link" active-class="router-link-active">Mes Projets</router-link>
                <router-link to="/resume" class="nav-link" active-class="router-link-active">CV</router-link>
                <router-link to="/contact" class="nav-link" active-class="router-link-active">Contact</router-link>
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
    margin-bottom: 10px;
}

.router-link-active {
    color: white !important;
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
