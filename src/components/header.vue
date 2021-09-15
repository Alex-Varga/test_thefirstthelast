<template>
  <nav class="navbar">
    <div class="container">
      <div class="left-block">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/StarWars.png" alt="logo">
        </a>
      </div>
      <div class="right-block">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">En<img src="../assets/icons/down.svg" alt="arrow"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log in</a>
          </li>
        </ul>
        <button class="btn btn-outline-success" type="submit">Sign up</button>
        <div class="burger-menu">
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    margin: 0 104px;
    .left-block {
      display: flex;
      align-items: center;
    }
    .right-block {
      display: flex;
      align-items: center;
    }
  }
  .navbar {
    padding: 17px 0;
    background: #F2EEEE;
  }
  .navbar-collapse {
    justify-content: space-between;
  }
  button {
    text-align: center;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 104%;
    margin-left: 43px;
    background: #FF634A;
    border: none;
    border-radius: 6px;
    padding: 16px 56px;
    cursor: pointer;
    &:hover {
      background: #FF634A;
    }
  }
  ul.navbar-nav {
    display: flex;
    flex-direction: row;
    li.nav-item {
      display: flex;
      align-items: center;
      margin-left: 62px;
      a.nav-link {
        text-decoration: none;
        display: flex;
        align-items: flex-end;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 104%;
        color: #000000;
      }
    }
  }


  @media (max-width: 767px) {
    .container {
      margin: 0 18px;
    }
  }

  @media (max-width: 580px) {
    .navbar {
      background: #ffffff;
    }
    ul.navbar-nav {
      display: none;
    }
    button {
      margin-left: 0;
      padding: 0;
      color: #000000;
      background: transparent;
      &:hover {
        background: transparent;
      }
    }
    .burger-menu {
      display: flex;
      align-items: center;
      position: relative; 
      width: 24px; 
      height: 7.4px;
      margin-left: 48px;
      cursor: pointer;
      z-index: 100;

      span {
        top: 0;
      }
      span, &::after{
        height: 1.3px;
        width: 100%;
        position: absolute;
        background: #000000;
        margin: 0 auto;
      }
      &::after {
        position: absolute;
        content: '';
        top: 7.4px;
      }
    }
  }
</style>
