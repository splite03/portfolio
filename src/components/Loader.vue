<template>
    <div class="wrapper-loader">
      <div class="container">
        <div class="loader">
          <span class="loader-rotate-wrapper section-left">
            <div class="loader-rotate"></div>
          </span>
          <span class="loader-rotate-wrapper section-right">
            <div class="loader-rotate"></div>
          </span>
          <div class="loader-box"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

    // Фейк-загрузка сайта

    mounted(){
      setTimeout(() => {
        this.$store.state.loaded = true
      }, 7000)
      setTimeout(() => {
        document.querySelector('.navbar').style.opacity = 1
        document.querySelector('.content-wrapper').style.opacity = 1
      }, 7010)
    }
}
</script>

<style>
.wrapper-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
.container{
    margin: 25vh 0;
}
.loader{
    height: 428px;
    width: 428px;
    /* background-color: red; */
    opacity: 1;
    position: relative;
    overflow: hidden;
}
.loader-rotate-wrapper{
    position: absolute;
    height: 100%;
    width: 50%;
    /* background-color: rgb(238, 238, 255); */
    overflow: hidden;
}
.loader-rotate-wrapper.section-right{
    right: 0;
    top: 0;
}
.loader-rotate-wrapper.section-left{
    left: 0;
    top: 0;
}
.loader-rotate{
    height: calc(100% - 28px);
    width: 400px;
    /* background-color: aqua; */
    border-radius: 50%;
    position: relative;
    border: 14px solid rgba(255, 0, 0, 0);
}
.loader-rotate-wrapper.section-right .loader-rotate{
    left: -214px;
    /* background-color: blueviolet; */
    border-top-color: rgb(255, 0, 0);
    border-right-color: rgb(255, 0, 0);
    transform: rotate(225deg);
    transition: transform 1s;
    animation: spin-right 1.2s 2.2s, color-top-right 5s 1s forwards;
}
.loader-rotate-wrapper.section-left .loader-rotate{
    /* background-color: rgb(0, 195, 255); */
    left: 14px;
    border-bottom-color: rgb(255, 0, 0);
    border-left-color: rgb(255, 0, 0);
    transform: rotate(225deg);
    transition: transform 1s;
    animation: spin-left 1.4s 3.3s, color-bot-left 5s 1s forwards;
}
.loader-box{
    opacity: 0;
    height: 14px;
    width: 14px;
    background-color: red;
    position: absolute;
    display: inline;
    bottom: 193px;
    left: calc(50% - 7px);
    animation:opac 6.5s .5s forwards, translate 1.5s 1s 1 forwards, scaleX 2.2s 2.5s forwards, coloring 5s 1s forwards, box-back 1.5s 4.7s forwards;
    /* transform: scaleX(1) translateY(1); */
}
@keyframes opac {
    10%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
@keyframes box-back{
    0%{
        height: 200px;
        transform: translateY(-221px);
    }
    100%{
        transform: translateY(0);
    }
}
@keyframes translate{
    0%{
        transform: translateY(0);
    }
    45%{
        height: 232px;
        transform: translateY(0);
    }
    85%{
        transform: translateY(-221px);
        height: 232px;
        
    }
    100%{
        height: 14px;
        transform: translateY(-221px); 
    }
}
@keyframes scaleX {
    0%{
        transform: scaleX(1) translateY(-221px);
    }
    3%{
        transform: scaleX(0) translateY(-221px);
    }
    20%{
        transform: scaleX(0) translateY(-221px);
    }
    55%{
        transform: scaleX(0) translateY(-221px);
    }
    65%{
        transform: scaleX(1) translateY(-221px);
    }
    100%{
        transform: scaleX(1) translateY(-221px);
    }
}
@keyframes spin-left{
    0%{
        transform: rotate(225deg);
    }
    100%{
        transform: rotate(585deg);
    }
}
@keyframes spin-right{
    0%{
        transform: rotate(225deg);
    }
    100%{
        transform: rotate(585deg);
    }
}
@keyframes color-top-right {
    to{
        border-top-color: rgb(116, 255, 47);
        border-right-color: rgb(116, 255, 47);
    }
}
@keyframes color-bot-left {
    to{
        border-bottom-color: rgb(116, 255, 47);
        border-left-color: rgb(116, 255, 47);
    }
}
@keyframes coloring{
    to{
        background-color: rgb(116, 255, 47);
    }
}
</style>