<template lang="html">
    <div class="au">        
        <button class="au__button">
            <img class="au__button-logo au__button-logo--instagram" src="~/assets/img/global/instagram.svg">
        </button>
        <button class="au__button">
            <img class="au__button-logo" src="~/assets/img/global/facebook.svg">
        </button>
        <button class="au__button">
            <img class="au__button-logo" src="~/assets/img/global/vk.svg">
        </button>
        <button class="au__button">
            <img class="au__button-logo" src="~/assets/img/global/youtube.svg">
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.au {
    width: 164px;
    height: 32px;
    display: flex;
    justify-content: space-between;
}
.au__button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #FFF;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.09);
}
.au__button-logo {
    width: 18px;
}
.au__button-logo--instagram {
    width: 16px;
}
</style>