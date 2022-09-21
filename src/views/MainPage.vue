<template >
    <nav-bar :scrollToAbout="scrollToAbout"></nav-bar>

    <!-- БЛОК ПЕРВИЧНЫЙ -->

    <div class="content-wrapper">
        <div class="welcome-block">
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

        <div class="about-me-block">
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
                <command-console></command-console>
            </div>
        </div>
    </div>
</template>

<script>
import MainPageLogic from '@/MainPageLogic.js'

export default MainPageLogic
</script>

<style >
</style>