<template>
    <div class="resume-page">
        <h1 class="title">Mon CV</h1>
        <div class="download-button">
            <a href="/My_Portfolio/cv/CV.pdf" download="CV_Dorian_Baudry.pdf" class="button">Télécharger mon CV</a>
        </div>
        <div class="pdf-viewer">
            <object data="/My_Portfolio/cv/CV.pdf" type="application/pdf" width="100%" height="1200px">
            <embed src="/My_Portfolio/cv/CV.pdf" type="application/pdf" />
</object>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumePage'
}
</script>

<style scoped>
.resume-page {
    padding: 20px;
    text-align: center;
}

.pdf-viewer {
    width: 100%;
    aspect-ratio: 8.5 / 11;
    max-width: 800px;
    margin: auto;
    border: 1px solid #ddd;
}

.download-button {
    margin-top: 20px;
    margin-bottom: 20px;
}

.button {
    padding: 10px 20px;
    background-color: #000022;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
}

.title {
    color: #8F754F;
}

.button:hover {
    background-color: #08083b;
}

@media (max-width: 767px) {
    .pdf-viewer {
        max-width: 100%;
    }

    .pdf-viewer .title {
        font-size: 20px;
    }

    .button {
        padding: 8px 16px;
        font-size: 14px;
    }

    .title {
        font-size: 24px;
    }
}

@media (min-width: 768px) {
    .pdf-viewer {
        max-width: 800px;
    }
}</style>
