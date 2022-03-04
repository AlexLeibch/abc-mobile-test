<template>
    <div class="info">
        <h1 class="info__title">Пройдите точный и быстрый</h1>
        <p class="info__subtitle">ТЕСТ НА ОПРЕДЕЛЕНИЕ <br>IQ</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .info {
        width: 320px;
        height: 647px;
        margin: 0 13px;
        background-image: url('../../vendor/image/rain_bk.png')
    }

    .info__title {
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    .info__subtitle {
        font-family: Yeseva One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #FFC700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>