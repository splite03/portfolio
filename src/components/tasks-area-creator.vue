<template lang="">
    <div class="tasks-area-input-wrapper">
        <h1 class="tasks-area-creator-header">Создать задачу</h1>
        <label for="title">Заголовок</label>
        <input @input="this.root.style.setProperty('--outline-input-creator', '1px solid black')" @keypress.enter.exact="textarea.focus()" name="title" class="tasks-area-input-header" v-model="inputTitle">
        <label for="description">Описание</label>
        <textarea name="description" class="description" cols="30" rows="10" v-model="inputDescription"></textarea>
        <label for="deadline">Дэд-лайн</label>
        <input :min="currentDay" class="deadline-date" name="deadline" type="date" v-model="inputDate">
        <input class="deadline-time" type="time" v-model="inputTime">
        <button type="submit" class="submit-button" @click="submitTask()">Создать</button>
    </div>
</template>
<script>
export default {
    inject:['tasks'],
    emits:['closeCreator'],
    data(){
        return{
            inputTitle: '',
            inputDescription: '',
            inputDate: null,
            inputTime: null,
        }
    },
    methods:{
        submitTask(){
            if(this.inputTitle === ''){
                this.root.style.setProperty('--outline-input-creator', '1px solid red')
                this.inputTitleEl.focus()
                return
            }
            if(this.inputDescription === ''){
                this.root.style.setProperty('--outline-textarea-creator', '1px solid red')
                this.textarea.focus()
                return
            }
            if(this.inputDate === null){
                this.root.style.setProperty('--outline-date-creator', '1px solid red')
                this.deadlineDate.focus()
                return
            }
            if(this.inputTime === null){
                this.root.style.setProperty('--outline-time-creator', '1px solid red')
                this.deadlineTime.focus()
                return
            }
            const date = new Date(`${this.inputDate}T${this.inputTime}`)

            this.tasks.push({
                title: this.inputTitle,
                description: this.inputDescription,
                status: 'created',
                dateCreated: this.inputDate,
                deadline: date
            })
            this.$router.push(`/tasks/${this.tasks.length - 1}`)
            this.$emit('closeCreator')
        }
    },
    computed:{
        inputTitleEl(){
            return document.querySelector('.tasks-area-input-header')
        },
        textarea(){
            return document.querySelector('.description')
        },
        deadlineDate(){
            return document.querySelector('.deadline-date')
        },
        deadlineTime(){
            return document.querySelector('.deadline-time')
        },
        currentDay(){
            let date = new Date()
            let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
            let days = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
            return `${date.getFullYear()}-${month}-${days}`
        },
        root(){
            return document.documentElement
        }
    },
    mounted(){
    }
}
</script>
<style>
*{
    font-size: 20px;
}
:root{
    --outline-input-creator: 1px solid black;
    --outline-textarea-creator: 1px solid black;
    --outline-date-creator: 1px solid black;
    --outline-time-creator: 1px solid black;
}
.tasks-area-creator-header{
    font-size: var(--tasks-area-header-fz);
    margin-bottom: 10px;
}
.tasks-area-input-wrapper{
    display: flex;
    flex-direction: column;
}
.tasks-area-input-wrapper input{
    padding: 8px 16px;
    border: 0;
    border-radius: 9px;
    margin: 10px 0;
    transition: outline .3s ease-out;
    font-size: var(--tasks-fz);
}
.tasks-area-input-wrapper input:focus{
    outline: var(--outline-input-creator);
}
.tasks-area-input-wrapper textarea{
    padding: 8px 16px;
    border: 0;
    border-radius: 9px;
    resize: none;
    margin: 10px 0;
    font-size: var(--tasks-fz);
}
.tasks-area-input-wrapper textarea:focus{
    outline: var(--outline-textarea-creator) ;
}
.deadline-date{
    align-self: flex-start;
    font-size: var(--tasks-fz);
    background-color: white;
}
.deadline-date:focus{
    outline: var(--outline-date-creator);
}
.deadline-time{
    align-self: flex-start;
    font-size: var(--tasks-fz);
    background-color: white;
}
.deadline-time:focus{
    outline: var(--outline-time-creator);
}
.submit-button{
    padding: 8px 16px;
    background: #8f8f8f;
    border: 0;
    border-radius: 9px;
    color: white;
    align-self: center;
    font-size: var(--tasks-fz);
}
</style>