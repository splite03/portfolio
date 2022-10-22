<template lang="">
    <div class="tasks-area-input-wrapper">
        <h1 class="tasks-area-creator-header">Создать задачу</h1>
        <label for="title">Заголовок</label>
        <input @keypress.enter.exact="textarea.focus()" name="title" class="tasks-area-input-header" v-model="inputTitle">
        <label for="description">Описание</label>
        <textarea name="description" class="description" cols="30" rows="10" v-model="inputDescription"></textarea>
        <label for="deadline">Дэд-лайн</label>
        <input class="deadline-date" name="deadline" type="date" v-model="inputDate">
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
            const date = new Date(`${this.inputDate}T${this.inputTime}`)

            this.tasks.push({
                title: this.inputTitle,
                description: this.inputDescription,
                status: 'created',
                dateCreated: this.inputDate,
                deadline: date
            })
            this.$router.push('/tasks')
            this.$emit('closeCreator')
        }
    },
    computed:{
        textarea(){
            return document.querySelector('.description')
        }
    }
}
</script>
<style>
*{
    font-size: 20px;
}
.tasks-area-creator-header{
    font-size: 64px;
}
.tasks-area-input-wrapper{
    display: flex;
    flex-direction: column;
}
input{
    padding: 8px 16px;
    border: 0;
    border-radius: 9px;
    margin: 10px 0;
}
input:focus{
    outline: 1px solid black;
}
textarea{
    padding: 8px 16px;
    border: 0;
    border-radius: 9px;
    resize: none;
    margin: 10px 0;
}
.deadline-date{
    align-self: flex-start;
}
.deadline-time{
    align-self: flex-start;
}
.submit-button{
    padding: 8px 16px;
    background: #8f8f8f;
    border: 0;
    border-radius: 9px;
    color: white;
    align-self: center;
}
</style>