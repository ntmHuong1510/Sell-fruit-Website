<template>
  <div class="outside">
    <div class="login-wrapper">
      <h1>TẠO TÀI KHOẢN MỚI</h1>
      <div class="field">
        <p>Tên đăng nhập</p>
        <input v-model="dataForm.username" autocomplete="off" maxlength="20" />
      </div>
      <div class="field">
        <p>Email</p>
        <input v-model="dataForm.email" autocomplete="off" maxlength="50" />
      </div>
      <div class="field">
        <p>Mật khẩu</p>
        <input
          v-model="dataForm.password"
          :type="isShowPassword ? 'text' : 'password'"
          autocomplete="off"
          maxlength="20"
        />
        <button class="toggle-password" @click="handleTogglePass">
          <FontAwesomeIcon :icon="'eye'" class="fa-icon-custom" />
        </button>
      </div>
      <div class="field">
        <p>Nhập lại mật khẩu</p>
        <input
          v-model="dataForm.rePassword"
          :type="isShowRePassword ? 'text' : 'password'"
          autocomplete="off"
          maxlength="20"
        />
        <button class="toggle-password" @click="handleToggleRePass">
          <FontAwesomeIcon :icon="'eye'" class="fa-icon-custom" />
        </button>
      </div>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
      <p v-if="successMessage" class="success-message">
        {{ successMessage }}
      </p>
      <p class="link" @click="handleGotoSignIn">Trở về trang đăng nhập</p>
      <button class="button-login" @click="handleCreate">Đăng ký</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { storeUser } from '@/core/store';
import { ref } from 'vue';
import { MESSAGE } from '@/core/constants/message';
import { regexEmail } from '@/core/constants/regex';

const router = useRouter();
const store = storeUser();
const dataForm = ref({
  username: '',
  email: '',
  password: '',
  rePassword: '',
});

const isShowPassword = ref(false);
const isShowRePassword = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const handleTogglePass = () => {
  isShowPassword.value = !isShowPassword.value;
};

const handleToggleRePass = () => {
  isShowRePassword.value = !isShowRePassword.value;
};

const handleGotoSignIn = () => {
  router.push('/login');
};

const handleCreate = async () => {
  const { username, email, password, rePassword } = dataForm?.value;
  if (username && email && password && rePassword) {
    if (!regexEmail.test(email)) {
      errorMessage.value = MESSAGE['EMAILFORMAT'];
      return;
    }
    if (password !== rePassword) {
      errorMessage.value = MESSAGE['REPASSNOTMATCH'];
    } else {
      await store.createUser({ username, email, password });
      const { statusCode, message } = store.data;
      if (statusCode == '401') {
        errorMessage.value = message;
      } else if (statusCode == '201') {
        errorMessage.value = '';
        successMessage.value = 'Tạo tài khoản thành công!';
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else errorMessage.value = '';
    }
  } else {
    errorMessage.value = MESSAGE['REQUIRE'];
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.outside {
  background-image: url('@/assets/background.jpg');
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
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
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
