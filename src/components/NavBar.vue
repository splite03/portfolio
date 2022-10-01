<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-links">
                <div class="navbar-main">
                    <router-link to="/" @click="scrollToBlock('body')">Главная</router-link>
                    <div class="themes">
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
                    </div>
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
    mounted(){
        const body = document.querySelector('.content-wrapper')
        const linksForDrop = document.querySelector('.navbar-drop')
        const link = document.querySelectorAll('.navbar-link-with-underline a')[1]

        body.addEventListener('click', () => {
            linksForDrop.classList.remove('drop')
            link.classList.remove('active')
            this.slideBack()
        })
    },
    methods:{
        scrollToBlock(i) {
            const p = document.querySelector(i).offsetTop - 400
            scrollTo({top: p, behavior: 'smooth'})
        },
        drop() {
            const linksForDrop = document.querySelector('.navbar-drop')
            const link = document.querySelectorAll('.navbar-link-with-underline a')[1]
            const droped = document.querySelector('.drop')

            if(droped){
                linksForDrop.classList.remove('drop')
                link.classList.remove('active')
            }else{
                linksForDrop.classList.add('drop')
                link.classList.add('active')
            }
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

</style>