<template>
    <div class="text">
        <div class="content"></div>
        <div class="dash"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "Dorian BAUDRY",
            index: 0,
            chars: 0,
            speed: 100,
            container: null
        };
    },
    mounted() {
        this.chars = this.text.length;
        this.container = this.$el.querySelector('.content');
        this.write();
    },
    methods: {
        write() {
            this.container.append(this.text[this.index]);
            if (this.index < this.chars - 1) {
                this.index++;
                setTimeout(() => {
                    this.write();
                }, this.speed);
            }
        }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
    font-family: 'Roboto';
    color: #333;
}

.text {
    width: fit-content;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    margin-left: 20px;
    top: 0;
    bottom: 0;
    color: white;
}

.text .content {
    display: inline;
}

.text .dash {
    display: inline-block;
    height: 3px;
    width: 20px;
    background-color: #3498db;
    animation: blink .5s infinite linear;
}

@media (max-width: 767px) {
    .text {
        font-size: 20px;
        margin-left: 0px;
    }
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    99% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>