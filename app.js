const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];


document.querySelector('#Boutton').addEventListener('click', Event => {
  // IMC = poids en kg / taille² en m

  const Taille = document.querySelector('#Taille').value;
  const Kg = document.querySelector('#Kg').value;
  


  poids = Kg * 100;
  M = Taille ** 2;
  let Calcul = poids / M * 100;
  console.log(Calcul)


  for (let index = 0; index < BMIData.length; index++) {
    
  if (Taille == "" && Kg == "") {

    document.querySelector('.valeurs-chiffres').innerHTML = "OOPS";
    document.querySelector('.Result').innerHTML = "Veuillez remplir les valeurs demandées";

  } else if (BMIData[index]){

    var checkrange = BMIData[index].range.length;

    if (checkrange == 2) {
           range1 = BMIData[index].range[0]
            range2 = BMIData[index].range[1]
             if (Calcul > range1 && Calcul < range2) {
               
              document.querySelector('.valeurs-chiffres').innerHTML = Math.trunc(Calcul);
              document.querySelector('.valeurs-chiffres').style.color = BMIData[index].color;
              document.querySelector('.Result').innerHTML = "Résultat: "+ BMIData[index].name;
                console.log(BMIData[index].name)
             }
          } else {
            range1 = BMIData[index].range
            if (Calcul > range1) {
              console.log(BMIData[index].name)
              document.querySelector('.valeurs-chiffres').innerHTML = Math.trunc(Calcul);
              document.querySelector('.valeurs-chiffres').style.color = BMIData[index].color;
            document.querySelector('.Result').innerHTML = "Résultat: "+ BMIData[index].name;
            }
          }

    

  }

}


  // for (let index = 0; index < BMIData.length; index++) {
  //   if (BMIData[index]) {
  //     var checkrange = BMIData[index].range.length
  //     if (checkrange == 2) {
  //       range1 = BMIData[index].range[0]
  //       range2 = BMIData[index].range[1]
  //       if (Calcul > range1 && Calcul < range2) {
  //         document.querySelector("#Resultat").innerHTML = BMIData[index].name;
  //         console.log(BMIData[index].name)
  //       }
  //     } else {
  //       range1 = BMIData[index].range
  //       if (Calcul > range1) {
  //         console.log(BMIData[index].name)
  //         document.querySelector("#Resultat").innerHTML = BMIData[index].name;
  //       }
  //     }

  //   }

  // } 

})

