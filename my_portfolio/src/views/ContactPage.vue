<template>
    <div class="contact-page">
        <h1>Me contacter</h1>
        <div class="center-form">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input type="text" id="name" v-model="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div class="form-group">
                    <label for="subject">Sujet</label>
                    <input type="text" id="subject" v-model="subject" required />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="message" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
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

input,
textarea {
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
    max-width: 500px;
    margin: 0 auto;
}

button:hover {
    background-color: #005f5f;
}
</style>
