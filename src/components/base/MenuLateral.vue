<template>
<div class="lateral">
    <div class="lateral__container-titulo">
        <h1 class="lateral__titulo">Facebook</h1>
    </div>
    <div class="lateral__iframe">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSindibrj&tabs=timeline&width=380&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="380" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    <div class="lateral__container-titulo">
        <h2 class="lateral__titulo">Cursos</h2>
    </div>
    <div>
        <img class="lateral__imagem" src="src\assets\Cursos.jpg" alt="cursos">
    </div>
    <div class="lateral__container-titulo">
        <h3 class="lateral__titulo">Eventos</h3>
    </div>
    <div>
        <img class="lateral__imagem" src="src\assets\eventos.jpg" alt="eventos">
    </div>

</div>
</template>

<script>
export default {

}
    
</script>

<style lang="scss">

.lateral {
    &__container-titulo {
        border-bottom: 4px solid rgb(160, 113, 160);
        margin-bottom: 30px;
        margin-top: 30px;
    }

    &__container-titulo:first-child {
        margin-top: 0;
    }

    &__titulo {
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
        display: inline-block;
        color: white;
        background-color: rgb(160, 113, 160);
        margin-bottom: 0;
        padding: 7px 7px 0px 7px;
        border-left: 4px solid rgb(241, 175, 250);
    }

    &__iframe {
        display: flex;
        justify-content: center;
    }
    &__imagem {
        width: 100%;
    }
}
</style>
