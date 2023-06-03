<template>
    <div id="about" class="has-background-dark">

        <div>
            <div class="container">
                <div>

                    <div class="columns">
                    <div class="column" v-for="(item, index ) in awards" :key="index">

                        <img class="award" :src="item.image"/>
                    </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                },
            },

            awards: [
                {
                    id: 1,
                    image: "/img/awards/award-01.svg",

                },
                {
                    id: 2,
                    image: "/img/awards/award-02.svg",
                },
                {
                    id: 3,
                    image: "/img/awards/award-03.svg",
                },
                {
                    id: 4,
                    image: "/img/awards/award-04.svg",

                },
            ],
        };
    },
};
</script>

<style scoped>
.award {
    height: 400px;
    width: 400px;
}
</style>
