<template>
    <div>
    <b-card class="card-component"
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
    >
        <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
    </b-card>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.card {
    border: none;
}
.card-img {
    height: 230px;
    margin-bottom: 20px;
}
.card-img, .card-img-bottom {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.card-img, .card-img-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
