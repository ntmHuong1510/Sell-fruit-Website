<template>
  <div class="outside">
    <div class="login-wrapper">
      <h1>Register your new account</h1>
      <div class="field">
        <p>Username</p>
        <input>
      </div>
      <div class="field">
        <p>Email</p>
        <input>
      </div>
      <div class="field">
        <p>Password</p>
        <input>
        <button class="toggle-password">
          <FontAwesomeIcon
            :icon="'eye'"
            class="fa-icon-custom"
          />
        </button>
      </div>
      <div class="field">
        <p>Confirm</p>
        <input>
        <button class="toggle-password">
          <FontAwesomeIcon
            :icon="'eye'"
            class="fa-icon-custom"
          />
        </button>
      </div>
      <p
        class="link"
        @click="handleGotoSignIn"
      >
        I have a account
      </p>
      <button class="button-login">
        Submit
      </button>
    </div>
  </div>
</template>
      
<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const handleGotoSignIn = () => {
  router.push("/login")
}
</script>
  
<style scoped lang="scss">
.outside {
    background-color: #addc3b;
    position: relative;
    width: 100vw;
    height: 100vh;

    .login-wrapper {
        color: black;
        width: 500px;
        height: auto;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 30px 50px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        .field {
            display: flex;
            padding: 10px 0;
            align-items: center;
            position: relative;

            p {
                font-size: 20px;
                min-width: 100px;
                margin: 0;
            }

            input {
                width: 300px;
                font-size: 20px;
                padding: 5px 37px 5px 10px;
                transition: 0.4s;

                &:focus {
                    outline-color: #addc3b;
                }
            }

            .toggle-password {
                position: absolute;
                right: 49px;
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

        .link {
            font-size: 18px;
            color: black;
            cursor: pointer;
            transition: 0.4s;

            &:hover {
                text-decoration: underline;
                color: #addc3b;
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