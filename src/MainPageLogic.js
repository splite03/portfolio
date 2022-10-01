import NavBar from '@/components/NavBar.vue';
import desktop from '@/components/desktop.vue'

export default {
    components:{NavBar, desktop},
    data() {
      return{
        aboutMeBlockChanged: false,
        content: '',
        contentHello:['П','Пр','При','Прив','Приве','Привет','Привет!','Привет','Приве','Прив','При','Пр','П','','H','He','Hel','Hell','Hello','Hello!','Hello','Hell','Hel','He','H',''],
        incrementHello: [2000, 150,150,150,150,150,150,2000,150,150,150,150,150,150,1000,150,150,150,150,150,2000,150,150,150,150,150],
        timeHello: 0,
        contentBlock1:['a','ab','abo','abou','about','about-','about-m','about-me','< about-me ></ about-me >','< about-me >','< about-me c>','< about-me cl>','< about-me cla>','< about-me clas>','< about-me class>','< about-me class=>','< about-me class="">','< about-me class="J">','< about-me class="Ju">','< about-me class="Jun">','< about-me class="Juni">','< about-me class="Junio">','< about-me class="Junior">'],
        incrementBlock1:[3000,150,150,150,150,150,500,150,1000,1000,15000,150,150,150,150,150,1000,150,150,150,150,150,150],
        timeBlock1: 0,
        contentBlock2:['d','di','div','div*','div*5','div*5{}','div*5{l}','div*5{lo}','div*5{lor}','div*5{lore}','div*5{lorem}','div*5{lorem2}','div*5{lorem20}'],
        // contentBlock2:[`d<span class="stick"></span>`,`di<span class="stick"></span>`,`div<span class="stick"></span>`,`div*<span class="stick"></span>`,`div*5<span class="stick"></span>`,`div*5{}<span class="stick"></span>`,`div*5{l}<span class="stick"></span>`,`div*5{lo}<span class="stick"></span>`,`div*5{lor}<span class="stick"></span>`,`div*5{lore}<span class="stick"></span>`,`div*5{lorem}<span class="stick"></span>`,`div*5{lorem2}<span class="stick"></span>`,`div*5{lorem2}<span class="stick"></span>`],
        incrementBlock2:[7550, 150, 150,500,150,500,150,150,500,150,150,500,150],
        timeBlock2: 0,
        contentBlock3:['</ about-me >'],
        incrementBlock3: [6400],
        timeBlock3: 0,
        blocks:['','','','','','',''],
        welcomeText:['< Меня зовут Данил! Я начинающий Front-end разработчик. />', '< Здесь ты можешь ознакомиться с моими актуальными проектами и узнать меня немного получше. />']
      }
    },
    methods:{
        scrollToAbout() {
            const path = document.querySelector('.about-me-block').offsetTop - 100
            window.scrollTo({
                top: path,
                behavior: 'smooth'
            })
        },

      // Хедер

      stickHider() {
        return setInterval(() => {
          const sticks = document.querySelectorAll('.stick')
          for (let a = 0; sticks.length> a; a++){
            if (sticks[a].className === 'stick hiden'){
              sticks[a].className = 'stick show'
            }else {
              sticks[a].className = 'stick hiden'
            }
          }    
        }, 610)
      },
      contentHandler() {
        for (let a = 0; a < this.contentHello.length; a++ ){
            this.changingContent(this.contentHello[a], this.timeHello += this.incrementHello[a])
          }
        this.timeHello = 0
        setInterval(() => {
          for (let a = 0; a < this.contentHello.length; a++ ){
            this.changingContent(this.contentHello[a], this.timeHello += this.incrementHello[a])
          }
          this.timeHello = 0
        }, 10450)},
        changingContent(newContent, n) {
        setTimeout(() =>{
          this.content = newContent
        }, n)},

        stickMoving() {
          setTimeout(() => {
            document.querySelectorAll('.text-about')[0].innerHTML = `&lt; about-me &gt;<span id="second-stick" class="stick hiden"></span>&lt;/ about-me &gt;`
          }, 5651)
          setTimeout(() => {
            document.querySelectorAll('.text-about')[0].innerHTML = `&lt; about-me &gt;`
            document.querySelectorAll('.text-about')[1].innerHTML = `<span id="second-stick" class="stick hiden"></span>`

          }, 6201)
        },

        // Все блоки

      changingBlockContentAll(block1, block2, block3, block4, block5, block6, block7, n) {
        setTimeout(() => {
          this.blocks[0] = block1
          this.blocks[1] = block2
          this.blocks[2] = block3
          this.blocks[3] = block4
          this.blocks[4] = block5
          this.blocks[5] = block6
          this.blocks[6] = block7
          
          const marginText = document.querySelectorAll('.text-about')

          for (let a = 1; a < marginText.length - 1; a++) {
            marginText[a].classList.add('mrgn-left')
          }
        }, n)
      },
      blockContentHandlerAll() {
        this.changingBlockContentAll('< about-me >', '< Занимаюсь разработкой 1 месяц. За это время успел изучить основы работы с HTML, CSS, SCSS, JavaScript, VueJS, Git />', '< Сделал несколько проектов, реализующих мои персональные запросы по организации дневных задач />', '< Тратил на учебный процесс в среднем по 10 часов в день />', '< Познал Познаю тайные техники “чтобы заработало” />','< Посмотрел 200 серий Наруто />', '< about-me />', 11550)
      },
      
      // Блоки по одному
      
      blockContentHandler(block,increment,start, idx) {
        for (let a = 0; a < block.length; a++ ){
          this.changingBlocksContent(idx,block[a], start += increment[a])
        }
      },
      changingBlocksContent(idx,content, n) {
        setTimeout(() => {
          this.blocks[idx] = content
        }, n)
      },
      block2ContentHandler(block,increment,start) {
        for (let a = 0; a < block.length; a++ ){
          this.changingBlock2Content(block[a], start += increment[a])
        }
      },
      changingBlock2Content(content, n) {
        setTimeout(() => {
          document.querySelectorAll('.text-about')[1].innerHTML = content
        }, n)
      },

      // Манипуляции с текстом после завершения 'билдинга'

      selectingAndLining() {
        setTimeout(() => {
            document.querySelectorAll('.text-about')[5].innerHTML = `&lt;  Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span> /&gt;`
          }, 12500)
        setTimeout(() => {
            document.querySelectorAll('.text-about')[5].innerHTML = `&lt;  <span id="second-stick" class="stick show"></span><span class="back">Посмотрел 200 серий Наруто</span> /&gt;`
          }, 13000)
          setTimeout(() => {
            document.querySelectorAll('.text-about')[5].innerHTML = `&lt;  <span class="back">Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span>/&gt;`
          }, 13500)
          setTimeout(() => {
            document.querySelectorAll('.text-about')[5].innerHTML = `&lt;  <span class="line">Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span>/&gt;`
          }, 14500)
      },
      onScrollHandler() {
        this.blockContentHandler(this.contentBlock1,this.incrementBlock1,this.timeBlock1, 0)
        this.block2ContentHandler(this.contentBlock2,this.incrementBlock2,this.timeBlock2)
        this.blockContentHandler(this.contentBlock3,this.incrementBlock3,this.timeBlock3, 2)
        this.blockContentHandlerAll()
        this.selectingAndLining()
        this.stickMoving()
      }

    },
    mounted() {
    this.contentHandler()
    this.stickHider()
    window.addEventListener('scroll', () => {
        let scroll = window.scrollY
        const blockAboutMe = document.querySelector('.about-me-block')
        // СТРЕЛКА ВНИЗ НА ГЛАВНОЙ
        if (scroll < 100){
            document.querySelector('.arrow-button').classList.remove('opacity')
        }else{
            document.querySelector('.arrow-button').classList.add('opacity')
        }
        if (scroll > blockAboutMe.offsetTop - 400 && !this.aboutMeBlockChanged) {
            this.onScrollHandler()
            this.aboutMeBlockChanged = true
        }
    })
    }
  }