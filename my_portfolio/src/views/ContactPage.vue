<template>
    <div class="contact-page">
        <h1 class="title">Me contacter</h1>
        <div class="card-form">
            <div class="center-form">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" id="name" class="transparent-input" v-model="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="transparent-input" v-model="email" required />
                    </div>
                    <div class="form-group">
                        <label for="subject">Sujet</label>
                        <input type="text" id="subject" class="transparent-input" v-model="subject" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" class="transparent-input" v-model="message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
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
            // Logique pour traiter le formulaire
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

.title{
    color: #8F754F;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #008CBA;
    color: white;
    cursor: pointer;
}

.center-form {
    max-width: 80%;
    margin: 0 auto;
}

.transparent-input {
    background-color: rgba(143, 143, 143, 0.287);
    border-color: grey;
    outline: none;
    box-shadow: none;
}

/* Vous pouvez également définir une bordure en cas de focus si vous le souhaitez */
.transparent-input:focus {
    border-bottom: 2px solid #008CBA; /* Par exemple, une bordure inférieure bleue */
}

.card-form{
    backdrop-filter: blur(10px); /* Applique un effet de flou de 10 pixels */
    background-color: rgba(143, 143, 143, 0.287); /* Arrière-plan semi-transparent */
    width: 40%;
    padding: 2%;
    border-radius: 10px;
    margin: 0 auto;
}

label{
    color: white;
    text-align: left;
}

</style>
