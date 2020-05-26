

<template>
    <div class="caroussei-list">
        <section>
            <mi-carousel></mi-carousel>
        </section>
        <section>
            <recommend-list></recommend-list>
        </section>
    </div>
</template>


<script>
import MiCarousel from '../components/MiCarousel.vue'
import RecommendList from '../components/RecommendList.vue'

export default {
    name: 'CarouselList',
    components: {
        MiCarousel,
        RecommendList
    }
}
</script>


<style scoped>

.caroussei-list {
    display: grid;
    width: 100%;
    grid-template-columns: 18% 82%;
    grid-template-rows: auto;
    background-color: red;
}




</style>