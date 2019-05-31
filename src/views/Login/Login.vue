<template>
  <div id="login-page">
    <p class="center">登录用户名为：admin，密码为：123456</p>
    <p class="center">在用户名和密码错误时，点击登录按钮可以看到表单的摇晃效果。</p>
    <div id="wrapper" class="login-page">
      <div id="login_form" class="form">
        <form class="register-form">
          <input type="text" placeholder="用户名" value="admin" id="r_user_name" />
          <input type="password" placeholder="密码" id="r_password" />
          <input type="text" placeholder="电子邮件" id="r_emial" />
          <button id="create">创建账户</button>
          <p class="message">已经有了一个账户?
            <a href="#">立刻登录</a>
          </p>
        </form>
        <form class="login-form">
          <h2>登录入口</h2><br />
          <input type="text" placeholder="用户名" value="admin" id="user_name" v-model="username"/>
          <input type="password" placeholder="密码" id="password" v-model="password"/>
          <button id="login" @click.prevent="login">登&nbsp;录</button>
          <!--<p class="message">还没有账户?-->
            <!--<a href="#">立刻创建</a>-->
          <!--</p>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: 'admin',
        password: ''
      }
    },
    methods: {
      login() {
        const {username, password} = this

        if(username == "admin" && password == "123456") {
          this.$Notice.success({
            title: '登录成功',
            desc: ''
          });
          this.username = ''
          this.password = ''
          this.$router.replace('/backstage')
        } else {
          this.$Notice.error({
            title: '登录失败',
            desc: '用户名或密码错误！ '
          });
          document.getElementById('login_form').classList.remove('shake_effect');
          setTimeout(function() {
            document.getElementById('login_form').classList.add('shake_effect');
          }, 1);
        }
      }
    }

  }
</script>

<style scoped>
  .login-page {
    width: 420px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #fff;
    max-width: 400px;
    margin: 0 auto 100px;
    padding: 40px 40px 50px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Microsoft YaHei", "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #0dc316;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 15px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .form button:hover, .form button:active, .form button:focus {
    background: #0eb618;
  }
  .form .message {
    margin: 18px 0 0;
    color: #b3b3b3;
    font-size: 14px;
  }
  .form .message a {
    color: #0eb618;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }
  .login-form h2{ font-size:24px; color:#212121; font-weight:600; text-align:left;}
  #login-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #20222A; /* fallback for old browsers */
    font-family: "microsoft", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .shake_effect {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
  }
  @-webkit-keyframes shake {
    from, to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  @keyframes shake {
    from, to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  p.center {
    color: #888;
    font-family: "Microsoft YaHei";
  }
</style>
