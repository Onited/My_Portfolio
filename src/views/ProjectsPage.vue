<template>
    <div class="portfolio">
        <h1 class="title">Mes Projets</h1>
        <div class="projects">
            <div class="project-card" v-for="project in projects" :key="project.id">
                <div class="card">
                    <img :src="project.image" :alt="project.title" />
                    <h2 class="title">{{ project.title }}</h2>
                    <p class="descripton">{{ project.description }}</p>
                    <a :href="project.link" target="_blank" class="cta-button">Voir le projet</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'My Irc',
                    description: 'My_IRC est un projet de chat IRC développé dans le cadre de mes études. Ce chat permet aux utilisateurs de communiquer en temps réel en choisissant le pseudo de leur choix.',
                    image: 'https://i.postimg.cc/7b80B7BG/DALL-E-2023-11-03-11-24-51-Illustration-of-a-clean-simple-chat-bubble-icon-with-the-text-My-Irc.png',
                    link: 'https://github.com/Onited/My_IRC'
                },
                {
                    id: 1,
                    title: 'JobBoard',
                    description: 'JobBoard est un projet développé dans le cadre de mes études, en collaboration avec un coéquipier. Il s\'agit d\'une plateforme permettant la mise en relation d\'employeurs et de chercheurs d\'emploi.',
                    image: 'https://i.postimg.cc/dVMcB1wb/DALL-E-2023-11-03-11-36-03-Vector-icon-representing-a-magnifying-glass-focusing-on-a-simplified-do.png',
                    link: 'https://github.com/Onited/JobBoard'
                },
                {
                    id: 1,
                    title: 'Portfolio',
                    description: 'Ce répertoire contient mon portfolio personnel développé avec Vue.js. Il présente une sélection de mes projets, mon expérience et mes compétences, et fournit également un moyen de me contacter. [En cours de développement]',
                    image: 'https://i.postimg.cc/QMqLjGvV/DALL-E-2023-11-03-11-45-38-Vector-illustration-of-an-elegant-portfolio-folder-with-a-clean-and-mod.png',
                    link: 'https://github.com/Onited/My_Portfolio'
                },
                // ... autres projets
            ]
        };
    }
};
</script>

<style scoped>
.portfolio {
    padding: 20px;
}

.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.project-card {
    backdrop-filter: blur(10px); /* Applique un effet de flou de 10 pixels */
    background-color: rgba(143, 143, 143, 0.287); /* Arrière-plan semi-transparent */
    padding: 20px;
    border-radius: 8px;
    width: 300px;
}

.project-card img {
    width: 100%;
    border-radius: 8px;
}

.title{
    color: #8F754F;
}

.descripton{
    color: white;
    height: 150px;
}

.cta-button {
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background-color: #000022;
    color: white;
}

.cta-button:hover {
    background-color: #08083b;
}

</style>
