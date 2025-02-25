<template>
  <div class="container">
    <!-- Left Content -->
    <div class="left">
      <img src="../../assets/paieTrack.png" class="logo" alt="PayTrack Logo" />
      <p class="join">Join us</p>
      <p class="titre">Please enter your personal information</p>
      <p class="text">to create your employer account and access your company management tools.</p>
      <div class="cadre">
        <span class="block1" :class="{ active: activeStep === 1 ,transparent: activeStep}">
          <p class="numberp">1</p><span class="tt"> Employer Details</span>
        </span>
        <span class="block1" :class="{ active: activeStep === 2, transparent: activeStep  }">
          <p class="numberp">2</p><span class="tt"> Company Details</span>
        </span>
        <span class="block" :class="{ active: activeStep === 3}">
          <p class="number">3</p><span class="tt">Create Your Password</span>
        </span>
      </div>
    </div>

    <!-- Right Content -->
    <div class="right">
      <h2>Employer Details</h2>
      <div class="code-inputs">
        <input 
          v-for="(input, index) in codeInputs" 
          :key="index" 
          type="text" 
          class="code-box" 
          maxlength="1" 
          v-model="codeInputs[index]" 
          @input="onInput(index)"
        >
      </div>
      <a href="#" class="resend">click here to resend</a><br><br><br>
<div class="p2">
      <!-- Form -->
      <form @submit.prevent="submitRegistration">
        <div class="input-group input-group-inline">
          <div class="input-inline">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              v-model.trim="password" 
              placeholder="Your password" 
              required 
            />
          </div>

          <div class="input-inline">
            <label for="confirmerPassword">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmerPassword" 
              v-model.trim="confirmerPassword" 
              placeholder="Confirm your password" 
              required 
            />
          </div>
        </div>
                <label for="agree" id="terms-label">
          <input type="checkbox" id="agree" name="agree" required />
        </label><span id="check">Checkbox for users to agree to the terms and conditions.</span>

        <div class="buttons">
          <router-link to="/SingUp2">
            <button class="btnb">Back</button>
          </router-link>
          <button class="btn" type="submit">Next Step</button>
        </div>
      </form></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        nomEntreprise: "",
        adresse: "",
        emailEntreprise: "",
        password: "",
      },
    };
  },
  methods: {
    async submitRegistration() {
   console.log("البيانات المرسلة:", this.formData); // تحقق من البيانات المرسلة
   try {
     const response = await fetch("http://localhost:8080/api/SingUp3", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(this.formData),
     });
     const data = await response.json();
     if (response.ok) {
       alert("🎉 تم التسجيل بنجاح!");
     } else {
       alert("❌ " + data.message);
     }
   } catch (error) {
     console.error("❌ خطأ أثناء التسجيل:", error);
   }
 }

  },
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
.block1 {
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
 opacity: 0.5!important;
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
.numberp {
  position: absolute;
  top: 5px;
  left: 9px;
  background-color: #A43BC5;
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
  opacity: 0.5!important;
}
.tt {
  margin-top: auto; /* Aligner le texte en bas */
  font-size: 16px;
  font-weight: bold;
}
.transparent {
  opacity: 0.5!important;
}

/* Right Section */
.right {
  flex: 1;
  padding: 20px; 
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.input-inline{
    margin-left: 10%;
    padding: 20px;
    width: 100%;
}
input {
  width: 70%;
  height: 52px;
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
.code-inputs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.code-box {
  width: 90px;
  height: 80px;
  font-size: 26px;
  text-align: center;
  border-radius: 4px;
  border: 2px solid #e1e0e1;
  outline: none;
}

.code-box:focus {
  border: 2px solid #A43BC5;
  box-shadow: 0 5px 20px #A43BC5;
}

.resend {
  margin-left: 70%;
  color: #A43BC5;
  margin-top: -30px;
}

/* Button Styles */


.transparent {
  opacity: 0.5;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 97px;
  
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
}

.btnb {
  padding: 10px 20px;
  background-color: #AD6BC6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  height: 60px;
  font-family: 'Inika', serif;
      font-size: 20px;

}
.btn:hover {
 background-color: #2d4b47;}
 .btnb:hover {
 background-color: #622f71;}
.p2{
    margin-top: -100px;
}
label {
  display: block;
  font-weight: bold;
  font-family: 'Inika', serif; 
  font-size: 20px; 
  margin-bottom: 5px;
}
/* Checkbox and Terms Styles */
#terms-label {
  font-size: 14px;
  color: #333;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-left: 100px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}
input[type="checkbox"]:hover {
  transform: scale(1.1);
}
#check{
    color: #A43BC5;
    font-family: 'Inika', serif;
      font-size: 16px;

}
h2 {
  text-align: center;
  font-size: 30px;
  color: #000;
  font-family: 'Inika', sans-serif; 
  
}
</style>
