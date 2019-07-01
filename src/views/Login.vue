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
      :error="errors.phone"
      @btnClick="getVerifyCode"/>
    <InputGroup type="number" v-model="verifyCode" placeholder="驗證碼" :error="errors.code"/>
    <div class="login_des">
      <p>
        新用戶登入即自動註冊，表示已同意
        <span>《用戶服務協議》</span> 
      </p>
    </div>
    <div class="login_btn">
      <button :disabled="isClick" @click="handleLogin">登入</button>
    </div>

  </div>
</template>

<script>
import  InputGroup from '../components/inputGroup';
import { verify } from 'crypto';
import { setInterval, clearInterval } from 'timers';
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
  computed: {
    isClick() {
      if(!this.phone || !this.verifyCode) return true;
      else return false;
    }
  },
  methods: {
    handleLogin() {
      this.errors = {};
      this.$axios.post("/api/posts/sms_back",{
        phone: this.phone,
        code: this.verifyCode
      })
      .then(res=>{
        //console.log(res);~
        localStorage.setItem("ele_login", true); 
        this.$router.push("/");
      })
      .catch(err=>{
        this.errors = {
          code: err.response.data.msg 
        }

      })
    },
    getVerifyCode() {
      if( this.validatePhone() ) {
        this.validateBtn();
        this.$axios.post("/api/posts/sms_send", {
          tpl_id: "167467",  
          key: "ac646ca02956beb582a5e226b2667007",
          phone: this.phone  
        })
        .then(res =>{
          console.log(res)
        })
      }
    },
    validateBtn() {
      let time = 60;
      let timer = setInterval(()=>{
        if( time==0 ) {
          clearInterval(timer);
          this.btnTitle = '獲取驗證碼';
          this.disabled = false;
        } else {
          this.btnTitle = time + '秒後重試';
          this.disabled = true;
          time--;
        }
      },1000)
    },
    validatePhone() {
      if(!this.phone) {
        this.errors = {
          phone: '手機號碼不能為空'
        }
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: '請填寫正確的手機號碼'
        }
        return false;
      } else {
        this.errors = {};
        return true;
      }
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
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>