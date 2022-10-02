<template>
    <div class="browser" @mousedown="$emit('clickBrowser')">
        <div class="resize" @mousedown.prevent="$store.state.sizing = true"></div>
        <div class="browser-header" 
        @mousedown.prevent="
        $store.state.window = 'browser',
        $store.state.grabed = true">
            <div class="header-buttons">
                <div class="header-btn hide-browser" style="position:static"
                    @mouseup="$store.commit('afterClick', '.hide-browser')"
                    @mousedown="$store.commit('preClick', '.hide-browser')"></div>
                <div class="header-btn fullscreen-browser" style="position:static"
                    @mouseup="$store.commit('afterClick', '.fullscreen-browser')"
                    @mousedown="$store.commit('preClick', '.fullscreen-browser')"></div>
                <div class="header-btn close-browser" style="position:static"
                    @mouseup="$store.commit('afterClick', '.close-browser'), 
                    $store.state.browserOpened = false,
                    $store.state.window = undefined"
                    @mousedown="$store.commit('preClick', '.close-browser')"></div>
            </div>
        </div>
        <div class="browser-body">
            <div class="browser-input-window">
                <div class="header-btn home"
                    @mouseup="$store.commit('afterClick', '.home'), homePage()"
                    @mousedown="$store.commit('preClick', '.home')"></div>
                <div class="header-btn reload"
                    @mouseup="$store.commit('afterClick', '.reload'), reloadPage()"
                    @mousedown="$store.commit('preClick', '.reload')"></div>
                <input class="browser-input" type="text" name="" id="" v-model="inputLinks" @keypress.enter="submitLink(), welcomePage = false">
            </div>
            <iframe :src="link" frameborder="0" class="browser-view" v-show="!welcomePage"></iframe>
            <div class="browser-view welcomePage" v-show="welcomePage"></div>
        </div>
    </div>
</template>
<script>
export default {
    emits:['clickBrowser'],
    data(){
        return{
            inputLinks: 'http://bing.com',
            link: '',
            welcomePage: true
        }
    },
    methods:{
        submitLink(){
            this.link = ''
            setTimeout(() =>{this.link = this.inputLinks},100)
        },
        reloadPage() {
            const currentPage = this.link
            this.link = ''
            setTimeout(() =>{this.link = currentPage},100)
        },
        homePage(){
            this.link = 'http://'
            this.inputLinks = 'http://'
        }
    }
}
</script>
<style>
.browser { 
    width: 800px;
    height: 600px;
    min-width: 400px;
    min-height: 400px;
    background-color: white;
    border: 3px solid rgb(195, 195, 195);
    border-bottom-color: rgb(77, 77, 77);
    border-right-color: rgb(77, 77, 77);
    position: absolute;
    left: var(--left-pos-browser);
    top: var(--top-pos-browser);
    z-index: 12;
    overflow: hidden;
}
.browser-header { 
    height: 20px;
    width: 100%;
    background: linear-gradient(to right, grey, lightgrey);
    border-right: 3px solid rgb(195, 195, 195);
}
.header-buttons{
    display: flex;
    justify-content: flex-end;
    margin-right: 2px;
}   
.home{
    margin: 0 3px;
}
.reload{
    margin: 0 3px;
}
.browser-body { 
    height: 100%;
    border-bottom: 3px solid rgb(195, 195, 195);
    border-right: 3px solid rgb(195, 195, 195);
    display: flex;
    flex-direction: column;
}
.browser-input-window{
    position: relative;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(181, 181, 181);
}
.browser-input { 
    width: 95%;
    font-size: 13px;
    padding: 2px 5px;
    border: 1px solid black;
    background-color: rgb(255, 255, 255);
    margin-left: 5px;
}
.browser-input:focus-visible{
    outline: 0;
}
.browser-view { 
    height: 100%;
}
.welcomePage{
    background-image:url(@/assets/browser-welcome.png);
    background-size:cover;
    background-repeat: no-repeat;
    pointer-events: none;
}
</style>