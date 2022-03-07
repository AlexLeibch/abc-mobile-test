<template>
  <div class="question">
    <Header />
    <div class="question__bar-wrapper">
      <div class="question__bar"></div>
    </div>
    <p class="question__text">Ваш пол:</p>
    <div class="question__radio">
        <div class="question__wrapper">
            <input type="radio" id="male" name="question__male" class="question__male" />
            <label for="male" class="question__label">Мужской</label>
      </div>
       <div class="question__wrapper">
        <input type="radio" id="female" name="question__male" class="question__male" />
        <label for="female" class="question__label">Женский</label>
      </div>
    </div>
    <button class="question__button">Далее</button>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
};
</script>

<style scoped>
    .question {
    width: 320px;
    background-image: url("../../vendor/image/footer_bk.png");
    }

    .question__bar-wrapper {
        margin: 0 auto;
        width: 260px;
        height: 11px;
        background: #F2F3F3;
        mix-blend-mode: normal;
        opacity: 0.59;
        border-radius: 10.5px;
    }

    .question__bar {
        width: 20%;
        height: 11px;
        background: #3BDE7C;
        border-radius: 10.5px;
    }

    .question__text {
        margin: 175px auto 40px;
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }

    .question__radio {
        display: flex;
        flex-direction: column;
        
    }

    .question__wrapper {
        text-align: start;
        width: 320px;
        height: 50px;
        background-color: rgba(243, 243, 243, 0.15) ;
    }

    .question__wrapper:not(:last-child) {
        margin-bottom: 15px;
    }

    .question__male {
        margin-left: 30px;
    }
    .question__label {
        margin-left: 30px;
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 58px;
        color: #FFFFFF;
    }

    .question__button {
        margin: 150px 0 25px;
        width: 189px;
        height: 41px;
        background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

</style>