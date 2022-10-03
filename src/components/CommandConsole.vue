
<template>
    <a id="link" target="_blank" href="https://www.google.com/"></a>
    <div class="console" 
    @mousedown="$emit('clickCmd')"
    @keydown.shift.up.exact.prevent="fontSizeHandler($event)"
    @keydown.shift.down.exact.prevent="fontSizeHandler($event)">
        <div class="resize" 
        @mousedown.prevent="$store.state.sizing = true"
        @dblclick.exact.prevent="$emit('fullscreenCmd')"></div>
        <div class="console-header" 
        @mousedown.left.exact.prevent="$store.commit('grabHeader', $event)"
        @dblclick.exact="$emit('fullscreenCmd')">
            <div class="header-buttons">
                <div class="header-btn hide-console"
                    @mouseup="$store.commit('afterClick', '.hide-console')"
                    @mousedown="$store.commit('preClick', '.hide-console')"></div>
                <div class="header-btn fullscreen-console"
                    @mouseup="$store.commit('afterClick', '.fullscreen-console'),
                    $emit('fullscreenCmd')"
                    @mousedown="$store.commit('preClick', '.fullscreen-console')"></div>
                <div class="header-btn close-console" 
                    @mouseup.left.exact="$store.commit('afterClick', '.close-console'), 
                    $store.state.cmdOpened = false,
                    $store.state.window = undefined"
                    @mousedown="$store.commit('preClick', '.close-console')"></div>
            </div>
        </div>
        <div class="console-body">
            <div class="console-text-area">
                <p class="console-text" v-for="(text, idx) in textes" :key="text">{{textes[idx]}}</p>
            </div>
            <input class="console-input" 
            @keydown.enter="submitInput()" 
            @keydown.down.exact="allInputsHandlerDown()" 
            @keydown.up.exact="allInputsHandlerUp()" 
            v-model="inputValue" 
            @keydown.esc="inputValue = ''"
            >
        </div>
    </div>
</template>

<script>
export default {
    emits:['clickCmd','fullscreenCmd'],
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
        // ШРИФТ САЙЗ ХЕНДЛЕР, ШИФТ + СТРЕЛКИ ВВЕРХ/ВНИЗ

        fontSizeHandler(e){
            const font = document.documentElement
            let size = getComputedStyle(font).getPropertyValue('--font-size-console')
            let numSize = parseInt(size.split('px')[0])

            console.log(font);
            console.log(size);
            console.log(numSize);

            if(e.key === 'ArrowUp' && numSize < 50) font.style.setProperty('--font-size-console',`${numSize += 2}px`) 
            if(e.key === 'ArrowDown' && numSize > 10) font.style.setProperty('--font-size-console',`${numSize -= 2}px`) 
        },

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
                document.querySelector('.console').style.borderColor = value.split(':')[1].trim()
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
@font-face {
	font-family: 'Pixel Font'; 
	src: local('Pixel Font'),
		url(@/fonts/Fifaks10Dev1.ttf); 
}
.resize{
    position: absolute;
    right: 0;
    bottom: 0;
	border-bottom: 15px solid #c2c2c2; 
	border-left: 15px solid transparent;
    z-index: 17;
    cursor: nwse-resize;
}
.console { 
    height: var(--height-console);
    width: var(--width-console);
    min-width: 400px;
    min-height: 200px;
    background: black;
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(194, 194, 194);
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    position: absolute;
    left: var(--left-pos-console);
    top: var(--top-pos-console);
    z-index: 12;
}
.console-header { 
    background: linear-gradient(to right, grey, lightgrey);
    height: 18px;
    width: 100%;
    position: relative;
    border-right: 3px solid #c2c2c2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.header-btn { 
    height: 15px;
    width: 16px;
    background-color: rgb(203, 203, 203);
    position: static;
    margin: 0 2px 0;
    border: 2px solid rgb(72, 72, 72);
    border-top-color: rgb(230, 230, 230);
    border-left-color: rgb(230, 230, 230);
}
.console-body { 
    height: calc(100% - 18px);;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 3px solid #c2c2c2;
}
.console-text-area { 
    height: calc(100% - 28px);;
    margin: 3px;
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
    font-size: var(--font-size-console);
    transition: background .5s ease-in-out;
    background: var(--back-color);
    font-family: 'Book Antiqua';
    font-weight: 100;
}
.console-input { 
    height: 28px;
    background-color: white;
    font-size: var(--font-size-console);
    font-family: 'Book Antiqua';
    padding: 4px;
    color: black;
    border: 0;
    border-bottom: 3px solid #c2c2c2;
}
.console-input:focus-visible{
    outline: 0;
}
</style>