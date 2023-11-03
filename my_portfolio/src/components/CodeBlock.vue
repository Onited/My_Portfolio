<template>
    <div class="code-block">
        <pre>
            <code>
              {{ code }}
            </code>
          </pre>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            code: `
function sayHello() {
    console.log('Hello, world!');
}

sayHello();
        `
        };
    }
};
</script>

<style scoped>
.code-block {
    background-color: #2b2b2b;
    padding: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    margin-bottom: 20px;
}

pre {
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
}

code {
    display: block;
    padding: 10px;
    color: #b4cae0;
}
</style>