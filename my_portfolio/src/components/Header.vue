<template>
    <header class="header">
        <div class="left-container">
            <img src="../assets/pp.jpg" alt="Votre photo" class="profile-photo" />
        </div>
        <div class="center-container">
            <div class="name">BAUDRY Dorian</div>
        </div>
        <div class="right-container">
            <nav class="navbar">
                <a href="#home" class="nav-link">Accueil</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#resume" class="nav-link">CV</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
        </div>
    </header>
</template>


<script>
export default {
    name: 'HeaderHome'
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

.left-container, .right-container {
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

.name {
    font-size: 40px;
    color: white;
    font-weight: bold;
}

.navbar {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #555;
}
</style>