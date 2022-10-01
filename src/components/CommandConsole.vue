
<template>
    <a id="link" target="_blank" href="https://www.google.com/"></a>
    <div class="console-app">
        <div class="console-header" 
        @mousedown.left.prevent="
        $store.state.window = 'console',
        $store.commit('grabHeader')">
            <div class="header-btn hide"
                @mouseup="$store.commit('afterClick', '.hide')"
                @mousedown="$store.commit('preClick', '.hide')"></div>
            <div class="header-btn fullscreen"
                @mouseup="$store.commit('afterClick', '.fullscreen')"
                @mousedown="$store.commit('preClick', '.fullscreen')"></div>
            <div class="header-btn close" 
                @mouseup="$store.commit('afterClick', '.close'), $store.state.cmdOpened = false"
                @mousedown="$store.commit('preClick', '.close')"></div>
        </div>
        <div class="console-body">
            <div class="console-text-area">
                <p class="console-text" v-for="(text, idx) in textes" :key="text">{{textes[idx]}}</p>
            </div>
            <input class="console-input" 
            @keydown.enter="submitInput()" 
            @keydown.down="allInputsHandlerDown()" 
            @keydown.up="allInputsHandlerUp()" 
            v-model="inputValue" 
            @keydown.esc="inputValue = ''"
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            textes:['type <help> to see commands..'],
            projectsTextes:[
                ['name : notes','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
                ['name : tasks','technologys : html, css, vue, js','','Проект по формированию задач и отслеживанием их выполнения.'],
                ['name : notes3','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
                ['name : notes4','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
            ],
            helpText:['project.next - посмотреть проекты/следующий проект','project.current - перейти к текущему проекту','project.<name> - перейти к проекту по имени','clear - очистить консоль', 'bgc:<color> - смени цвет фона', 'fc:<color> - смена цвета шрифта'],
            projectCounter: -1,
            inputValue:'',
            allInputs:[],
            counterInputHandler:0,
        }
    },
    methods:{

        // ПОИСК ИМЕНИ ПРОЕКТА В МАССИВЕ С МАССИВАМИ

        searchName(re, arrays){
            for (let i = 0; i < arrays.length; i++){
                if(arrays[i][0].split(':')[1].trim().search(re) != -1){return i}
            }
            return -1
        },

        // МЕНЯЕМ ЦВЕТ ФОНА ШРИФТА ПРИ ОБНОВЛЕНИИ ТЕКСТА

        backColorChanger(){
            const background = document.documentElement.style
            background.setProperty('--back-color','grey')
            setTimeout(() => {
                background.setProperty('--back-color','none')
            }, 10)
        },

        // ОБРАБОТЧИК ИНПУТА - ENTER

        submitInput() {
            let value = this.inputValue.toLowerCase()
            this.allInputs.push(value)
            this.inputValue = ''
            this.counterInputHandler = 0
            // ПЕРЕЙТИ К ПРОЕКТУ
            if(value === 'project.current'){
                document.getElementById('link').click()
                console.log('curent');
            }
            // КОНСОЛЬНЫЕ КОМАНДЫ
            else if(value === 'help'){
                this.textes = Array.from(this.helpText)
                this.projectCounter = -1
                this.backColorChanger()
            }
            // ПРОКРУТКА ПРОЕКТОВ
            else if(value === 'project.next') {
                const projectLength = this.projectsTextes.length - 1
                
                this.projectCounter === projectLength ? this.projectCounter = 0 : ++this.projectCounter
                this.textes = Array.from(this.projectsTextes[this.projectCounter])
                this.backColorChanger()
            }
            // ПЕРЕХОД ПО ИМЕНИ 
            else if(value.split('.')[0] === 'project') {
                let re = new RegExp(value.split('.')[1], 'g')
                let idx = this.searchName(re, this.projectsTextes)
                idx === -1 ? this.textes.push('Name not found') : this.textes = Array.from(this.projectsTextes[idx]), this.projectCounter = idx
                this.backColorChanger()
            }
            // ОЧИСТИТЬ КОНСОЛЬ
            else if(value === 'clear') {
                this.textes.length = 0
                this.projectCounter = -1
            }
            // ПРИКОЛЮШКИ
            else if(value.split(':')[0].trim() === 'bgc') {
                document.querySelector('.console-body').style.background = value.split(':')[1].trim()
                document.querySelector('.console-app').style.borderColor = value.split(':')[1].trim()
            }
            else if(value.split(':')[0].trim() === 'fc') {
                const fonts = document.documentElement.style
                fonts.setProperty('--fonts-color',value.split(':')[1].trim())
            }
            else{
                this.textes.push('Wrong syntax. Try again.')
                this.backColorChanger()
            }
        },

        // СТРЕЛКИ ВВЕРХ-ВНИЗ 

        allInputsHandlerUp(){
            if(this.counterInputHandler === 0){
                this.counterInputHandler = this.allInputs.length
                this.inputValue = this.allInputs[this.counterInputHandler]
            }else{
                this.inputValue = this.allInputs[--this.counterInputHandler]
            }

        },
        allInputsHandlerDown(){
            if(this.counterInputHandler === this.allInputs.length){
                this.counterInputHandler = 0
                this.inputValue = this.allInputs[this.counterInputHandler]
            }else{
                this.inputValue = this.allInputs[++this.counterInputHandler]
            }

        }
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100&display=swap');

.console-app { 
    height: 300px;
    width: 500px;
    background: black;
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(194, 194, 194);
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    position: absolute;
    left: var(--left-pos-console);
    top: var(--top-pos-console);
    z-index: 10;
}
.console-header { 
    background-color: grey;
    height: 20px;
    width: 100%;
    position: relative;
}
.header-btn { 
    height: 15px;
    width: 16px;
    background-color: rgb(203, 203, 203);
    position: absolute;
    top: 3px;
    border: 2px solid rgb(72, 72, 72);
    border-top-color: rgb(230, 230, 230);
    border-left-color: rgb(230, 230, 230);
}
.hide { 
    right: 44px;
}
.fullscreen { 
    right: 24px;
}
.close { 
    right: 4px;
}
.console-body { 
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 3px solid rgb(159,159,159);
}
.console-text-area { 
    height: 100%;
    margin: 1%;
    overflow-y: scroll;
    scrollbar-width: 2px;
}
:root{
    --fonts-color: white;
    --back-color: none;
}
.console-text { 
    color: var(--fonts-color);
    padding: 4px;
    font-size: 24px;
    transition: background .5s ease-in-out;
    background: var(--back-color);
    font-size: var(--text-size);
    font-family: 'Noto Sans Display', sans-serif;
}
.console-input { 
    height: 28px;
    background-color: white;
    font-size: var(--text-size);
    font-family: 'Noto Sans Display', sans-serif;
    padding: 4px;
    color: black;
    border-bottom: 3px solid rgb(159, 159, 159);
    border-right: 3px solid rgb(159, 159, 159);
}
.console-input:focus-visible{
    outline: 0;
}
</style>