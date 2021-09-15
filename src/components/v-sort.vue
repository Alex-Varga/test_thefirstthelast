<template>
  <div class="v-select-item">
    <div class="title-select"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      <p>Sort by</p>
      <img src="../assets/icons/down.svg" alt="arrow">
    </div>
    
    <div class="options"
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
  <div class="burger-menu">
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areOptionsVisible: false,
      options: [
        {name: "age", value: 1},
        {name: "mass", value: 2},
        {name: "height", value: 3}
      ]
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
.v-select-item {
  position: relative;
  .title-select {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 8px 0 8px;
    top: 37px;
    left: -17px;
    overflow: hidden;
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
.burger-menu {
  display: none;
}


@media (max-width: 580px) {
  .v-select-item {
    display: none;
  }
  .burger-menu {
    display: flex;
    align-items: center;
    position: relative; 
    width: 21px; 
    height: 11px;
    cursor: pointer;
    z-index: 100;

    span, &::before, &::after{
      height: 1.4px;
      position: absolute;
      background: #000000;
      margin: 0 auto;
      border-radius: 1px;
    }
    &::after, &::before {
      position: absolute;
      content: '';
    }
    span {
      width: 60%;
    }
    &::before {
      width: 100%;
      top: 0px;
    }
    &::after {
      width: 30%;
      bottom: 0px;
    }
  }
}
</style>