<template>
    <div class="desktop"
    @mousemove="moveHeaderX($event, $store.state.window), moveHeaderY($event, $store.state.window)"
    >   
        <div class="desktop-icons">
            <div class="desktop-icon-wrapper ">
                <div class="desktop-icon desktop-icon-computer"></div>
                <p class="desktop-icon-title">My Computer</p>
            </div>
            <div class="desktop-icon-wrapper " @dblclick="$store.state.cmdOpened = true, $store.commit('currentWindow','console')">
                <div class="desktop-icon desktop-icon-cmd"></div>
                <p class="desktop-icon-title">Command</p>
            </div>
            <div class="desktop-icon-wrapper ">
                <div class="desktop-icon desktop-icon-folder"></div>
                <p class="desktop-icon-title">Projects</p>
            </div>
            <div class="desktop-icon-wrapper " @dblclick="$store.state.browserOpened = true, $store.commit('currentWindow','browser')">
                <div class="desktop-icon desktop-icon-explorer"></div>
                <p class="desktop-icon-title">Internet Explorer</p>
            </div>
        </div> 
        <command-console v-if="$store.state.cmdOpened"></command-console>
        <browser v-if="$store.state.browserOpened"></browser>
        <div class="desktop-bar">
            <div class="desktop-start"
            @mousedown="$store.commit('preClick', '.desktop-start')"
            @mouseup="$store.commit('afterClick', '.desktop-start')"></div>
            <div class="desktop-stick one"></div>
            <div class="desktop-window"></div>
            <div class="desktop-stick two"></div>
            <div class="desktop-time">{{time}}</div>
        </div>
    </div>
</template>

<script>
    import CommandConsole from '@/components/CommandConsole.vue'
    import browser from '@/components/browser.vue'
export default {
    components:{CommandConsole,browser},
    data() {
        return{
            time: '',
            startPointXbrowser: 200,
            startPointYbrowser: 100,
            startPointX: 200,
            startPointY: 100,
        }
    },
    methods:{
        timeNow() {
            setInterval(() => {
                const date = new Date()
                this.time = date.getMinutes() < 10 ? date.getHours() + ":0" + date.getMinutes(): date.getHours() + ":" + date.getMinutes()
            }, 1000)
        },
        moveHeaderX(e, window){
            const pos = document.documentElement.style
            let leftPos = getComputedStyle(document.documentElement).getPropertyValue(`--left-pos-${window}`)
            let startX = parseInt(leftPos.split('px')[0])

            if (!this.$store.state.grabed) return
            pos.setProperty(`--left-pos-${window}`, `${startX+=e.movementX}px`)
        },
        moveHeaderY(e, window){
            const pos = document.documentElement.style
            let topPos = getComputedStyle(document.documentElement).getPropertyValue(`--top-pos-${window}`)
            let startY = parseInt(topPos.split('px')[0])

            if (!this.$store.state.grabed) return
            pos.setProperty(`--top-pos-${window}`, `${startY+=e.movementY}px`)
        }
    },
    mounted() {
        this.timeNow()
        window.addEventListener('mouseup', () => this.$store.commit('dropHeader'))
    }
}
</script>

<style>
:root{
    --left-pos-browser: 200px;
    --top-pos-browser: 100px;
    
    --left-pos-console: 200px;
    --top-pos-console: 100px;
}
.desktop { 
    height: 800px;
    width: 100%;
    background-color: #00c0c0;
    position: relative;
    padding-top: 1px ;
    overflow: hidden ;
}
.desktop-icons{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.desktop-icon-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
}
.desktop-icon-title{
    font-size: 11px;
}
.desktop-icon{
    margin: 20px;
    margin-bottom: 4px;
    height: 60px;
    width: 60px;
}
.desktop-icon-computer{
    background-image: url(@/assets/comp.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.desktop-icon-cmd { 
    background-image: url(@/assets/cmd.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.desktop-icon-folder{
    background-image: url(@/assets/folder.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.desktop-icon-explorer{
    background-image: url(@/assets/explorer.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.desktop-bar { 
    width: 100%;
    height: 40px;
    background-color: rgb(186, 186, 186);
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 2px solid rgb(232, 232, 232);
    z-index: 15;
}
.desktop-stick{
    height: 80%;
    border: 2px solid rgb(82, 82, 82);
    border-top-color: rgb(232, 232, 232);
    border-left-color: rgb(232, 232, 232);
    position: absolute;
    margin: 3px;
}
.desktop-stick.one{
    left: 65px;
}
.desktop-stick.two{
    right: 76px;
}
.desktop-start { 
    position: absolute;
    left: 0;
    height: 80%;
    width: 60px;
    margin: 3px;
    background-image: url(@/assets/start.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(186, 186, 186);
    border: 2px solid rgb(222, 222, 222);
    border-bottom: 2px solid rgb(69, 69, 69);
    border-right: 2px solid rgb(69, 69, 69);
}
.desktop-window { }
.desktop-time { 
    /* height: 80%; */
    background: #9d9d9d;
    width: 71px;
    border: 2px solid #dddddd;
    border-left: 2px solid #545454;
    border-top: 2px solid #545454;
    position: absolute;
    right: 0;
    font-size: 16px;
    text-align: center;
    padding: 7px 4px;
    margin: 1px;
}
.active-window{
    z-index: 14;
}
</style>