<template>
    <div class="desktop">
        <div class="desktop-icons">
            <div class="desktop-icon desktop-icon-computer"></div> 
            <div class="desktop-icon desktop-icon-cmd"></div>
        </div> 
        <command-console></command-console>
        <div class="desktop-bar">
            <div class="desktop-start"></div>
            <div class="desktop-stick one"></div>
            <div class="desktop-window"></div>
            <div class="desktop-stick two"></div>
            <div class="desktop-time">{{time}}</div>
        </div>
    </div>
</template>

<script>
    import CommandConsole from '@/components/CommandConsole.vue'
export default {
    components:{CommandConsole},
    data() {
        return{
            time: ''
        }
    },
    methods:{
        timeNow() {
            setInterval(() => {
                const date = new Date()
                this.time = date.getMinutes() < 10 ? date.getHours() + ":0" + date.getMinutes(): date.getHours() + ":" + date.getMinutes()
            }, 1000)
        }
    },
    mounted() {
        this.timeNow()
    }
}
</script>

<style>
.desktop { 
    height: 800px;
    width: 100%;
    background-color: #00c0c0;
    position: relative;
    padding-top: 1px ;
}
.desktop-icon{
    margin: 20px;
}
.desktop-icon-computer{
    background-image: url(@/assets/comp.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 60px;
}
.desktop-icon-cmd { 
    background-image: url(@/assets/cmd.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 60px;
}
.desktop-bar { 
    width: 100%;
    height: 40px;
    background-color: rgb(186, 186, 186);
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 2px solid rgb(232, 232, 232);
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
</style>