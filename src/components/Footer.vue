<template>
    <footer class="footer">
        <p class="footer__text">
            Прохождение теста займет у вас не более <span class="footer__text_yellow">12 минут</span>, а его результаты вы 
            <span class="footer__text_yellow">сможете использовать всю жизнь</span>
        </p>
        <div class="footer__wrapper">
            <p class="footer__title">Профессиональная <br>интерпретация и детально <strong>проработанные рекомендации</strong>  позволят вам 
                качественно <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.
            </p>
        </div>
        <button class="footer__button">Пройти тест</button>
        <p class="footer__year"> &copy; 2019 </p>
        <img src="../../vendor/image/light_svg.svg" alt="light" class="footer__lightning footer__lightning_right">
        <img src="../../vendor/image/light_svg.svg" alt="light" class="footer__lightning footer__lightning_left">
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .footer {
        position: relative;
        display: flex;
        flex-direction: column;
        font-family: Merriweather;
        width: 320px;
        z-index: 20;
        background-image: url('../../vendor/image/footer_bk.png');
        overflow: hidden;
    }

    .footer__text {
        width: 262px;
        margin: 56px 0px 14px 14px;
        text-align: start;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        z-index: 2;
    }

    .footer__text_yellow {
        color: yellow;
    }

    .footer__wrapper {
        width: 303px;
        margin: 0 auto;
        background: rgba(243, 243, 242, 0.8);
        border-radius: 20px;
    }

    .footer__title {
        margin: 29px 15px 31px;
        text-align: start;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #181818;
        z-index: 3;

    }

    .footer__button {
        margin: 33px auto 52px;
        width: 200px;
        height: 44px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 50px;
        background: none;   
    }

    .footer__year {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 23px;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
        margin: 0 0 13px;
    }

    .footer__lightning {
        width: 165px;
        height: 165px;
        position: absolute;
        z-index: 1;
        object-fit: fill;
    }

    .footer__lightning_right {
        left: 189px;
        transform: rotate(5deg);
        top: 67px;
    }
    
    .footer__lightning_left {
        transform: rotate(-50deg);
        bottom: 45px;
        left: -92px;
    }

</style>