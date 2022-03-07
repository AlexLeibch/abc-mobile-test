<template>
    <div class="header">
       <img src="../../vendor/image/menu.svg" alt="burger" class="header__burger">
       <div class="header__wrapper">
           <img src="../../vendor/image/rain_bk3.png" alt="" class="header__brain">
            <p class="header__text">тест на определение iq</p>
       </div>
       <img src="../../vendor/image/burger_close.svg" alt="" class="header__close-icon">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .header {
        position: relative;
        display: flex;
        width: 320px;
        height: 46px;
        background-color: black;
        color: white;
    }

    .header__burger {
        margin: 15px 0 13px 15px;
        width: 24px;
        height: 16px;
        cursor: pointer;
    }

    .header__brain {
        width: 48px;
        height: 47px;
    }

    .header__wrapper {
        visibility: hidden;
        margin: 0 0 0 9px;
        display: flex;
        justify-content: center;
    }

    .header__text {
        font-family: Yeseva One;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFC700;
        align-self: center;
        margin-left: 9px;
    }

    .header__close-icon {
        visibility: hidden;
        position: absolute;
        width: 24px;
        height: 24px;
        right: 8px;
        top: 10px;

    }
    
</style>