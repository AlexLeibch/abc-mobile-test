<template>
    <div class="info">
        <h1 class="info__title">Пройдите точный и быстрый</h1>
        <p class="info__subtitle">ТЕСТ НА ОПРЕДЕЛЕНИЕ <br>IQ</p>
        <router-link to="/question1"><button class="info__button">пройти тест</button></router-link>
        <div class="info__wrapper">
            <p class="info__text">И получите рекомендации <br>по развитии своего интелекта</p>
            <p class="info__text info__text_white">и улучшению финансового благосостояния и личной жизни</p>
        </div>
        <div class="info__arrow-button">
            <img class="info_arrow-pic" src="../../vendor/image/ArrowIcon.svg" alt="arrow">
        </div>
        <p class="info__arrow-button-text">Подробнее</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .info {
        width: 320px;
        max-height: 647px;
        margin: 0 13px;
        background-image: url('../../vendor/image/rain_bk.png');
    }

    .info__title {
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin: 27px 0 0;
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
        margin: 25px 0 150px;
    }

    .info__button {
        width: 189px;
        height: 41px;
        background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
        border-radius: 20px;
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        color: #0D0C11;
        border: none;
        cursor: pointer;
    }

    .info__wrapper {
        margin: 22px auto 0px;
        text-align: center;
        width: 286px;
        height: 81px;
    }

    .info__text {
        margin: 0;
        box-sizing: content-box;
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        color: #FFC700;
    }

    .info__text_white {
        color: white;
    }

    .info__arrow-button {
        margin: 11px auto 0;
        width: 16px;
        height: 16px;
        background: #FFFFFF;
        border-radius: 50%;
        cursor: pointer;
    }

    .info_arrow-pic {
        width: 7px;
        height: 7px;
        margin-bottom: 3px;

    }

    .info__arrow-button-text {
        margin: 3px 0 11px;
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 8px;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.08em;
        color: #FFFFFF;
    }
</style>