<template>
    <div class="loading-notes" v-if="notLoaded">
      <div class="loading-notes-left-door"></div>
      <div class="loading-notes-right-door"></div>
      <div class="loading-wrapper">
        <div class="loading-header">{{loadingHeader}}</div>
        <div class="loading-bar">
          <div class="loading-bar-progress"></div>
        </div>
      </div>
    </div>
    <div class="background" v-show="!notesLoading">
      <div class="img" @mousedown="isTextEmpty(lastIdx)">
  
        <!-- ТРИ УРОВНЯ ГЛУБИНЫ - СЛОИ ГОРОДА -->
  
        <div class="depth-levels third-level-depth"></div>
        <div class="depth-levels second-level-depth"></div>
        <div class="depth-levels first-level-depth"></div>
  
        <!-- БОРДЫ -->
  
        <div class="light-left-pink-bord light left-pink-bord-wrapper"></div>
        <div class="left-pink-bord-wrapper bord-wrapper">
          <div class="left-pink-bord bord" @click="scale($event)"></div>
        </div>
  
        <div class="light-behind-orange-yellow-bord light behind-orange-yellow-bord-wrapper"></div>
        <div class="behind-orange-yellow-bord-wrapper bord-wrapper">
          <div class="behind-orange-yellow-bord bord"></div>
        </div>
  
        <div class="light-big-orange-bord light big-orange-bord-wrapper"></div>
        <div class="big-orange-bord-wrapper bord-wrapper">
          <div class="big-orange-bord bord" @click="scale($event)"></div>
        </div>
  
        <div class="light-blue-right-bord light blue-right-bord-wrapper"></div>
        <div class="blue-right-bord-wrapper bord-wrapper">
          <div class="blue-right-bord bord"></div>
        </div>
  
        <div class="light-dark-green-right-bord light dark-green-right-bord-wrapper"></div>
        <div class="dark-green-right-bord-wrapper bord-wrapper">
          <div class="dark-green-right-bord bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-dark-grin-bord-over-prawn light dark-grin-bord-over-prawn-wrapper"></div>
        <div class="dark-grin-bord-over-prawn-wrapper bord-wrapper">
          <div class="dark-grin-bord-over-prawn bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-inn-pink-bord light inn-pink-bord-wrapper"></div>
        <div class="inn-pink-bord-wrapper bord-wrapper">
          <div class="inn-pink-bord bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-lower-blue-bord light lower-blue-bord-wrapper"></div>
        <div class="lower-blue-bord-wrapper bord-wrapper">
          <div class="lower-blue-bord bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-lower-pink-bord light lower-pink-bord-wrapper"></div>
        <div class="lower-pink-bord-wrapper bord-wrapper">
          <div class="lower-pink-bord bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-prawn-bord light prawn-bord-wrapper"></div>
        <div class="prawn-bord-wrapper bord-wrapper">
          <div class="prawn-bord bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-small-blue-bord-left light small-blue-bord-left-wrapper"></div>
        <div class="small-blue-bord-left-wrapper bord-wrapper">
          <div class="small-blue-bord-left bord"></div>
        </div>
        
        <div class="light-small-bottom-right-blue-bord light small-bottom-right-blue-bord-wrapper"></div>
        <div class="small-bottom-right-blue-bord-wrapper bord-wrapper">
          <div class="small-bottom-right-blue-bord bord"></div>
        </div>
        
        <div class="light-small-yellow-bord-left light small-yellow-bord-left-wrapper"></div>
        <div class="small-yellow-bord-left-wrapper bord-wrapper">
          <div class="small-yellow-bord-left bord" @click="scale($event)"></div>
        </div>
        
        <div class="light-whs-yellow-bord light whs-yellow-bord-wrapper"></div>
        <div class="whs-yellow-bord-wrapper bord-wrapper">
          <div class="whs-yellow-bord bord" ></div>
        </div>
  
        <!-- МАШИНЫ-КОРАБЛИ-ЛЕТАЮЩИЕ ВСЯКИЕ -->
  
        <div class="dirigible-wrapper">
          <div class="dirigible ship"></div>
          <div class="dirigible-light light-one"></div>
          <div class="dirigible-light light-two"></div>
          <div class="dirigible-light light-tree"></div>
          <div class="dirigible-light light-four"></div>
        </div>
  
        <div class="between-bildings-ship-wrapper ship-wrapper">
          <div class="between-bildings-ship ship"></div>
          <div class="between-bildings-ship-light light-ship"></div>
        </div>
  
        <div class="bird-ship-wrapper ship-wrapper">
          <div class="bird-ship ship"></div>
          <div class="bird-ship-light light-ship"></div>
        </div>
  
        <div class="cool-ship-wrapper ship-wrapper">
          <div class="cool-ship ship"></div>
          <div class="cool-ship-light light-ship"></div>
        </div>
  
        <div class="fish-ship-wrapper ship-wrapper">
          <div class="fish-ship ship"></div>
          <div class="fish-ship-light light-ship"></div>
        </div>
  
        <div class="fish-small-ship-wrapper ship-wrapper">
          <div class="fish-small-ship ship"></div>
          <div class="fish-small-ship-light light-ship"></div>
        </div>
  
        <div class="fish-small-ship-wrapper ship-wrapper" style="right: 200px; top: 300px; animation-delay: .3s;">
          <div class="fish-small-ship ship"></div>
          <div class="fish-small-ship-light light-ship"></div>
        </div>
  
        <div class="gun-ship-wrapper ship-wrapper">
          <div class="gun-ship ship"></div>
          <div class="gun-ship-light light-ship"></div>
        </div>
  
        <div class="hot-dog-ship-wrapper ship-wrapper">
          <img src="@/assets/animated-parts/ships/hot-dog-ship-spins.gif" class="hot-dog ship" alt="">
          <img src="@/assets/animated-parts/ships/hot-dog-ship-spins-empty.png" style="position: absolute ; display: none;" class="empty" alt="">
          <div class="hot-dog-light light-ship"></div>
        </div>
  
        <div class="pink-ship-wrapper ship-wrapper">
          <div class="pink-ship ship"></div>
          <div class="pink-ship-light light-ship"></div>
        </div>
  
        <div class="pistol-ship-wrapper ship-wrapper">
          <div class="pistol-ship ship"></div>
          <div class="pistol-ship-light light-ship"></div>
        </div>
  
        <div class="ship2-wrapper ship-wrapper">
          <div class="ship2 ship"></div>
          <div class="ship2-light light-ship"></div>
        </div>
  
        <div class="ship3-wrapper ship3-1 ship-wrapper">
          <div class="ship3 ship"></div>
          <div class="ship3-light light-ship"></div>
        </div>
  
        <div class="ship3-wrapper ship3-2 ship-wrapper">
          <div class="ship3 ship"></div>
          <div class="ship3-light light-ship"></div>
        </div>
  
        <div class="ship-one-wrapper ship-wrapper">
          <div class="ship-one ship"></div>
          <div class="ship-one-light light-ship"></div>
        </div>
  
        <div class="small-bird-flying-ship-wrapper ship-wrapper">
          <div class="small-bird-flying-ship ship"></div>
        </div>
  
        <div class="small-bird-flying-ship-two-wrapper ship-wrapper">
          <div class="small-bird-flying-ship-two ship"></div>
        </div>
  
        <small-ship style="top: 300px; left: 250px"></small-ship>
        <small-ship style="top:348px;left:176px;animation-delay: .5s;"></small-ship>
  
        
        <!-- ПАЧКА ВОЗЛЕ ЦЕНТРАЛЬНОГО ПРОЖЕКТОРА -->
        
        <small-ship style="top:366px;left:635px;animation-delay: 0;"></small-ship>
        <small-ship style="top:391px;left:677px;animation-delay: .2s;"></small-ship>
        <small-ship style="top:382px;left:729px;animation-delay: .5s;"></small-ship>
        <small-ship style="top:361px;left:774px;animation-delay: .3s;"></small-ship>
        <small-ship style="top:336px;left:665px;animation-delay: .5s;"></small-ship>
        <small-ship style="top:344px;left:720px;animation-delay: .8s;"></small-ship>
        
        <!-- ПАЧКА ПОД САМОЙ ВЫСОКОЙ БАШНЕЙ -->
  
        <small-ship style="top: 400px; left: 977px; width: 9px; height: 6px; animation-delay: .2s;"></small-ship>
        <small-ship style="top: 420px; left: 1030px; width: 9px; height: 6px; animation-delay: .4s"></small-ship>
        <small-ship style="top: 379px; left: 1011px; width: 9px; height: 6px; animation-delay: .1s"></small-ship>
        <small-ship style="top: 393px; left: 1037px; width: 9px; height: 6px; animation-delay: ..5s"></small-ship>
        <small-ship style="top: 407px; left: 1060px; width: 9px; height: 6px; animation-delay: .3s"></small-ship>
        
        <!-- ПАЧКА ВОЗЛЕ БОЛЬШОГО ЖЕЛТОГО БОРДА -->
        
        <small-ship style="top:249px;left:1460px;animation-delay:0s;z-index: 11;"></small-ship>
        <small-ship style="top:262px;left:1517px;animation-delay:.2s;z-index: 11"></small-ship>
        <small-ship style="top:275px;left:1570px;animation-delay:.5s;z-index: 11"></small-ship>
        <small-ship style="top:231px;left:1492px;animation-delay:.3s;z-index: 11"></small-ship>
        
        <!-- ПАЧКА САМАЯ ПРАВАЯ -->
        
        <small-ship style="top:426px;animation-delay:.2s;right:40px"></small-ship>
        <small-ship style="top:428px;animation-delay:.5s;right:14px"></small-ship>
        <small-ship style="top:451px;animation-delay:.3s;right:7px"></small-ship>
        
        <!-- ПРОЖЕКТОРА -->
        
        <div class="light-stick">
          <img src="@/assets/animated-parts/other/light-stick.png" alt="">
        </div>
        
        <div class="long-light-stick first-light-stick">
          <img src="@/assets/animated-parts/other/long-light-stick.png" alt="">
        </div>
        <div class="long-light-stick second-light-stick">
          <img src="@/assets/animated-parts/other/long-light-stick.png" alt="">
        </div>
        
        <!-- ОСТАЛЬНОЕ -->
        
        <div class="elevator-wrapper">
          <div class="elevator-path"></div>
          <div class="elevator"></div>
        </div>
        <div class="head-zone-click" @click="headMove($event)">
          <img class="people-head" src="@/assets/animated-parts/other/head.png">
        </div>
        <div class="vape"></div>
        <div class="smoke-guy"></div>
        <img src="@/assets/animated-parts/other/first-rope.gif" class="rope short-rope left-side-short-rope" alt="">
        <img src="@/assets/animated-parts/other/first-rope.gif" class="rope short-rope left-side-short-rope-second" alt="">
        <!-- <img src="@/assets/animated-parts/other/second-rope.gif" class="rope long-rope left-side-long-rope" alt=""> -->
        
      </div>
  
      <!-- БОРД С ЗАМЕТКАМИ -->
  
      <div class="container">
  
        <div class="table" v-if="notesOpened">
          <div class="light-top" style="margin-bottom: 5px">
            <div class="light-top" style="box-shadow: 0 0 4px 2px white">
              <div class="light-top" style="box-shadow: 0 0 1px 1px white"></div>
            </div>
          </div>
          <div class="table-body">
            <div class="table-text-wrapper">
              <div class="notes-header-wrapper">
                <p class="text-notes notes-header" style="width: 80%">#Notes {{notes.length}}/14</p>
                <div class="table-buttons-wrapper">
                  <div class="sounds-off" @click="disableSounds($event)"></div>
                  <div class="btn-power-blue" @click="togglePower($event, 'off'), playSound('pew')"></div>
                </div>
              </div>
              <hr>
  
              <div class="table-input-wrapper upper-wrapper" v-for="(note, index) in notes" :key="note">
                <span class="btn-check-box upper-box" @click="checkBoxToggle(index), playSound('blip')"></span>
                <input :value="note" :class="`text-notes input-text upper-lines`" 
                @click="playSound('tap')"
                @keypress.enter.exact="$event.target.blur()"
                @keypress="rotateBtn()"
                @blur="isTextEmpty(index)"
                @keydown.shift.delete="$event.target.value = '', $event.target.blur()">
              </div>
              <div class="btn-add-outer">
                <div class="btn-add" @click="addNote(), playSound('tap')">
                  <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;"></div>
                  <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;"></div>
                  <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                  <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="light-bot">
            <div class="light-bot" style="box-shadow: 0 0 4px 2px white">
              <div class="light-bot" style="box-shadow: 0 0 1px 1px white"></div>
            </div>
          </div>
        </div>
  
        <div class="table table-cliped" v-if="notesOpened">
          <div class="light-top" style="margin-bottom: 5px">
            <div class="light-top" style="box-shadow: 0 0 4px 2px white">
              <div class="light-top" style="box-shadow: 0 0 1px 1px white"></div>
            </div>
          </div>
          <div class="table-body">
            <div class="table-text-wrapper">
              <div class="notes-header-wrapper" style="padding-left: 30px">
                <p class="text-notes notes-header">#Notes</p>
                <div class="table-buttons-wrapper">
                  <div class="sounds-off"></div>
                  <div class="btn-power-blue"></div>
                </div>
              </div>
              <div class="table-input-wrapper" v-for="(note) in notes" :key="note" style="padding-left: 30px">
                <span class="btn-check-box lower-box"></span>
                <p :class="`text-notes input-text`">{{note}}</p>
              </div>
              <div class="btn-add-outer" style="margin-left: 30px">
                <div class="btn-add" >
                  <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;"></div>
                  <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;"></div>
                  <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                  <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="light-bot">
            <div class="light-bot" style="box-shadow: 0 0 4px 2px white">
              <div class="light-bot" style="box-shadow: 0 0 1px 1px white"></div>
            </div>
          </div>
        </div>
        
        <div class="btn-power-wrapper">
          <div class="btn-power-click-zone" @click="togglePower($event, 'on'), playSound('pew')"></div>
          <div class="btn-power"></div>
        </div>
  
        <div class="back-to" @click="$router.push('/')">Back to portfolio</div>
        <div class="play" @click.prevent="play($event)"></div>
  
        <audio loop preload ="auto" class="music">
          <source src="@/audio/electronic-senses-yesterday.mp3">
        </audio>
        <audio preload ="auto" class="pew">
          <source src="@/audio/pew.mp3">
        </audio>
        <audio preload ="auto" class="tap">
          <source src="@/audio/tap.mp3">
        </audio>
        <audio preload ="auto" class="shh">
          <source src="@/audio/shh.mp3">
        </audio>
        <audio preload ="auto" class="blip">
          <source src="@/audio/blip.mp3">
        </audio>
  
      </div>
    </div>
  </template>
  
  <script>
  import logic from '@/NotesLogic.js'
  
  export default logic
  </script>
  
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pixel';
}
body{
    height: 100vh;
    width: 100vw;
}
</style>