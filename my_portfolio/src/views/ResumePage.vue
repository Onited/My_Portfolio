<template>
    <div class="resume-page">
        <h1>Mon CV</h1>
        <div class="pdf-viewer">
            <object data="/cv/CV_Dorian_Baudry.pdf" type="application/pdf" width="100%" height="1200px">
                <embed src="/cv/CV_Dorian_Baudry.pdf" type="application/pdf" />
            </object>
        </div>
        <div class="download-button">
            <a href="/cv/CV_Dorian_Baudry.pdf" download="CV_Dorian_Baudry.pdf" class="button">Télécharger mon CV</a>
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
}

.pdf-viewer {
    margin-bottom: 20px;
}

.button {
    padding: 10px 20px;
    background-color: #008CBA;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: #005f5f;
}
</style>