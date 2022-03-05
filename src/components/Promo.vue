<template>
    <div class="promo">
        <img src="../../vendor/image/“.svg" alt="" class="promo__quote">
        
        <p class="promo__text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
         но и выработать список рекомендаций для повышения этого показателя.</p>
        <img src="../../vendor/image/quote_right.svg" alt="" class="promo__quote promo__quote_position-right">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .promo {
        display: flex;
        flex-direction: column;
        background-image: url('../../vendor/image/promo_background.png');
        width: 320px;
        height: 339px; 
    }

    .promo__text {
        margin: 0 auto;
        width: 248px;
        height: 228px;
        font-family: Yeseva One;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    .promo__quote {
        margin: 43px auto 17px 24px;
    }

    .promo__quote_position-right {
        margin: 0 29px 32px auto;
    }


</style>