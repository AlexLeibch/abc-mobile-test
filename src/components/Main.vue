<template>
    <div class="main">
        <p class="main__text"> Также по результатам теста <span class="main__text_uppercase">вы получите</span> подробные <span class="main__text_uppercase">советы</span>
        по определению наиболее перспективной <span class="main__text_uppercase">для вашего типа </span><strong>интеллекта</strong> 
        <span class="main__text_uppercase"> сферы деятельности</span>, <br>которая принесет вам скорейший финансовый результат.</p>
        <img src="../../vendor/image/main_pic.jpg" alt="brain_pic" class="main__image">
        <button class="main__button">Пройти тест</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .main {
        width: 320px;
        height:max-content;
        background-color: white;
    }
    .main__text {
        width: 298px;
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #272727;  
        text-align: start;
        margin: 38px 11px;
    }

    .main__text_uppercase {
        text-transform: uppercase;
        font-weight: bold;
    }
    
    .main__button {
        width: 200px;
        height: 44px;
        margin: 0 0 40px;
        background: #FFC700;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #0D0C11
    }

</style>