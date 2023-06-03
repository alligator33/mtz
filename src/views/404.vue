<template>
    <div class="flex justify-center py-10">
        <div class="px-3">

            <img class="banner" src="/img/404.png">
            <h1 class="is-size-3 font-weight-bold text-center">Ooooooops !!</h1>
            <br>
            <p class="is-size-4 text-center">Sorry Page not found </p>
            <div class=" flex justify-center">

                <router-link :to="{name:'home'}" class="button is-primary my-5">Go Home</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

.bg {
    /* The image used */
    /*background-image: url("img/404.png");*/

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
