<template lang='pug'>
v-app
  #horizontal
    section.fullpage
      Home
    section.fullpage.white
      About_h(@vcard_hover='onScrollUnit = $event')
    section.fullpage.black
      Skills
    section.fullpage.white
      Contact
    .sections-menu
      span(
      class="menu-point"
      v-bind:class="{active: activeSection == index}"
      v-on:click="scrollToSection(index)"
      v-for="(offset, index) in offsets"
      v-bind:key="index")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      inMove: false as boolean,
      activeSection: 0 as number,
      offsets: [] as Array<number>,
      touchStartY: 0 as number,
      onScrollUnit: false as boolean,
    }
  },
  methods: {
    
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      for(let i = 0; i < length; i++) {
        let sectionOffset: number = sections[i].offsetLeft;
        this.offsets.push(sectionOffset);
      }
      
      console.log(this.offsets)
    },
    handleMouseWheel: function(e: any) {
      if (e.wheelDelta < -30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },
    handleKeyUpDown: function(e : any){
      if (e.keyCode == '40' && !this.inMove) {
        this.moveUp();
      } else if (e.keyCode == '38' && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e : any) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      console.log('DOM')
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) { 
        // this.activeSection = this.offsets.length - 1; 
        this.activeSection = 0;
      }
        
      this.scrollToSection(this.activeSection, true);
      //console.log('move down ' + this.activeSection);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) {
        // this.activeSection = 0;
        this.activeSection = this.offsets.length - 1;
      }
        
      this.scrollToSection(this.activeSection, true);
      //console.log('move up ' + this.activeSection);
    },
    scrollToSection(id: number, force = false) {
      if(this.inMove && !force) return false;
      this.activeSection = id;
      this.inMove = true;
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth', inline: "end"});
      setTimeout(() => {
        this.inMove = false;
      }, 600);
      
    },
    touchStart(e : any) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e : any) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      console.log('Touch')
      this.touchStartY = 0;
      return false;
    },
    notScroll() {
      this.inMove = true;
    }
    
  },
  mounted() {
    
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM, { passive: false });  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
    //window.addEventListener('keydown', this.handleKeyUpDown, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel);  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
    //window.removeEventListener('keydown', this.handleKeyUpDown);
  }
})
</script>

<style scoped lang='scss'>
h2 {
  position: fixed;
}

#horizontal {
  display: flex;
  overflow-x: scroll;
  overflow-y: auto;
	//white-space: nowrap;
}

.fullpage {
  height: 100%;
  width: 100vmin;
  min-width: 100vmin;
  display: flex;
  flex-wrap: nowrap;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
  flex-direction: row;
  overflow: hidden;
  background-color: red;
}

/*
h1 {
  font-size: 6em;
  margin: 0;
  text-align:vertical-delimiters center;
  padding: 0 1rem;
}
*/

p {
  font-size: 1em;
}

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #FFF;
  margin-left: 5px;
}

.red {
  background-color: #ab4545;
}

section.black {
  background-color: #000;
}
.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

.white {
  background-color: #fff
}

/*
h1.black {
  color: #fff;
}
*/

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

/*
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
*/
</style>