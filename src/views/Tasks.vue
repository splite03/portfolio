<template>
    <navbar></navbar>
    <div class="container">
        <div class="tasks-outer">
            <div class="tasks-wrapper">
            <div class="tasks-header">
                <select name="sort" id="sort">
                    <option value="">Сортировка</option>
                    <option value="date">По дате</option>
                    <option value="status">По статусу</option>
                </select>
                <div class="tasks-counter">
                    <div class="counter-with-circle">
                        <div class="status-circle grey" style="margin-right: 6px"></div>
                        <div class="counter">{{createdTasks}}</div>
                    </div>
                    <div class="counter-with-circle">
                        <div class="status-circle yellow" style="margin-right: 6px"></div>
                        <div class="counter">{{onworkTasks}}</div>
                    </div>
                    <div class="counter-with-circle">
                        <div class="status-circle green" style="margin-right: 6px"></div>
                        <div class="counter">{{doneTasks}}</div>
                    </div>
                    <div class="counter-with-circle">
                        <div class="status-circle red" style="margin-right: 6px"></div>
                        <div class="counter">{{firedTasks}}</div>
                    </div>
                </div>
                <div class="cross-button-area" @click="taskCreatorOpened = !taskCreatorOpened, removeSelect()">
                    <cross-button></cross-button>
                </div>
            </div>
            <div class="tasks-body">
                <div class="tasks-list">
                    <div class="tasks-preview" v-for="(task, idx) in tasks" :key="task"
                    @click="$router.push(`/tasks/` + idx), selectTask(idx),taskCreatorOpened = false">
                        <div class="tasks-preview-header-with-circle">
                            <div :class="`status-circle ${statusHandler(task.status)}`"></div>
                            <p class="tasks-preview-header">{{task.title}}</p>
                        </div>
                        <p class="tasks-preview-description">{{task.description}}</p>
                        <cross-button 
                        @clickCross="removeTask(idx)"></cross-button>
                    </div>
                </div>
                <div class="tasks-area">
                    <tasks-area 
                    :task-Id="$route.params.taskId"
                    @recount="statusCounterHandler()"
                    v-if="!taskCreatorOpened"
                    ></tasks-area>
                    <tasks-area-creator v-if="taskCreatorOpened"
                    @closeCreator="taskCreatorOpened = false"></tasks-area-creator>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
import crossButton from '@/components/cross-button.vue'
import tasksArea from '@/components/tasks-area.vue'
import tasksAreaCreator from '@/components/tasks-area-creator.vue'

export default {
    components:{Navbar, crossButton,tasksArea, tasksAreaCreator},
    props:[],
    provide(){
        return{
            tasks: this.tasks,
            statusHandler: this.statusHandler,
            showDeadline: this.showDeadline,
            currentDeadline: this.currentDeadline,
        }
    },
    data(){
        return{
            tasks:[
                {
                title: 'Первая задача',
                description: 'Описание задачи заключается в грамотном и компактном составление тз к предстоящей задаче.',
                status: 'created',
                dateCreated: new Date(2022, 9, 21, 2, 29, 0),
                deadline: new Date(2022, 9, 23, 12, 0, 0)
                },
                {
                title: 'Вторая задача',
                description: 'Описание задачи заключается в грамотном и компактном составление тз к предстоящей задаче.',
                status: 'created',
                dateCreated: new Date(2022, 9, 21, 2, 13, 0),
                deadline: new Date(2022, 9, 25, 8, 0, 0)
                },
                {
                title: 'Третья задача',
                description: 'Описание задачи заключается в грамотном и компактном составление тз к предстоящей задаче.',
                status: 'done',
                dateCreated: new Date(2022, 9, 21, 0, 45, 0),
                deadline: new Date(2022, 9, 23, 12, 0, 0)
                },
                {
                title: 'Четвертая задача',
                description: 'Описание задачи заключается в грамотном и компактном составление тз к предстоящей задаче.',
                status: 'fired',
                dateCreated: new Date(2022, 9, 21, 0, 45, 0),
                deadline: new Date(2022, 9, 23, 12, 0, 0)
                }
            ],
            createdTasks: 0,
            onworkTasks: 0,
            doneTasks: 0,
            firedTasks: 0,
            taskCreatorOpened: false
        }
    },
    methods:{
        statusCounterHandler(){
            let counter = 0

            for(let task of this.tasks){
                if(task.status === 'created'){
                    counter++
                }
            }
            this.createdTasks = counter
            counter = 0
            for(let task of this.tasks){
                if(task.status === 'onwork'){
                    counter++
                }
            }
            this.onworkTasks = counter
            counter = 0
            for(let task of this.tasks){
                if(task.status === 'done'){
                    counter++
                }
            }
            this.doneTasks = counter
            counter = 0
            for(let task of this.tasks){
                if(task.status === 'fired'){
                    counter++
                }
            }
            this.firedTasks = counter
        },
        statusHandler(status){
            if (status === 'created') return 'grey'
            if (status === 'onwork') return 'yellow'
            if (status === 'done') return 'green'
            if (status === 'fired') return 'red'
        },
        selectTask(idx){
            let previews = document.querySelectorAll('.tasks-preview')
            try{
                this.removeSelect()
                previews[idx].classList.add('selected-preview')
            }catch {
                console.log('No tasks here to select');
            }
        },
        removeSelect(){
            let previews = document.querySelectorAll('.tasks-preview')
            for(let preview of previews){
                preview.classList.remove('selected-preview')
            }
        },
        removeTask(idx){
            this.tasks.splice(idx, 1)
            this.statusCounterHandler()
        }
        
    },
    mounted(){
        this.statusCounterHandler()
    }
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    font-size: 20px;
}
.container{
    margin: 0 auto;
    max-width: 1300px;
}
.tasks-outer{
    overflow: hidden;
}
:root{
    --tasks-fz: 20px;
    --tasks-area-fz-header: 64px;
    --tasks-area-discription: 36px;
    --tasks-area-button-fz: 24px;
}
#sort{
    border: 0;
    background: none;
    margin-left: 26px;
    margin-right: 185px;
    font-size: var(--tasks-fz);
    font-weight: 400;
}
#sort:focus{
    outline: 0;
}
.tasks-wrapper{
    margin-top: 100px;
    height: 80vh;
    background-color: #3E3D3D;
    border-radius: 9px;
    overflow: hidden;
}
.tasks-header { 
    display: flex;
    position: relative;
    align-items: center;
    height: 32px;
    margin: 16px;
    margin-bottom: 0;
    padding: 4px;
    background-color: #E9E9E9;
    border-radius: 9px;
}
.cross-button-area{
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
    justify-self: flex-end;
    margin-left: auto;
}
.tasks-counter { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 9px;
    border: 1px solid black;
    padding: 1px 14px 0;
    flex: 1;
    max-width: 277px;   
}
.counter-with-circle{
    display: flex;
    align-items: center;
    min-width: 35px;
}
.counter { 
    font-size: var(--tasks-fz);
    font-weight: 400;
}
.tasks-body { 
    display: flex;
    height: calc(100% - 48px);
}
.tasks-list { 
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 16px;
    margin-right: 0;
    border-radius: 9px;
    background-color: #D8D8D8;
    min-width: 343px;
}
.tasks-preview { 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    padding: 16px;
    border-radius: 9px;
    border: 3px solid #959595;
    margin-bottom: 16px;
    background-color: #E9E9E9;
    max-width: 295px;
    cursor: pointer;
    transition: all .1s;
}
.selected-preview{
    background-color: white;
    border: 3px solid #474747;
}
.tasks-preview-header-with-circle { 
    display: flex;
    align-items: center;
}
.status-circle { 
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
}
.tasks-preview.status-circle{
    cursor: pointer;
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
.tasks-preview-header { 
    font-size: var(--tasks-fz);
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    max-width: 90%;
}
.tasks-preview-description { 
    margin-left: 24px;
    color: #656565;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: var(--tasks-fz);
    font-weight: 400;
    cursor: pointer;
}
.tasks-preview:hover{
    background-color: white;
}
.tasks-area { 
    margin: 16px;
    background-color: #E9E9E9;
    padding: 80px 35px;
    flex: 1;
    border-radius: 9px;
    overflow-y: scroll;
}
.tasks-area::-webkit-scrollbar{
    width: 10px;
}
.tasks-area::-webkit-scrollbar-track{
    background: #E9E9E9;
    padding: 3px;
    border-radius: 9px;
}
.tasks-area::-webkit-scrollbar-thumb{
    background-color: #aeaeae;
    border: 3px solid #E9E9E9   ;
    border-radius: 9px;
}
</style>