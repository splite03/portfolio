<template>
    <div class="tasks-area-wrapper" v-if="task">
        <div class="tasks-area-header-wrapper">
            <div :class="`status-circle ${statusHandler(task.status)}`" style="height: 32px; width: 32px"></div>
            <h1 class="tasks-area-header">{{task.title}}</h1>
        </div>
        <p class="tasks-area-description">{{task.description}}</p>
        <div class="tasks-area-buttons">
            <div class="tasks-area-deadline" v-if="showDeadline()">{{currentDeadline}}</div>
            <div class="tasks-area-button-onwork"
                v-if="task.status === 'created'"
                @click="task.status = 'onwork', $emit('recount')"
            >Взять в разработку</div>
            <div class="tasks-area-button-done"
            v-if="task.status === 'onwork'"
            @click="task.status = 'done', $emit('recount')"
            >Выполнено</div>
        </div>
    </div>
</template>

<script>
export default {
    inject:['tasks', 'statusHandler'],
    props:['taskId'],
    emits:['recount'],
    data(){
        return{
            currentDeadline: 0,
        }
    },
    computed:{
        task(){
            return this.tasks[this.taskId]
        }
    },
    methods:{
        getDeadline(){
            if(!this.task) return

            let currentTime = new Date()
            let days
            let hours
            let minutes
            let seconds
            const deadline = this.task.deadline

            days = parseInt( (currentTime - deadline) / 86400000 )
            hours = parseInt( ((currentTime - deadline) / 3600000) - days * 24 )
            minutes = parseInt( ((currentTime - deadline) / 60000) - (days * 24 * 60 + hours * 60))
            seconds = parseInt((currentTime - deadline) / 1000 - ((days * 24 * 60 + hours * 60) * 60) - minutes * 60)

            this.currentDeadline = `${Math.abs(days)} : ${Math.abs(hours)} : ${Math.abs(minutes)} : ${Math.abs(seconds)}`
        },
        showDeadline(){
            if(this.task.status !== 'fired' && this.task.status !== 'done'){
                return true
            }
            return false
        }
    },
    mounted(){
        this.getDeadline()
        let deadline = setInterval(() => {
            this.tasks.length === 0 ? clearInterval(deadline) : this.getDeadline(this.currentTaskIdx)
        }, 1000)
    },updated(){
        this.getDeadline()
    }
}
</script>

<style scoped>
*{
    font-size: 20px;
}
.tasks-area-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
}
.tasks-area-header-wrapper { 
    display: flex;
    align-items: center;
    margin-bottom: 113px;
}
.status-circle { 
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
}
.grey{
    background-color: #B6B6B6;
}
.yellow { 
    background-color: #FFF500;
}
.green { 
    background-color: #42FF00;
}
.red { 
    background-color: red;
}
.tasks-area-header{
    font-size: 64px;
}
.tasks-area-buttons{
    display: flex;
    justify-self: flex-end;
    margin-top: auto;
}
.tasks-area-deadline { 
    padding: 15px 40px;
    background-color: #7B7B7B;
    border-radius: 9px;
    color: white;
    margin-right: 40px;
    width: 210px;
    text-align: center;
}
.tasks-area-button-onwork { 
    padding: 16px 22px 13px;
    background-color: yellow;
    border-radius: 9px;
    color: #5A5B00;
    cursor: pointer;
}
.tasks-area-button-done{
    padding: 16px 22px 13px;
    background-color: #52FF00;
    border-radius: 9px;
    color: #1a5300;
    cursor: pointer;
}
</style>