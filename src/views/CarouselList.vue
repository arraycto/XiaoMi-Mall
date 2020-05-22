

<template>
    <div>
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