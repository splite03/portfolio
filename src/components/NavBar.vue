<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-links">
                <div class="navbar-main">
                    <router-link to="/" v-if="$route.path !== '/'">Главная</router-link>
                    <a href="#content-wrapper" v-else>Главная</a>
                    <!-- <div class="themes" v-if="$route.path === '/'">
                        <span class="themes-button" @click="slideTheme()"></span>
                            <span class="themes-drop-hider">
                                <span class="themes-drop">
                                <span class="theme-button-color white" @click="themeHandler('white')"></span>
                                <span class="theme-button-color dark" @click="themeHandler('dark')"></span>
                                <span class="theme-button-color red" @click="themeHandler('red')"></span>
                                <span class="theme-button-color yellow" @click="themeHandler('yellow')"></span>
                                <span class="theme-button-color blue" @click="themeHandler('blue')"></span>
                            </span>
                        </span>
                    </div> -->
                </div>
                <div class="navbar-right">
                    <span class="navbar-link-with-underline">
                        <a href="#about-me" class="navbar-link" v-if="$route.path === '/'">
                            <span class="navbar-underline"></span>Обо мне</a>
                    </span>
                    <span class="navbar-link-with-underline">
                        <div class="navbar-projects">
                            <a href="" class="navbar-link" @click.prevent="drop()">
                                <span class="navbar-underline"></span>Проекты</a>
                            <span class="navbar-drop-hider" v-if="droped">
                                <span class="navbar-drop">
                                    <router-link to="/notes">Notes</router-link>
                                    <router-link to="/tasks">Tasks</router-link>
                                    <a class="apple-watch" href="https://splite03.github.io/apple-watch/">Watch</a>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span class="navbar-link-with-underline">
                        <span class="navbar-link">
                            <a href="https://drive.google.com/file/d/1j02MXxHppUoIvvDSTMi5itc1x0ZVitgl/view" target="_blank">
                                <span class="navbar-underline"></span>CV</a>
                        </span>
                    </span>
                </div>
            </div>
            <div class="navbar-links-mobile" style="padding: 0 10px">
                <div class="navbar-main">
                    <router-link to="/">Главная</router-link>
                </div>
                <burger-menu @clickBurger="mobileDropMenu.classList.add('drop')"></burger-menu>
                <div class="navbar-mobile-drop">
                    <cross-button @clickCross="mobileDropMenu.classList.remove('drop')"></cross-button>
                    <router-link to="/notes">Notes</router-link>
                    <router-link to="/tasks">Tasks</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import crossButton from '@/components/cross-button.vue'
import BurgerMenu from '@/components/burger-menu.vue'
export default {
    props:['scrollToAbout'],
    components:{crossButton, BurgerMenu},
    data(){
        return{
            droped: false
        }
    },
    computed:{
        mobileDropMenu(){
            return document.querySelector('.navbar-mobile-drop')
        }
    },
    methods:{
        drop() {
            this.droped = true
            setTimeout(() => {
                const linksForDrop = document.querySelector('.navbar-drop')
                const droped = document.querySelector('.drop')

                if(droped){
                    linksForDrop.classList.remove('drop')
                    setTimeout(() => {
                        this.droped = false
                    }, 600)
                }else{
                    linksForDrop.classList.add('drop')
                }
            }, 1)
        },
        slideBack(){
            const mainButton = document.querySelector('.themes-button')
            const root = document.documentElement.style
            const themes = document.querySelector('.themes-drop')

            themes.classList.remove('slided')
            mainButton.classList.remove('rotate')
            root.setProperty('--deg', '30deg')
        },
        slideTheme(){
            const themes = document.querySelector('.themes-drop')
            const slided = document.querySelector('.slided')
            const mainButton = document.querySelector('.themes-button')
            const root = document.documentElement.style
            if(slided){
                this.slideBack()
            }else{
                themes.classList.add('slided')
                mainButton.classList.add('rotate')
                root.setProperty('--deg', '180deg')
            }
        },
        themeHandler(theme) {
        const themesButton = document.querySelector('.themes-button')
        const background = document.documentElement.style

        setTimeout(() => {themesButton.style.backgroundImage =`var(--theme-img-${theme})`},300)
        setTimeout(() => {document.querySelector('.themes-button').style.backgroundColor = 'rgb(0,0,0,0)'},300)
        
        if (theme === 'white') {
          background.setProperty('--background-theme','white')
          background.setProperty('--background-navbar-theme','#3E3D3D')
          background.setProperty('--background-navbar-drop-theme','rgb(92, 92, 92)')
          background.setProperty('--color-theme','black')
          background.setProperty('--color-navbar-theme','white')
        //   document.querySelector('.console-app').style.borderColor = 'black'
        //   document.querySelector('.console-body').style.background = 'black'
        }else if (theme === 'dark') {
          background.setProperty('--background-theme','#3c3c3c')
          background.setProperty('--background-navbar-theme','#212121')
          background.setProperty('--background-navbar-drop-theme','#767676')
          background.setProperty('--color-theme','white')
          background.setProperty('--color-navbar-theme','white')
        //   document.querySelector('.console-app').style.borderColor = '#212121'
        //   document.querySelector('.console-body').style.background = '#212121'
          setTimeout(() => {document.querySelector('.themes-button').style.backgroundColor = 'white'},300)
        }else if (theme === 'red') {
          background.setProperty('--background-theme','#de2827')
          background.setProperty('--background-navbar-theme','#84002f')
          background.setProperty('--background-navbar-drop-theme','#9d0033')
          background.setProperty('--color-theme','#ffed38')
          background.setProperty('--color-navbar-theme','#ffbf01')
        //   document.querySelector('.console-app').style.borderColor = '#84002f'
        //   document.querySelector('.console-body').style.background = '#84002f'
        }else if (theme === 'yellow') {
          background.setProperty('--background-theme','#fff300')
          background.setProperty('--background-navbar-theme','#212121')
          background.setProperty('--background-navbar-drop-theme','#5f5b00')
          background.setProperty('--color-theme','black')
          background.setProperty('--color-navbar-theme','#fff300')
        //   document.querySelector('.console-app').style.borderColor = '#212121'
        //   document.querySelector('.console-body').style.background = '#212121'
        }else if (theme === 'blue') {
          background.setProperty('--background-theme','#29baff')
          background.setProperty('--background-navbar-theme','#00549f')
          background.setProperty('--background-navbar-drop-theme','#407fb7')
          background.setProperty('--color-theme','#e8f1fa')
          background.setProperty('--color-navbar-theme','#e8f1fa')
        //   document.querySelector('.console-app').style.borderColor = '#00549f'
        //   document.querySelector('.console-body').style.background = '#00549f'
        }
        this.slideBack()
      }
    }
}
</script>
<style>
.navbar-links-mobile{
    display: none;
}
.navbar { 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    height: 60px;
    width: 100vw;
    background-color: #3E3D3D;
    opacity: 1;
    background: var(--background-navbar-theme);
    color: var(--color-navbar-theme);
    transition: background 1s, color 1s, opacity 1s;
}
.navbar-links { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}
.navbar-links a{
    font-size: 20px;
    transition: color .5s, background .5s;
}
.navbar-main{
    display: flex;
    align-items: center;
}
.themes { 
    margin-left: 40px;
    display: flex;
}
.themes-button { 
    background-image: var(--theme-img-white);
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    display: block;
    cursor: pointer;
    transition: transform .3s, background-image .6s, background-color .6s;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
    background-color: none;
}
.themes-button:hover{
    transform: rotate(var(--deg));
}
.rotate{
    transform: rotate(180deg);
}
.themes-drop-hider{
    overflow: hidden;
    position: relative;
    height: 40px;
    width: 200px;
}
.themes-drop { 
    position: absolute;
    height: 40px;
    width: 200px;
    display: flex;
    right: 200px;
    transition: right 1s;
}
.theme-button-color { 
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    display: block;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
}
.theme-button-color.white{
    background-image: url(/src/assets/theme-white.png);
}
.theme-button-color.dark{
    background-image: url(/src/assets/theme-dark.png);
}
.theme-button-color.red{
    background-image: url(/src/assets/theme-red.png);
}
.theme-button-color.yellow{
    background-image: url(/src/assets/theme-yellow.png);
}
.theme-button-color.blue{
    background-image: url(/src/assets/theme-blue.png);
}
.slided{
    right: 0;
}
.navbar-right { 
    display: flex;
    align-items: center;
}
.navbar-link-with-underline{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 52px;
    position: relative;
}
.navbar-link:hover .navbar-underline{ 
    animation: underline 1.2s forwards ;
}
.navbar-underline{
    height: 6px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    opacity: 0;
    position: absolute;
    top: 50px;
}
.active{
    color: rgb(176, 176, 176);
}
.navbar-drop{
    display: flex;
    width: 150px;
    position: absolute;
    top: -150px;
    background: var(--background-navbar-drop-theme);
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    z-index: 0;
    transition: top .6s ease-in-out, opacity 1s, background 1s;
}
.navbar-drop a{
    text-align: center;
    padding: 10px 5px;
    font-size: 20px;
}
.navbar-drop a:hover{
    background: var(--background-navbar-theme);
    color: var(--color-theme);
}
.navbar-drop-hider{
    display: flex;
    height: 150px;
    width: 120%;
    overflow: hidden;
    position: absolute;
    top:41px;
    left: -10%;
    align-content: center;
    justify-content: center;
}
.drop{
    top: 0;
}
.navbar-mobile-drop{
    position: fixed;
    height: 100vh;
    width: 0;
    overflow: hidden;
    background: grey;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: width .3s ease-in-out;
}
.navbar-mobile-drop a{
    font-size: 20px;
    margin: 10px 20px;
}
.navbar-mobile-drop svg{
    position: static;
    height: 40px;
    width: 40px;
    margin: 10px;
    align-self: flex-end;
}
.drop{
    width: 20vh;
}
.content-wrapper{
    transition: opacity 1s;
    opacity: 0;
}
</style>