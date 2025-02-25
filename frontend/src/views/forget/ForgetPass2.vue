<template>
  <div class="login-container">
    <div class="left">
      <link href="https://fonts.googleapis.com/css2?family=Inika&display=swap" rel="stylesheet">
      <img src="../../assets/paieTrack.png" class="logo" alt="Logo" />
      <div class="circle">
        <img src="../../assets/img1.png" alt="Logo" />
      </div>
      <div class="text">
        With our platform, managing payroll and reports has become simple and easy in just one step.
      </div>
    </div>

    <div class="right">
              <a href="/sign-up"><button class="sign-in" >Sign In</button></a>

      <h2>between confirmation code</h2>

      <div class="code-inputs">
        <input 
          v-for="(input, index) in codeInputs" 
          :key="index" 
          type="text" 
          class="code-box" 
          maxlength="1" 
          v-model="codeInputs[index]" 
          @input="onInput(index)">
      </div>
          <a href="#" class="resend">click here to resend</a><br><br>
      <button :disabled="isCodeComplete" @click="submitCode" class="Continue">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeInputs: ['', '', '', ''],
    };
  },
  computed: {
    isCodeComplete() {
      return this.codeInputs.join('').length !== 4;
    }
  },
  methods: {
    onInput(index) {
      if (this.codeInputs[index].length === 1 && index < 3) {
        this.$nextTick(() => {
          const nextInput = this.$el.querySelectorAll('.code-box')[index + 1];
          if (nextInput) nextInput.focus();
        });
      }
    },
    submitCode() {
      const enteredCode = this.codeInputs.join('');
      if (enteredCode === "0000") {
        this.$router.push("/forget3"); // Redirection vers forgetpass3
      } else {
        alert(`Code soumis : ${enteredCode}`);
      }
    }
  }
};
</script>


<style scoped>
body {
  font-family: 'Inika', sans-serif;
  background-color: #f4f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
}

h2 {
  text-align: center;
  color: #000;
}
.code-inputs {
  display: flex;
  justify-content: center;
  gap: 20px; 
  margin-bottom: 20px;
}


.code-box {
  width: 106px;
  height: 100px;
  font-size: 26px;
  text-align: center;
  border-radius: 4px;
  border: 2px solid #e1e0e1;
  outline: none;
}

.code-box:focus {
  border: 2px solid #A43BC5;
  box-shadow:0 5px 20px #A43BC5;
  
}
.resend{
    margin-left: 50%;
    color: #A43BC5;
}
button {
  width:486px ;
  height: 65px;
  padding: 10px;
  background-color: #5c8680;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
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
/* Additional Styles for Layout and Animations */
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
    
  .left {
    display: none !important;
  }}
</style>
