<template>
  <div class="outside">
    <button class="button-back" @click="handleHome">Trở về trang chủ</button>
    <div class="login-wrapper">
      <h1>Đăng nhập</h1>
      <div class="field">
        <p>Tên đăng nhập</p>
        <input v-model="userInfo.username" />
      </div>
      <div class="field">
        <p>Mật khẩu</p>
        <input v-model="userInfo.password" :type="isShow ? 'text' : 'password'" />
        <button class="toggle-password" @click="handleTogglePass">
          <FontAwesomeIcon :icon="!isShow ? 'eye' : 'eye-slash'" class="fa-icon-custom" />
        </button>
      </div>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
      <p class="link" @click="handleGotoSignUp">Tạo tài khoản mới</p>
      <p class="link" @click="handleGotoForgot">Quên mật khẩu</p>
      <button class="button-login" @click="handleAuthen">Đăng nhập</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { storeAuth } from '@/core/store/auth';
import { useRouter } from 'vue-router';
import { MESSAGE } from '@/core/constants/message';

const router = useRouter();
const isShow = ref(false);
const errorMessage = ref('');
const userInfo = ref({
  username: '',
  password: '',
});
const store = storeAuth();

const userInfoStore = computed(() => {
  return store.getDataLogin;
});

const handleTogglePass = () => {
  isShow.value = !isShow.value;
};

const handleAuthen = async () => {
  const { username, password } = userInfo.value;
  if (password && username) {
    await store.login(userInfo.value);
    const { statusCode, message } = store.data;
    if (statusCode != '201') {
      errorMessage.value = message;
    } else {
      errorMessage.value = '';
    }
  } else {
    errorMessage.value = MESSAGE['REQUIRE'];
  }
};

const handleGotoSignUp = () => {
  router.push('/register');
};

const handleHome = () => {
  router.push('/');
};

const handleGotoForgot = () => {
  router.push('/forgot-password');
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.outside {
  background-image: url('@/assets/loginbg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw;
  height: 100vh;

  .button-back {
    font-size: 25px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.4s;
    display: block;
    position: relative;
    top: 10px;
    left: 10px;

    &:hover {
      background-color: #addc3b;
    }
  }

  .login-wrapper {
    color: black;
    min-width: 500px;
    width: auto;
    height: auto;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px 50px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    .field {
      display: flex;
      padding: 10px 0;
      align-items: center;
      position: relative;
      gap: 16px;
      p {
        font-size: 20px;
        min-width: 180px;
        margin: 0;
      }

      input {
        width: 300px;
        font-size: 20px;
        padding: 5px 37px 5px 10px;
        transition: 0.4s;
        border: 1px solid black;
        border-radius: 5px;
        &:focus {
          outline-color: #addc3b;
        }
      }

      .toggle-password {
        position: absolute;
        right: 0px;
        top: 10px;
        height: 37px;
        cursor: pointer;
        border: none;
        background: transparent;

        &:hover {
          color: #addc3b;
        }
      }
    }
    .btn-group {
      display: flex;
    }

    .button-login {
      font-size: 25px;
      border: none;
      background-color: black;
      color: white;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      transition: 0.4s;
      margin: auto;
      display: block;

      &:hover {
        background-color: #addc3b;
      }
    }
  }
}
</style>
