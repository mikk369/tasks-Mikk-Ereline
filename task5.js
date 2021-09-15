function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log("")
  console.log("tere")
  console.log("minu nimi on john")

  console.log("tere minu nimi on john" === "") //false
  console.log("" === "") //true
  
  console.log(capitalizeFirstLetter('tere')); //uppercase
  console.log(capitalizeFirstLetter('minu nimi on john'));//uppercase

  //Minu mõistus lõppeb siin//