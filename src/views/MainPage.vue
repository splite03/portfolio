<template >
    <nav-bar :scrollToAbout="scrollToAbout"></nav-bar>

    <!-- БЛОК ПЕРВИЧНЫЙ -->

    <div class="content-wrapper" id="content-wrapper">
        <div class="welcome-block" id="welcome-block">
        <div class="container">
            <div class="block-for-avatar">
                <div class="avatar"></div>
            </div>

            <div class="hello-animation">
                <span class="text">{{content}}</span>
                <span id="stick" class="stick show" style="height: 76px"></span>
            </div>

            <div class="welcome-text-block">
                <div class="welcome-text">{{welcomeText[0]}}</div>
                <div class="welcome-text">{{welcomeText[1]}}</div>
                <div class="arrow-button" @click="scrollToAbout()"></div>
            </div>
        </div>
        </div>

        <!-- БЛОК ОБО МНЕ -->

        <div class="about-me-block" id="about-me">
            <div class="container">
                <h1 class="about-me-header">Обо мне</h1>
                <div class="text-about-animation">
                    <div style="display:flex; align-items: center;">
                        <span class="text-about">{{blocks[0]}}<span class="stick" id="second-stick"></span></span>
                    </div>
                    <div class="text-about">{{blocks[1]}}</div>
                    <div class="text-about">{{blocks[2]}}</div>
                    <div class="text-about">{{blocks[3]}}</div>
                    <div class="text-about">{{blocks[4]}}</div>
                    <div class="text-about">{{blocks[5]}}</div>
                    <div class="text-about">{{blocks[6]}}</div>
                </div>
            </div>
        </div>

        <!-- БЛОК ПРОЕКТОВ -->

        <div class="my-projects">
            <div class="container">
                <h1 class="my-projects-header">Мои проекты</h1>
                <desktop></desktop>
            </div>
        </div>
    </div>
</template>

<script>
import MainPageLogic from '@/MainPageLogic.js'

export default MainPageLogic
</script>

<style >
.content-wrapper{
    padding-top: 120px;
    opacity: 1;
}
.block-for-avatar{
    height: 372px;
    width: 372px;
    overflow: hidden;
    margin: 0 0 35px 8px
}
.avatar{
    background-image: url(@/assets/avat.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    transform: translateX(-372px);
    animation: cubic-bezier(0,0,0,1) img 2s 1.5s;
    animation-fill-mode: forwards;
    opacity: 0;
}

/* Welcome Hello */

.hello-animation{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 35px;
    min-height: 107px;
}
.text{
    font-size: 96px;
}
.stick{
    background-color: var(--color-theme);
    height: 22px;
    width: 2px;
    display: block;
}
.show{
    display: inline-block;
}
.hiden{
    opacity: 0;
    display: inline-block;
}

/* Welcome Text */
.welcome-text-block{
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
}
.welcome-text{
    margin-bottom: 32px;
    opacity: 0;
    animation: color 1s 3s forwards ;
}
.arrow-button{
    background-image: url(/src/assets/arr.png);
    height: 26px;
    width: 49px;
    margin-top: 60px;
    align-self: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity .5s;
    animation: cubic-bezier(0,0,0,1) arror-up-down 1s infinite alternate;
}
.opacity{
    opacity: 0;
}

/* About-me  */

.about-me-block { 
    margin-bottom: 200px;
    padding-top: 100px;
}
.about-me-header { 
    margin-bottom: 55px;
}
.text-about-animation { 
    min-height: 560px;
}
.text-about { 
    margin-bottom: 45px;
}
.back{
    background-color: #0052d6;
    color: white;
}
.line{
    text-decoration: line-through;
}
.mrgn-left{
    margin-left: 20px;
}

/* Проекты */

.my-projects{
    padding-bottom: 300px;
}

.my-projects-header{
    margin-bottom: 40px;
}

/* Анимации */

@keyframes img {
    100%{
      transform: translateX(0);
      opacity: 1;
    }
}
@keyframes arror-up-down {
    100%{
        transform: translateY(10px);
    }
}
@keyframes color {
    to{
        opacity: 1;
    }
}
@keyframes underline {
    0%{
        top: 50px;
        transform: scale(.05, 5);
    }
    25%{
        opacity: .5;
        top: 25px;
        transform: scale(.05, 0.5);
    }
    50%{
        transform: rotate(180deg) scale(.1, 0.5);
        opacity: 1;
    }
    100%{
        opacity: 1;
        top: 25px;
        transform: rotate(180deg) scale(1, .5);
    }
}
</style>