const Utilisateur = require('./models/utilisateur'); // Assure-toi que le chemin est correct

const newUser = new Utilisateur({
  id: '1',
  firstname: 'nour',
  lastname: 'hen',
  mail: 'henn5722@gmail.com',
  number: 123456,
  identreprise: 123456,
  modepass: 'jjkkk'
});

newUser.save()
  .then(() => {
    console.log("Utilisateur ajouté avec succès !");
  })
  .catch(err => {
    console.error("Erreur lors de l'ajout de l'utilisateur:", err);
  });
