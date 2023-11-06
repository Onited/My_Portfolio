<template>
    <div class="contact-page">
        <h1 class="title">Me contacter</h1>
        <div class="card-form">
            <div class="center-form">
                <p>
                    Pour toute demande de renseignements ou pour échanger sur vos projets futurs, je suis plus réactif par email
                    ou
                    via LinkedIn. N'hésitez pas à m'envoyer un message directement à <a
                        href="mailto:dorian1.baudry@epitech.eu">dorian1.baudry@epitech.eu</a> ou à me contacter sur <a
                        href="https://www.linkedin.com/in/dorian-baudry34/" target="_blank">LinkedIn</a>. Je serais ravi
                    d'entendre
                    parler de vous !
                </p>
                <div class="contact-icons">
                    <a href="mailto:dorian1.baudry@epitech.eu" class="icon">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-baudry34/" target="_blank" class="icon">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    },
    methods: {
        handleSubmit() {
            console.log('Formulaire soumis:', this.name, this.email, this.subject, this.message);
        }
    }
};
</script>

<style scoped>
.contact-page {
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

.title {
    color: #8F754F;
}

.center-form {
    max-width: 80%;
    margin: 0 auto;
    color: white;
}

a {
    color: #8F754F;
    text-decoration: none;
}

.transparent-input {
    background-color: rgba(143, 143, 143, 0.287);
    border-color: grey;
    outline: none;
    box-shadow: none;
}

.transparent-input:focus {
    border-bottom: 2px solid #008CBA;
}

.card-form {
    backdrop-filter: blur(10px);
    background-color: rgba(143, 143, 143, 0.287);
    width: 40%;
    padding: 2%;
    border-radius: 10px;
    margin: 0 auto;
}

label {
    color: white;
    text-align: left;
}

.contact-icons {
    display: flex;
    gap: 10px;
    color: white;
    justify-content: center;
}

.icon {
    text-decoration: none;
    color: white;

}

@media (max-width: 768px) {
    .card-form {
        width: 80%;
    }

    .center-form {
        max-width: 100%;
    }

    .contact-icons {
        flex-direction: column;
        align-items: center;
    }
}</style>
