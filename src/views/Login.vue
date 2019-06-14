<template>
  <div class="login">
      <div class="logo"> 
        <img src='../assets/logo.png' alt="login image">
      </div>
    <InputGroup 
      type="number" 
      v-model="phone" 
      placeholder="手機號" 
      :btnTitle="btnTitle" 
      :disabled="disabled" 
      :error="errors.phone"/>
    <InputGroup type="number" v-model="verifyCode" placeholder="驗證碼" :error="errors.code"/>
    <div class="login_des">
      <p>
        新用戶登入即自動註冊，表示已同意
        <span>《用戶服務協議》</span> 
      </p>
    </div>
    <div class="login_btn">
      <button>登入</button>
    </div>

  </div>
</template>

<script>
import  InputGroup from '../components/inputGroup' 
import { verify } from 'crypto';
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "獲取驗證碼",
      disabled: false
    }
  },
  components: {
    InputGroup
  }
}
</script>

<style scoped>
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
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.logo_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>