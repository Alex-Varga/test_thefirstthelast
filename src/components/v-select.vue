<template>
  <div class="v-select-eyeColor">
    <div class="title-select"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      <p>Eye color</p>
      <img src="../assets/icons/down.svg" alt="arrow">
    </div>
  
    <div class="options" ref="options"
      v-if="areOptionsVisible"
    >
      <router-link :to="{ path: `/${option.name}/` }"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      areOptionsVisible: false
    }
  },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    selectedEyeColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('optionSelect', option)
      this.areOptionsVisible = false
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
  .v-select-eyeColor {
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
      width: 110px;
      display: flex;
      flex-direction: column;
      position: absolute;
      padding: 8px 0 8px;
      overflow: hidden;
      top: 37px;
      left: -17px;
      background: #FFFFFF;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      z-index: 10;

      &::before {
        position: absolute;
        content: '';
        width: 9.81px;
        height: 9.81px;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto;
        background: #ffffff;
        transform: matrix(0.71, -1.54, 0.33, 0.71, 0, 0);
        z-index: 0;
      }

      a {
        width: 100%;
        text-decoration: none;
        padding: 8px 26px 8px 20px;
        cursor: pointer;
        font-style: normal;
        font-weight: 100;
        font-size: 14px;
        line-height: 180%;
        color: #000000;
        z-index: 10;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          background: #F2EEEE;
        }
      }
    }
  }

  @media (max-width: 580px) {
    .v-select-eyeColor {
      margin-right: 24px;
    }
  }
</style>