<template>
  <div class="v-catalog__item">
    <img
      v-for="image in images" :key="image.img"
      :src="require('../assets/img/catalog/' + image.img)" alt="image"
    >
    <div class="description">
      <span>{{ card.birth_year }}</span>
      <div class="name">{{ card.name }}</div>
      <span>Eye color: {{ card.eye_color }}</span>
      <span>Height: {{ card.height }}</span>
      <span>Mass: {{ card.mass }}</span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      images: [
        {
          img: 'LukeSkywalker.jpg'
        },
        {
          img: 'C-3PO.png'
        },
        {
          img: 'R2-D2.jpg'
        },
        {
          img: 'DarthVader.jpg'
        },
        {
          img: 'LeiaOrgana.jpg'
        },
        {
          img: 'OwenLars.jpg'
        },
        {
          img: 'BeruWhitesunlars.jpg'
        },
        {
          img: 'R5-D4.jpeg'
        },
        {
          img: 'BiggsDarklighter.jpg'
        },
        {
          img: 'Obi-WanKenobi.jpg'
        }
      ]
    }
  },
  props: {
    card: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .v-catalog__item {
    position: relative;
    width: calc(50% - 8.5px);
    height: 410px;
    border-radius: 6px;
    text-align: left;
    overflow: hidden;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .description {
      position: absolute;
      top: 21px;
      left: 24px;
      z-index: 1;

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 104%;
        color: #FFFFFF;
        opacity: 0.8;
        margin-right: 24px;
      }

      .name {
        padding: 16px 0 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 148%;
        color: #FFFFFF;
      }
    }
  }

  @media (max-width: 580px) {
    .v-catalog__item {
      width: 100%;
    }
    .description {
      top: revert !important;
      bottom: 25px;
      left: 20px;
      span {
        margin-right: 16px;
      }
    }
  }
</style>