<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-links">
                <div class="navbar-main">
                    <router-link to="/" @click="scrollToBlock('body')">Главная</router-link>
                </div>
                <div class="navbar-right">
                    <span class="navbar-link-with-underline">
                        <a href="" @click.prevent="scrollToAbout()">Обо мне</a>
                        <span class="navbar-underline"></span>
                    </span>
                    <span class="navbar-link-with-underline">
                        <a href="" @click.prevent="drop()">Проекты</a>
                        <span class="navbar-underline"></span>
                    </span>
                    <span class="navbar-link-with-underline">
                        <a href="" @click.prevent="">Контакты</a>
                        <span class="navbar-underline"></span>
                    </span>
                </div>
            </div>
            <div class="navbar-links-mobile">
                <div class="navbar-main">
                    <a href="">Главная</a>
                </div>
                <div class="navbar-button"></div>
            </div>
        </div>
    </div>
    <span class="navbar-drop">
        <router-link to="/">Notes</router-link>
        <router-link to="/">Tasks</router-link>
        <router-link to="/">Toggle</router-link>
    </span>
</template>
<script>
export default {
    props:['scrollToAbout'],
    methods:{
        scrollToBlock(i) {
            const p = document.querySelector(i).offsetTop - 400
            scrollTo({top: p, behavior: 'smooth'})
        },
        drop() {
            if(document.querySelector('.drop')){
                document.querySelector('.navbar-drop').classList.remove('drop')
                document.querySelectorAll('.navbar-link-with-underline a')[1].classList.remove('active')
            }else{
                document.querySelector('.navbar-drop').classList.add('drop')
                document.querySelectorAll('.navbar-link-with-underline a')[1].classList.add('active')
            }
        }
    }
}
</script>
<style>
    .navbar-drop{
        display: flex;
        width: 150px;
        position: fixed;
        top: -150px;
        right: 440px;
        background: rgb(92, 92, 92);
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        z-index: 0;
        transition: top .6s ease-in-out, opacity 1s;;
    }
    .navbar-drop a{
        padding: 20px;
        font-size: 20px;
    }
    .drop{
        top: 60px;
    }
</style>