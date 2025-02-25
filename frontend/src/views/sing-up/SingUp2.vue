<template>
  <div class="container">
    <div class="left">
      <img src="../../assets/paieTrack.png" class="logo" alt="Logo" />
      <p class="join">Join us</p>
      <p class="titre">Please enter your personal information</p>
      <p class="text">to create your employer account and access your company management tools.</p>
      <div class="cadre">
        <span class="block1 transparent"><p class="number1">1</p><span class="tt"> Employer Details</span></span>
        <span class="block "><p class="number">2</p><span class="tt"> Company Details</span></span>
        <span class="block1 transparent"><p class="number">3</p><span class="tt">Create Your Password</span></span>
      </div>
    </div>

    <div class="right">
      <h2>Company Details</h2>
      <div v-for="(company, index) in companies" :key="index" class="company-form">
        <h3>Company {{ index + 1 }}</h3>
        
        <div class="input-group">
          <label>Company Name:</label>
          <input type="text" v-model="company.name" />
        </div>

        <div class="input-group">
          <label>Tax Identification Number:</label>
          <input type="text" v-model="company.taxId" />
        </div>

        <div class="input-group">
  <label for="industry">Industry</label>
<input class="form-control" list="industryList" v-model="company.industry" placeholder="Type to search..." />
<datalist id="industryList">
  <option value="Agriculture"></option>
  <option value="Automobile"></option>
  <option value="Energy and Resources"></option>
  <option value="Construction"></option>
  <option value="Technology"></option>
  <option value="Healthcare and Medical"></option>
  <option value="Financial Services"></option>
  <option value="Transportation and Logistics"></option>
  <option value="Telecommunications"></option>
  <option value="Education"></option>
  <option value="Tourism and Hospitality"></option>
  <option value="Retail"></option>
  <option value="Real Estate"></option>
  <option value="Leisure and Entertainment"></option>
  <option value="Fashion Industry"></option>
  <option value="Chemicals and Materials"></option>
  <option value="Marketing and Advertising"></option>
  <option value="Research and Development"></option>
  <option value="Professional Services"></option>
  <option value="Agriculture, Food and Beverages"></option>
  <option value="Pharmaceutical Industry"></option>
  <option value="Public Sector and Administration"></option>
  <option value="Environmental Services"></option>
  <option value="Aerospace and Defense"></option>
  <option value="Green Technology"></option>
  <option value="Blockchain and Cryptocurrency"></option>
  <option value="Internet of Things (IoT)"></option>
  <option value="Robotics and Automation"></option>
  <option value="Digital Health"></option>
  <option value="Creative Industry"></option>
  <option value="Sustainable Mobility"></option>
  <option value="Agritech"></option>
</datalist>

</div>


        <div class="row">
          <div class="adresse">
            <label>Country:</label>
            <input type="text" v-model="company.country" />
          </div>
          
          <div class="adresse">
            <label>City:</label>
            <input type="text" v-model="company.city" />
          </div>
        </div>

        <div class="row">
          <div class="adresse">
            <label>Postal Code:</label>
            <input type="text" v-model="company.postalCode" />
          </div>
          
          <div class="adresse">
            <label>Street:</label>
            <input type="text" v-model="company.street" />
          </div>
        </div>

        <div class="controls">
          <button @click="removeCompany(index)" v-if="companies.length > 1">-</button>
          <button @click="addCompany" v-if="companies.length < 6">+</button>
        </div>
      </div>

      <div class="buttons">
       <router-link to="/sign-up" ><button class="btnb">Back</button></router-link>
        <router-link to="/SingUp3" ><button class="btn" @click="nextStep">Next Step</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyDetails",
  data() {
    return {
      companies: [
        { name: "", taxId: "", industry: "", country: "", city: "", postalCode: "", street: "" }
      ]
    };
  },
  methods: {
    addCompany() {
      if (this.companies.length < 6) {
        this.companies.push({ name: "", taxId: "", industry: "", country: "", city: "", postalCode: "", street: "" });
      }
    },
    removeCompany(index) {
      if (this.companies.length > 1) {
        this.companies.splice(index, 1);
      }
    },
    nextStep() {
      console.log("Companies:", this.companies);
    },
    selectIndustry(industry, index) {
      this.$set(this.companies, index, { ...this.companies[index], industry });
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
.number1 {
  position: absolute;
  top: 5px;
  left: 9px;
  background-color: #AD6BC6;
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
  width: 50%;
  font-family: 'Inika', sans-serif;
  padding: 30px;
  margin-top: -70px;}

h2 {
  text-align: center;
  font-size: 30px;
  color: #000;
  font-family: 'Inika', sans-serif; 
  
}
h3{
  margin-left: 100px;
}
.company-form {
  font-family: 'Inika', sans-serif;
}


.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 70%;
}

.adresse {
  width: 40%;
}

.adresse label {
  display: block;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  color: #444;
}

.adresse input {
 
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(142, 168, 164, 0.3);
}

.adresse input:focus {
  box-shadow: 0 4px 10px rgba(173, 107, 198, 0.5);
  border-color: #AD6BC6;
  outline: none;
}

.adresse input:hover {
  box-shadow: 0 4px 10px rgba(173, 107, 198, 0.5);
  border-color: #AD6BC6;
}


.input-group {
  margin-bottom: 15px;
  width: 70%;
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
  margin-left: 100px;
}

input {
  width: 100%;
  height:30px ;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0px 15px #8ea8a4;
  margin-left: 100px;

}
input:focus, .btn:focus {
  box-shadow: 0 5px 10px #AD6BC6;
  outline: none;
}

input:hover {
  box-shadow: 0 6px 12px #AD6BC6;
  border: #AD6BC6;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 100px;
}

.controls button {
  font-size: 18px;
  background-color: #AD6BC6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls button:hover {
  background-color: #4a7163;
}

.controls button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.controls button:nth-child(1) {
  background-color: #AD6BC6;
}

.controls button:nth-child(2) {
  background-color: #5c8680;
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
</style>
