<template lang="html">
    <div class="profession">
        <div class="profession__main">

        </div>
        <div class="prfession__wrapper">
            <div>
                <div class="profession__description">

                </div> 
                <div class="description">
                
                </div> 
            </div>
            <div>
                <div class="profession__menu">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.header {
    background-color: #fff;
}
.profession {
    width: 1200px;
    margin: 0 auto;
    margin-top: 48px;
}
.profession__main {
width: 1200px;
height: 387px;
background: #3E39D3;
background-image: url('~/assets/img/profession/bg.png');
background-position: right;
background-repeat: no-repeat;
border-radius: 12px;
}
.prfession__wrapper {
    width: 1200px;
    display: flex;
    justify-content: space-between;
}
.profession__description {
    position: absolute;
    width: 892px;
    height: 76px;
    top: 473px;
    background: #FFF;
    border-radius: 12px;
}
.profession__menu {
position: absolute;
height: 406px;
width: 284px;
left: 992px;
top: 473px;
border-radius: 12px;
background: #FFF;
}
.description {
    width: 892px;
height: 490px;
margin-top: 59px;
background: #fff;
border-radius: 12px;
}
</style>