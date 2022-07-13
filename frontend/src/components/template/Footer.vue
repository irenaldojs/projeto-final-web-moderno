<template>
  <footer class="footer">
    <span>Copyright <strong>Irenaldo Júnior</strong> 2022</span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #ddd;
        color: #333;
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }

    .app{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        height: 100vh;
        display: grid;
        grid-template-rows: 60px 1fr 40px;
        grid-template-columns: 300px 1fr;
        grid-template-areas:
            "header header"
            "menu content"
            "menu footer";

    }
</style>