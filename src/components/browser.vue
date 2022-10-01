<template>
    <div class="browser" >
        <div class="browser-header" @mousedown.prevent="$store.state.window = 'browser', $store.commit(`grabHeader`)">
            <div class="browser-header-buttons">
                <div class="header-btn"></div>
                <div class="header-btn"></div>
                <div class="header-btn"></div>
            </div>
        </div>
        <div class="browser-body">
            <div class="browser-input-window">
                <div class="header-btn home"></div>
                <div class="header-btn reload"></div>
                <input class="browser-input" type="text" name="" id="" v-model="inputLinks" @keypress.enter="submitLink()">
            </div>
            <iframe :src="link" frameborder="0" class="browser-view"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputLinks: 'http://',
            // link: 'https://bing.com'
            link: ''
        }
    },
    methods:{
        submitLink(){
            this.link = ''
            setTimeout(() =>{this.link = this.inputLinks},100)
        },reloadPage() {
            const currentPage = this.link
            this.link = ''
            setTimeout(() =>{this.link = currentPage},100)
        },homePage(){
            this.link = 'https://bing.com'
        }
    }
}
</script>
<style>
.browser { 
    width: 800px;
    background-color: white;
    border: 3px solid rgb(195, 195, 195);
    border-bottom-color: rgb(77, 77, 77);
    border-right-color: rgb(77, 77, 77);
    position: absolute;
    left: var(--left-pos-browser);
    top: var(--top-pos-browser);
}
.browser-header { 
    height: 20px;
    width: 100%;
    background-color: grey;
    border-right: 3px solid rgb(195, 195, 195);
}
.browser-btn { 
    height: 15px;
    width: 16px;
    background-color: rgb(203, 203, 203);
    position: absolute;
    top: 3px;
    border: 2px solid rgb(72, 72, 72);
    border-top-color: rgb(230, 230, 230);
    border-left-color: rgb(230, 230, 230);
}
.browser-body { 
    height: 600px;
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
    background-color: rgb(221, 221, 221);
}
.browser-input { 
    width: 80%;
    /* position: absolute;
    top: 0;
    right: 20px; */
    font-size: 13px;
    padding: 2px 5px;
    border: 1px solid black;
    background-color: rgb(255, 255, 255);
}
.browser-input:focus-visible{
    outline: 0;
}
.browser-view { 
    height: 100%;
}
</style>