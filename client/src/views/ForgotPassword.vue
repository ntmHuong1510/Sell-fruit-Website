<template>
  <div class="outside">
    <div v-if="!isVerifySuccess" class="login-wrapper">
      <h1>Quên mật khẩu</h1>
      <div class="field">
        <p>Tên đăng nhập</p>
        <input v-model="userInfo.username" />
      </div>
      <div class="field">
        <p>Email đăng ký</p>
        <input v-model="userInfo.email" />
      </div>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
      <p class="link" @click="handleGotoSignIn">Trở về trang đăng nhập</p>
      <button class="button-login" @click="handleVerify">Xác thực</button>
    </div>
    <div v-else class="login-wrapper">
      <h1>Thay đổi mật khẩu</h1>
      <div class="field">
        <p>Mật khẩu mới</p>
        <input v-model="passwordData.password" type="password" />
      </div>
      <div class="field">
        <p>Nhập lại mật khẩu</p>
        <input v-model="passwordData.rePassword" type="password" />
      </div>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
      <button class="button-login" @click="handleChangePassword">Đổi mật khẩu</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { storeAuth } from '@/core/store/auth';
import { useRouter } from 'vue-router';
import { MESSAGE } from '@/core/constants/message';
import { regexEmail } from '@/core/constants/regex';

const router = useRouter();
const userInfo = ref({
  username: '',
  email: '',
});
const passwordData = ref({
  password: '',
  rePassword: '',
});
const store = storeAuth();
const errorMessage = ref('');
const isVerifySuccess = ref(false);

const userInfoStore = computed(() => {
  return store.getDataLogin;
});

const handleVerify = async () => {
  const { username, email } = userInfo.value;
  if (username && email) {
    if (!regexEmail.test(email)) {
      errorMessage.value = MESSAGE['EMAILFORMAT'];
      return;
    }
    await store.vefiryForgot(userInfo.value);
    const { statusCode, message } = store.data;
    if (statusCode != '201') {
      errorMessage.value = message;
    } else {
      errorMessage.value = '';
      isVerifySuccess.value = true;
    }
  } else {
    errorMessage.value = MESSAGE['REQUIRE'];
  }
};

const handleChangePassword = async () => {
  const { password, rePassword } = passwordData.value;
  if (password && rePassword) {
    if (password != rePassword) errorMessage.value = MESSAGE['REPASSNOTMATCH'];
    else {
      await store.changePassword({ ...userInfo.value, password });
      const { statusCode, message } = store.data;
      if (statusCode != '201') {
        errorMessage.value = message;
      } else {
        errorMessage.value = '';
        router.push('/login');
      }
    }
  } else {
    errorMessage.value = MESSAGE['REQUIRE'];
  }
};

const handleGotoSignIn = () => {
  router.push('/login');
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
