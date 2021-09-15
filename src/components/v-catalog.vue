<template>
  <div class="v-catalog">
    <div class="title">People</div>
    <div class="filter">
      <div class="filters">
        <div class="v-select">
          <v-select
            :selectedEyeColor="selectedEyeColor"
            :options="options"
            @optionSelect="sortByOptions"
          />

          <div class="v-select-height">
            <div class="title-select"
              @click="areHeightVisible = !areHeightVisible"
            >
              <p>Height</p>
              <img src="../assets/icons/down.svg" alt="arrow">
            </div>
      
            <div class="options" ref="options"
              v-if="areHeightVisible"
            >
              <div class="input-slider">
                <input type="text" v-model="minHeight">
                <input type="text" v-model="maxHeight">
              </div>
              <div class="range-slider">
                <div class="number">
                  <p>{{minHeight}} cm</p>
                  <p>{{maxHeight}} cm</p>
                </div>
                <!-- <router-link :to="{ path: `/minHeight=${minHeight},maxHeight=${maxHeight}` }"> -->
                <div class="input">
                  <input 
                    type="range" 
                    min="96" 
                    max="202" 
                    step="1"
                    v-model="minHeight"
                    @change="setRangeSlider"
                  >
                </div>
                <!-- </router-link> -->
                <!-- <router-link :to="{ path: `/minHeight=${minHeight},maxHeight=${maxHeight}` }"> -->
                <div class="input">
                  <input 
                    type="range" 
                    min="96" 
                    max="202" 
                    step="1"
                    v-model="maxHeight"
                    @change="setRangeSlider"
                  >
                </div>
                <!-- </router-link> -->
              </div>
            </div>
          </div>


          <!-- <div class="v-select-age">
            <div class="title-select"
              @click="areAgeVisible = !areAgeVisible"
            >
              <p>Age</p>
              <img src="../assets/icons/down.svg" alt="arrow">
            </div>
      
            <div class="options" ref="options"
              v-if="areAgeVisible"
            >
              <div class="input-slider">
                <input type="text" v-model="minAge" @change="setRangeSlider">
                <input type="text" v-model="maxAge" @change="setRangeSlider">
              </div>
              <div class="range-slider">
                <div class="number">
                  <p>{{minAge}} BBY</p>
                  <p>{{maxAge}} BBY</p>
                </div>
                <div class="input">
                  <input 
                    type="range" 
                    min="12" 
                    max="112" 
                    step="1"
                    v-model="minAge"
                    @change="setRangeSliderAge"
                  >
                </div>
                <div class="input">
                  <input 
                    type="range" 
                    min="12" 
                    max="112" 
                    step="1"
                    v-model="maxAge"
                    @change="setRangeSliderAge"
                  >
                </div>
              </div>
            </div>
          </div> -->


          <div class="v-select-mass">
            <div class="title-select"
              @click="areMassVisible = !areMassVisible"
            >
              <p>Mass</p>
              <img src="../assets/icons/down.svg" alt="arrow">
            </div>
      
            <div class="options"
              v-if="areMassVisible"
            >
              <div class="input-slider">
                <input type="text" v-model="minMass" @change="setRangeSlider">
                <input type="text" v-model="maxMass" @change="setRangeSlider">
              </div>
              <div class="range-slider">
                <div class="number">
                  <p>{{minMass}} kg</p>
                  <p>{{maxMass}} kg</p>
                </div>
                <!-- <router-link :to="{ path: `/minHeight=${minHeight},maxHeight=${maxHeight}` }"> -->
                <div class="input">
                  <input 
                    type="range" 
                    min="32" 
                    max="136" 
                    step="1"
                    v-model="minMass"
                    @change="setRangeSlider"
                  >
                </div>
                <!-- </router-link> -->
                <!-- <router-link :to="{ path: `/minHeight=${minHeight},maxHeight=${maxHeight}` }"> -->
                <div class="input">
                  <input 
                    type="range" 
                    min="32" 
                    max="136" 
                    step="1"
                    v-model="maxMass"
                    @change="setRangeSlider"
                  >
                </div>
                <!-- </router-link> -->
              </div>
            </div>
          </div>

        </div>
      </div>
      <v-sort
        @optionSelect="sortByOptions"
      />
    </div>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="card in filteredCards"
        :key="card.name"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import vSelect from './v-select.vue'
import vSort from './v-sort.vue'

import {mapActions, mapGetters} from 'vuex'

export default {
  components: { vCatalogItem, vSelect, vSort },
  data() {
    return {
      options: [
        {
          name: "blue", value: 1
        },
        {
          name: "blue-gray", value: 2
        },
        {
          name: "brown", value: 3
        },
        {
          name: "red", value: 4
        },
        {
          name: "yellow", value: 5
        }
      ],
      areHeightVisible: false,
      areMassVisible: false,
      minHeight: 96,
      maxHeight: 202,
      minMass: 32,
      maxMass: 136,
      selectedEyeColor: '',
      sortedCards: [],
      selectedSort: '',
    }
  },
  computed: {
    ...mapGetters ([
      'CARDS'
    ]),
    filteredCards() {
      if (this.sortedCards.length) {
        return this.sortedCards
      }
      else {
        return []
      }
    }
  },
  methods: {
    ...mapActions ([
      'GET_CARDS_FROM_API'
    ]),
    setRangeSlider() {
      // if(this.minHeight > this.maxHeight) {
      //   let tmp = this.maxHeight
      //   this.maxHeight = this.minHeight
      //   this.minHeight = tmp
      // }
      // if(this.minMass > this.maxMass) {
      //   let tmp = this.maxMass
      //   this.maxMass = this.minMass
      //   this.minMass = tmp
      // }
      this.sortByOptions()
    },
    sortByOptions(option) {
      let vm = this
      this.sortedCards = [...this.CARDS]
      this.sortedCards = this.sortedCards.filter(function (item) {
        return item.height >= vm.minHeight && item.height <= vm.maxHeight && item.height >= 0
      })
      this.sortedCards = this.sortedCards.filter(function (item) {
        return item.mass >= vm.minMass && item.mass <= vm.maxMass && item.mass >= 0
      })
      if (option) {
        this.sortedCards = this.sortedCards.filter(function (item) {
          return item.eye_color === option.name
        })
      }
      if (option.name === "height") {
        vm.selectedSort === "height"
        this.sortedCards.sort((a,b) => a.height - b.height)
      }
    },
    hideSelect() {
      this.areHeightVisible = false
      this.areMassVisible = false
    },
  }, 
  mounted() {
    let vm = this
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs['options']) {
        console.log(123)
      }
    })
    this.GET_CARDS_FROM_API()
    .then((response) => {
      if (response.data.results) {
        this.sortByOptions()
      }
    })
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs['options']) {
        vm.hideSelect()
      }
    })
  },
}
</script>

<style lang="scss" scoped>
  .v-catalog {
    .title {
      margin: 0 0 24px;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 148%;
      color: #000000;
    }
    &__list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 17px;
    }
    .filter {
      display: flex;
      justify-content: space-between;
      .filters {
        display: flex;
      }
      .v-select {
        display: flex;
        margin-bottom: 48px;
      }
      .v-select-height, .v-select-mass {
        position: relative;
        margin-right: 40px;
        .title-select {
          display: flex;
          align-items: center;
          cursor: pointer;
          p {
            margin: 0;
          }
        }
        .options {
          height: 132px;
          display: flex;
          flex-direction: column;
          position: absolute;
          padding: 8px 20px;
          top: 37px;
          left: -90px;
          background: #FFFFFF;
          box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
          border-radius: 6px;
          z-index: 10;
          
          &::before {
            position: absolute;
            content: '';
            width: 8.49px;
            height: 8.49px;
            left: 0;
            right: 0;
            top: -4px;
            margin: 0 auto;
            background: #ffffff;
            transform: rotate(-45deg);
            z-index: 0;
          }

          .input-slider {
            display: flex;
            justify-content: space-between;
            input {
              width: 100px;
              height: 42px;
              padding-left: 12px;
              font-style: normal;
              font-weight: 100;
              font-size: 14px;
              line-height: 180%;
              color: #000000;
              opacity: 0.8;
              border: 1px solid rgba(0, 0, 0, 0.08);
              box-sizing: border-box;
              border-radius: 6px;
              margin-right: 9px;
              &:last-child {
                margin-right: 0;
              }
              &:focus { outline: none; }
            }
          }

          .range-slider {
            width: 200px;
            text-align: center;
            position: absolute;
            bottom: 26px;

            .number {
              display: flex;
              justify-content: space-between;
              p {
                font-style: normal;
                font-weight: 100;
                font-size: 14px;
                line-height: 180%;
                color: #000000;
                opacity: 0.8;
              }
            }
            input[type=range] {
              width: 100%;
              position: absolute;
              left: 0;
              bottom: 0;
              -webkit-appearance: none;
            }
            input[type=range]:focus {
              outline: none;
            }
            input[type=range]::-webkit-slider-runnable-track {
              width: 100%;
              height: 3px;
              cursor: pointer;
              background: #FF634A;
            }
            input[type=range]::-webkit-slider-thumb {
              width: 10px;
              height: 10px;
              position: relative;
              top: 2px;
              border-radius: 10px;
              margin-top: -6px;
              background: #FF634A;
              cursor: pointer;
              -webkit-appearance: none;
              z-index: 2;
            }
          }
        }
      }
    }
  }


  @media (max-width: 580px) {
    .v-select-height, .v-select-age {
      margin-right: 24px;
    }
  }
  
</style> 