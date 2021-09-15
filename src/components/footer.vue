<template>
  <div class="footer">
    <div class="container">
      <div class="top-footer">
        <div class="logo">
          <img src="../assets/img/StarWars.png" alt="logo">
        </div>
        <div class="social">
          <div class="social__item">
            <a href="#"><img src="../assets/img/instagram.svg" alt="insta"></a>
          </div>
          <div class="social__item">
            <a href="#"><img src="../assets/img/facebook.svg" alt="facebook"></a>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <span>All rights Reserved.</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .footer {
    padding: 44px 0 21px;
    background: #F2EEEE;
    .container {
      margin: 0 104px;
    }
    .top-footer {
      display: flex;
      justify-content: space-between;
      padding-bottom: 60px;
      .logo {
        display: flex;
        align-items: center;
      }
      .social {
        display: flex;
        &__item {
          padding: 12px 16px;
          background: #FF634A;
          border-radius: 6px;
          &:last-child {
            margin-left: 16px;
        }
        }
      }
    }
    .bottom-footer {
      display: flex;
      justify-content: space-between;
      span {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 180%;
        color: #100F0F;
      }
    }
  }



  @media (max-width: 767px) {
    .footer {
      .container {
        margin: 0 18px;
        .top-footer {
          display: flex;
          flex-direction: column;
          padding-bottom: 40px;
          .social {
            margin-top: 24px;
          }
        }
      }
    }
  }
</style>
