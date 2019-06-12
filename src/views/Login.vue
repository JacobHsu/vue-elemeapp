<template>
  <div class="login">
      <div class="logo"> 
        <img src='../assets/logo.png' alt="login image">
      </div>
    login
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style>
.login  {
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background:#fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
</style>