import smallShip from '@/components/small-ship.vue';

export default {
  components:{smallShip},
    data(){
      return{
        grabed: false,
        x: 0,
        y: 0,
        animated: false,
        // НИЖЕ ФЛАГИ ДЛЯ SCALE ONCLICK
        leftPinkBord: false,
        bigOrangeBord: false,
        darkGreenRightBord: false,
        darkGrinBordOverPrawn: false,
        innPinkBord: false,
        lowerBlueBord: false,
        lowerPinkBord: false,
        prawnBord: false,
        smallYellowBordLeft: false,
        notes:['Welcome! Here is my Notes', 'Use SHIFT + DEL to delete line'],
        inputHandler: '',
        lastIdx: 0,
        notesOpened: false,
        playing: false,
        soundsOff: false,
        headLooking: false,
        notesLoading: true,
        notLoaded: true,
        loadingHeader: 'Loading...'
      }
    },
    methods:{
      scaleFalsityToggle(bord){
        if (bord === 'left-pink-bord')  this.leftPinkBord = !this.leftPinkBord
        if (bord === 'big-orange-bord') this.bigOrangeBord = !this.bigOrangeBord
        if (bord === 'dark-green-right-bord') this.darkGreenRightBord = !this.darkGreenRightBord
        if (bord === 'dark-grin-bord-over-prawn') this.darkGrinBordOverPrawn = !this.darkGrinBordOverPrawn
        if (bord === 'inn-pink-bord') this.innPinkBord = !this.innPinkBord
        if (bord === 'lower-blue-bord') this.lowerBlueBord = !this.lowerBlueBord
        if (bord === 'lower-pink-bord') this.lowerPinkBord = !this.lowerPinkBord
        if (bord === 'prawn-bord') this.prawnBord = !this.prawnBord
        if (bord === 'small-yellow-bord-left') this.smallYellowBordLeft = !this.smallYellowBordLeft
      },
      scaleFalsity(bord){
        if (bord === 'left-pink-bord') return this.leftPinkBord 
        if (bord === 'big-orange-bord') return this.bigOrangeBord 
        if (bord === 'dark-green-right-bord') return this.darkGreenRightBord 
        if (bord === 'dark-grin-bord-over-prawn') return this.darkGrinBordOverPrawn
        if (bord === 'inn-pink-bord') return this.innPinkBord 
        if (bord === 'lower-blue-bord') return this.lowerBlueBord
        if (bord === 'lower-pink-bord') return this.lowerPinkBord
        if (bord === 'prawn-bord') return this.prawnBord
        if (bord === 'small-yellow-bord-left') return this.smallYellowBordLeft
      },
      scale(e){
        let bord = e.target
        let light = document.querySelector(`.light-${bord.classList[0]}`)
        let root = document.documentElement.style
        let opacitys = window.getComputedStyle(light).opacity
        
        console.log(bord.classList[0]);
        // Проверка на каждый борд, чтобы можно было щелкать несколько штук
        if(this.scaleFalsity(bord.classList[0])) return

        // Подготовка к анимации
        this.scaleFalsityToggle(bord.classList[0])
        bord.style.animation = 'none'
        root.setProperty('--url-image-animation', `var(--${bord.classList[0]})`)
        light.style.animation = 'none'
        light.style.opacity = `${opacitys}`
    
        // Анимация клика и возврат к light-in-out. Первый тайм-аут нужен, чтобы произошел рендер
        setTimeout(() => {
          bord.style.animation = 'click-bord 1s'
          root.setProperty('--url-image-animation-off', `var(--${bord.classList[0]}-off)`)
          root.setProperty('--opacity-light-in-out', `${opacitys}`)
          light.style.animation = 'click-bord-light 1s'
        }, 1)
        setTimeout(() => {
            light.style.animation = 'light-in-out 6s .4s infinite steps(var(--steps))'
            light.style.opacity = `1`
            this.scaleFalsityToggle(bord.classList[0])
        },1001)
      },
      // ОБНОВЛЕНИЕ GIF ПРИ КАЖДОЙ ПЕРЕЗАГРУЗКЕ, ЧТОБЫ СИНХРОНИЗИРОВАТЬ С BOX-SHADOW
      gifRestart(){
        const hotdog = document.querySelector('.hot-dog')
        const empty = document.querySelector('.empty')
        let hotdogSrc = hotdog.getAttribute('src')
        let emptySrc = empty.getAttribute('src')

        hotdog.setAttribute('src', emptySrc)
        hotdog.style.opacity = '0'
        setTimeout(() => {
          hotdog.setAttribute('src', hotdogSrc)
          hotdog.style.opacity = '1'
        }, 30)
      },
      // ЛОЧИМ СКРОЛЛ ИБО ТАК ПРОЩЕ ВСЕГО ДОДЖИТЬ МОМЕНТЫ С РЕСАЙЗОМ
      lockScroll(){
        window.addEventListener('keydown', (event) => {
          if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
          }
        })
        window.addEventListener('mousewheel', (event) => {
          if (event.ctrlKey == true) {
            event.preventDefault();
          }
        },{passive: false})
      },
      isTextEmpty(idx){
        let lines = document.querySelectorAll('.upper-lines')

        if(!this.notesOpened) return
        if(this.notes.length <= 14){
          this.rotateBtn()
        }
        try{
          if (lines[idx].value.trim() === ''){
            this.notes.splice(idx, 1)
            this.playSound('shh')
            return
          }
          this.submitLine(idx)
        }catch {
          console.log('Out of lines');
        }
      },
      submitLine(idx){
        try{
          let line = document.querySelectorAll('.upper-lines')[idx]
          this.notes[idx] = line.value
        }catch{
          console.log('error submit');
        }
      },
      rotateBtn(){
        try{
          const btnAdd = document.querySelector('.btn-add')
          btnAdd.classList.remove('btn-add-rotate')
        }catch{
          console.log('Notes closed');
        }
      },
      checkBoxToggle(idx){
        const upper = document.querySelectorAll('.upper-box')
        const lower = document.querySelectorAll('.lower-box')

        if(!upper[idx].classList[2]){
          upper[idx].classList.add('checked-box')
          lower[idx].classList.add('checked-box')
          return
        }
        upper[idx].classList.remove('checked-box')
      },
      addNote(){
        let lastLine = document.querySelectorAll('.upper-lines')[this.notes.length - 1]
        const btnAdd = document.querySelector('.btn-add')

        btnAdd.classList.add('btn-add-rotate')
        try{
          if(lastLine.value !== '' && this.notes.length < 14){
            this.notes.push('')
            setTimeout(() => {
              document.querySelectorAll('.upper-lines')[this.notes.length - 1].focus()
            }, 50)
            return
          }
        }catch{
          this.notes.length === 0 ? this.notes.push('') : console.log('Some error with adding note');
        }
      },
      togglePower(event, action){
        const tables = document.querySelectorAll('.table')
        const button = document.querySelector('.btn-power-wrapper')
        const blueButton = document.querySelector('.btn-power-blue')
        const soundButton = document.querySelector('.sounds-off')

        if (action === 'on'){
          button.style.opacity = '0'
          setTimeout(() => {
            this.notesOpened = true
          }, 300)
          if (this.soundsOff){
            setTimeout(() => {
              document.querySelector('.sounds-off').classList.add('sounds-disabled')
              console.log(document.querySelector('.sounds-off'));
            },400)
          }
          return
        }
        if(action === 'off'){
          blueButton.classList.add('btn-power-blue-clicked')
          setTimeout(() => {
            for (let table of tables){
              table.style.animation = 'scaleX-full .5s .3s forwards 1 steps(15), scale-full .6s .8s forwards 1 steps(15),scale-null .6s forwards 1 steps(15),scaleX-null .5s .6s forwards 1 steps(15)'
            }
          }, 300)
          setTimeout(() => {
            button.style.opacity = '1'
            this.notesOpened = false
          }, 1500)
        }
      },
      play(event){
        if(!this.playing){
          event.target.classList.add('playing')
          document.querySelector('.music').play()
          this.playing = true
          return
        }
        event.target.classList.remove('playing')
        document.querySelector('.music').pause()
        this.playing = false
      },
      playSound(sound){
        if(this.soundsOff) return
        document.querySelector(`.${sound}`).play()
      },
      disableSounds(event){
        this.soundsOff ? event.target.classList.remove('sounds-disabled') : event.target.classList.add('sounds-disabled') 
        this.soundsOff = !this.soundsOff
      },
      headMove(event){
        if (this.headLooking) return
        event.target.lastChild.style.left = '10px'
        this.headLooking = true
        setTimeout(() => {
          event.target.lastChild.style.left = '8px'
          this.headLooking = false
        }, 2000)
      }
    },
    mounted(){
      const musicPlayer = document.querySelector('.music')

      setInterval(() => {
        if (this.loadingHeader.split('Loading')[1].length === 3) return this.loadingHeader = 'Loading'
        if (this.loadingHeader.split('Loading')[1].length === 0) return this.loadingHeader = 'Loading.'
        if (this.loadingHeader.split('Loading')[1].length === 1) return this.loadingHeader = 'Loading..'
        if (this.loadingHeader.split('Loading')[1].length === 2) return this.loadingHeader = 'Loading...'
        console.log('op');
      }, 700)
      setTimeout(() => {
        this.notesLoading = false
      }, 7500)
      setTimeout(() => {
        this.notLoaded = false
      }, 8500)
      window.addEventListener('mouseup',() => this.grabed = false)
      this.gifRestart()
      this.lockScroll()
    }
  }