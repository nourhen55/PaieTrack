<template>
  <div class="login-container">
    <div class="left">
      <link href="https://fonts.googleapis.com/css2?family=Inika&display=swap" rel="stylesheet">
      <img src="../../assets/paieTrack.png" class="logo" alt="Logo" />
      <div class="circle">
        <img src="../../assets/img1.png" alt="Logo" />
      </div>
      <div class="text">With our platform, managing payroll and reports has become simple and easy in just one step.</div>
    </div>
    <div class="right">
      <a href="/sign-up"><button class="sign-in" >Sign In</button></a>
      <div class="form-container">
        <h2>Reset your password</h2>
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email">Email:</label><br>
            <br><input type="email" id="email" v-model="email" required placeholder="Écrivez votre email" />
          </div>
          <button type="submit" class="check">Check</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.login-container {
  display: flex;
  height: 675px;
  animation: fadeIn 1s ease-in-out;
  flex-wrap: wrap;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.left {
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  animation: slideInLeft 1s ease-out;
}

.right {
  flex: 1.5;
  background-color: #eceef0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: slideInRight 1s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.logo {
  width: 150px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
}

.circle {
  width: 346px;
  height: 349px;
  background-color: #5c8680;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 165px;
  margin-left: 20%;
  transition: transform 0.3s ease;
}

.circle:hover {
  transform: scale(1.05);
}

.circle img {
  width: 80%;
  height: auto;
}

.text {
  width: 50%;
  text-align: center;
  margin-top: 20px;
  margin-left: 20%;
  opacity: 0;
  animation: fadeInText 1s 1s forwards;
}

@keyframes fadeInText {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.form-container {
  max-width: 400px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: fadeIn 1.5s ease-in-out;
}

h2 {
  color: #000000;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Inika', sans-serif;
  margin-bottom: 30px;
  width: 500px;
}

input {
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 7px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}


  input:focus {
    border-color: #AD6BC6;
    box-shadow: 0 3px 10px #AD6BC6;
    outline: none;
  }

form label {
  font-family: 'Inika', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin-bottom: 5px;
}

button.check {
  width: 100%;
  padding: 12px;
  background-color: #5c8680;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inika', sans-serif;
  margin-bottom: 30px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button.check:hover {
  background-color: #42615d;
}

.forgot-password {
    margin-left: 65%;  
    font-size: 18px;
    color: #AD6BC6;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .forgot-password:hover {
    color: #AD6BC6;
  }

button.sign-in {
  background-color: #AD6BC6;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  border-color: #AD6BC6;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Inika', sans-serif;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button.sign-in:hover {
  background-color: #9b58a0;
  transform: translateY(-3px);
}

/* Message d'erreur */
.error {
  color: red;
  font-size: 14px;
}
@media (max-width: 1100px) {
  .circle {
  width: 326px;
  height: 329px;
  background-color: #5c8680;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 165px;
  margin-left: 5%;
  transition: transform 0.3s ease;
}

.circle:hover {
  transform: scale(1.05);
}

}
@media (max-width: 890px) {
  :root {
    --primary-color: #5c8680;
    --primary-hover: #42615d;
    --secondary-color: #AD6BC6;
    --secondary-hover: #9b58a0;
    --bg-color: #eceef0;
    --text-color: #333;
    --input-border: #ccc;
    --input-focus: #AD6BC6;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    gap: 20px;
    background-color: var(--bg-color);
  }

  .left {
    display: none !important;
  }

  .right {
    flex: 1;
    width: 100%;
    max-width: 400px;
    padding: 25px;
    background-color: #eceef0;
    border-radius: 12px;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h2 {
    font-size: 26px;
    color: black;
    font-family: 'Inika', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: left;
  }

  input {
    width: 100%;
    height: 54px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--input-border);
    font-size: 16px;
    transition: all 0.3s ease;
    background-color: white;
  }

  input:focus {
    border-color: var(--input-focus);
    box-shadow: 0 8px 20px rgba(173, 107, 198, 0.5);
    outline: none;
  }

  button {
    padding: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 10px;
    font-weight: bold;
    border: none;
    font-family: 'Inika', sans-serif;
  }
  .forgot-password {
    margin-left: 60%;  }
  .login-btn {
    width: 100%;
    background-color: var(--primary-color);
    color: white;
  }

  .login-btn:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);

  }

  .sign-in {
    background-color: var(--secondary-color);
    color: white;
    font-size: 10px;
  }

  .sign-in:hover {
    background-color: var(--secondary-hover);
    transform: translateY(-2px);
  }

  .error {
    color: red;
    font-size: 14px;
    text-align: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}


</style>
<script>
export default {
  data() {
    return {
      email: '',
      errorMessage: ''
    };
  },
  methods: {
    handleLogin() {
      // Email validation (basic pattern)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address.';
        return;
      }

      // If the email is valid, proceed to the next step (e.g., go to password reset page)
      this.errorMessage = ''; // Clear any previous error messages
      console.log('Valid email:', this.email);
      // After validation, navigate to the next page (password reset)
      this.$router.push('/forget2');
    }
  }
};
</script>
