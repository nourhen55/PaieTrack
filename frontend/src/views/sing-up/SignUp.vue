<template>
  <div class="container">
    
    <div class="left">
      <img src="../../assets/paieTrack.png" class="logo" alt="Logo" />
      <p class="join">Join us</p>
      <p class="titre">Please enter your personal information</p>
      <p class="text">to create your employer account and access your company management tools.</p>
      <div class="cadre">
        <span class="block"><p class="number">1</p><span class="tt"> Employer Details</span></span>
        <span class="block transparent"><p class="number">2</p><span class="tt"> Company Details</span></span>
        <span class="block transparent"><p class="number">3</p><span class="tt">Create Your Password</span></span>
      </div>
    </div>

    <div class="right">
      <h2>Employer Details</h2>

      <form @submit.prevent="nextStep">
        <div class="input-group input-group-inline">
          <div class="input-inline">
            <label for="firstName">First Name:</label>
            <input 
              type="text" 
              id="firstName" 
              v-model.trim="firstName" 
              placeholder="Your first name" 
              required 
            />
          </div>

          <div class="input-inline">
            <label for="lastName">Last Name:</label>
            <input 
              type="text" 
              id="lastName" 
              v-model.trim="lastName" 
              placeholder="Your last name" 
              required 
            />
          </div>
        </div>

        <div class="input-group">
          <label for="email">Professional Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model.trim="email" 
            placeholder="e.g. payTrack@gmail.com" 
            required 
          />
          <p v-if="emailError" class="error">{{ emailError }}</p>
        </div>

        <div class="input-group">
          <label for="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            v-model.trim="phone" 
            placeholder="Your number" 
            required 
          />
          <p v-if="phoneError" class="error">{{ phoneError }}</p>
        </div>

         <router-link to="/SingUp2">
<button type="submit" class="btn" :disabled="!isValidForm">Next Step</button>
        </router-link></form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailError: '',
      phoneError: ''
    };
  },
  computed: {
    isValidForm() {
      return this.firstName && this.lastName && !this.emailError && !this.phoneError;
    }
  },
  watch: {
    email(value) {
      this.validateEmail(value);
    },
    phone(value) {
      this.validatePhone(value);
    }
  },
  methods: {
    validateEmail(value) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailError = emailPattern.test(value) ? '' : 'Invalid email format';
    },
    validatePhone(value) {
      const phonePattern = /^[0-9]{8,14}$/; // Numéro de 8 à 14 chiffres
      this.phoneError = phonePattern.test(value) ? '' : 'Invalid phone number';
    },
    nextStep() {
      if (this.isValidForm) {
        console.log("Employer details:", this.firstName, this.lastName, this.email, this.phone);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');

.container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  background-color: #eceef0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  animation: pageLoad 1s ease-in-out;
}

/* Styles pour la section gauche */
.left {
  flex: 1;
  background-color: #5c8680;
  padding: 20px;
  color: white;
  border-radius: 8px 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 40%;
  border-radius: 5%;
  animation: fadeIn 1s ease-in-out forwards;
}

.logo {
  width: 100px;
}

.join {
  font-family: 'Inder', sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-top: 175px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #8ea8a4;
  box-shadow: 0 5px 20px #333;
  width: 75px;
}

.titre {
  font-size: 25px;
  font-family: 'Impact', sans-serif;
  color: rgb(255, 255, 255);
}

.text {
  font-family: 'Inder', sans-serif;
  font-size: 15px;
}

.cadre {
  margin-top: 20px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 15px;
  animation: slideIn 0.8s ease-out;
}
.block {
  font-size: 20px;
  position: relative;
  display: flex;
  flex-direction: column; /* Arrange les éléments en colonne */
  align-items: center;
  justify-content: flex-end; /* Aligner le texte en bas */
  background-color: #FFF;
  color: black;
  width: 30%;  
  aspect-ratio: 1;
  border-radius: 20%;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  position: relative;
}

.number {
  position: absolute;
  top: 5px;
  left: 9px;
  background-color: #5c8680;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Inder', sans-serif;
}

.tt {
  margin-top: auto; /* Aligner le texte en bas */
  font-size: 16px;
  font-weight: bold;
}


.transparent {
  opacity: 0.5;
}

/* Styles pour la section droite */
.right {
  flex: 1;
  padding: 5%;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.6s;
}

h2 {
  text-align: center;
  color: #000000;
  font-weight: bold;
  font-size: 36px;
}

.input-group {
  margin-bottom: 15px;
  padding: 10px;
}

.input-group-inline {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.input-inline {
  width: 40%;
}

label {
  display: block;
  font-weight: bold;
  font-family: 'Inika', serif;
  font-size: 20px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0px 15px #8ea8a4;
}

input:focus, .btn:focus {
  box-shadow: 0 5px 10px #AD6BC6;
  outline: none;
}

input:hover {
  box-shadow: 0 6px 12px #AD6BC6;
  border: #AD6BC6;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 97px;
  margin-left: 20px;
  
}

.btn {
  padding: 15px 20px;
  background-color: #5c8680;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  height: 60px;
  font-family: 'Inika', serif;
  font-size: 20px;
    margin-left: 10px;

}

.btn:hover {
 background-color: #2d4b47;}


.btn:disabled {
  background-color: #a5a5a5;
  cursor: not-allowed;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .right {
    width: 50%;
  }
   .left {
    display: none !important;
  }
}
</style>
