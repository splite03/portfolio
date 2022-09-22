<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-links">
                <div class="navbar-main">
                    <router-link to="/" @click="scrollToBlock('body')">Главная</router-link>
                </div>
                <div class="navbar-right">
                    <span class="navbar-link-with-underline">
                        <a href="" class="navbar-link" @click.prevent="scrollToAbout()">Обо мне</a>
                        <span class="navbar-underline"></span>
                    </span>
                    <span class="navbar-link-with-underline">
                        <a href="" class="navbar-link" @click.prevent="drop()">Проекты</a>
                        <span class="navbar-underline"></span>
                        <span class="navbar-drop-hider">
                            <span class="navbar-drop">
                                <router-link to="/">Notes</router-link>
                                <router-link to="/">Tasks</router-link>
                                <router-link to="/">Toggle</router-link>
                            </span>
                        </span>
                    </span>
                    <span class="navbar-link-with-underline">
                        <a href="" class="navbar-link" @click.prevent="">Контакты</a>
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
        position: absolute;
        top: -100px;
        background: rgb(92, 92, 92);
        flex-direction: column;
        align-items: stretch;
        justify-content: space-around;
        z-index: 0;
        transition: top .6s ease-in-out, opacity 1s;;
    }
    .navbar-drop a{
        text-align: center;
        padding: 20px 20px;
        font-size: 20px;
    }
    .navbar-drop a:hover{
        background: rgb(71, 71, 71);
        color: rgb(142, 142, 142);
    }
    .navbar-drop-hider{
        display: flex;
        height: 150px;
        width: 120%;
        overflow: hidden;
        position: absolute;
        top:46px;
        align-content: center;
        justify-content: center;
    }
    .drop{
        top: 0;
    }
</style>