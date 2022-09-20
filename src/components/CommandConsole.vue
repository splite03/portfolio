<template>
    <a id="link" target="_blank" href="https://www.google.com/"></a>
    <div class="console-app">
        <div class="console-header"></div>
        <div class="console-body">
            <div class="console-text-area">
                <p class="console-text" v-for="(text, idx) in textes" :key="text">{{textes[idx]}}</p>
            </div>
            <input class="console-input" @keydown.enter="submitInput()" v-model="inputValue" @keydown.down="allInputsHandlerDown()" @keydown.up="allInputsHandlerUp()">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            textes:['use project.current  to go current project','use project.change  to see next project values','use project.name','use project.change.name','','Start taping some commands..'],
            projectsTextes:{
                0:['name : notes','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
                1:['name : tasks','technologys : html, css, vue, js','',''],
                2:['name : notes3','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
                3:['name : notes4','technologys : html, css, vue, js','','Первый проект, который я сделал через неделю после начала изучения Front-end разработки. Последний рефактор был сделан на Vue js.'],
            },
            projectCounter: 0,
            inputValue:'',
            allInputs:[],
            counterInputHandler:0
        }
    },
    methods:{
        submitInput() {
            let value = this.inputValue
            this.allInputs.push(value)
            if(value === 'project.current'){
                document.getElementById('link').click()
                console.log('curent');
                this.inputValue = ''
            }else if(value === 'project.change') {
                this.textes = this.projectsTextes[this.projectCounter]
                this.inputValue = 'project.current'
                this.projectCounter++
                if (this.projectCounter > Object.keys(this.projectsTextes).length - 1 ){
                    this.projectCounter = 0
                }
            }else if(value === 'project.change.name') {
                console.log('change value by name');
                this.inputValue = ''
            }else if(value === 'project.name') {
                console.log('go by name');
                this.inputValue = ''
            }else if(value === 'clear') {
                this.textes.length = 0
                this.inputValue = ''
            }else if(value.split(':')[0] === 'bgc') {
                document.querySelector('body').style.background = value.split(':')[1].trim()
                this.inputValue = ''
            }else{
                this.textes.push('Wrong syntax. Try again.')
                this.inputValue = ''
            }
        },
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
.console-app { 
    height: 40vh;
    width: 45vw;
    background: black;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    border: 3px solid black;
}
.console-header { 
    background-color: grey;
    height: 5%;
    width: 100%;
}
.console-body { 
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.console-text-area { 
    height: 100%;
    margin: 1%;
    overflow-y: scroll;
    scrollbar-width: 2px;
}
.console-text { 
    color: white;
    padding: 4px 0;
}
.console-input { 
    height: 20px;
    background-color: white;
    border: none;
    font-size: 1rem;
}
.console-input:focus-visible{
    outline: 0;
}
</style>