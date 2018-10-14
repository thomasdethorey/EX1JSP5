var languagesArrayCreation = function () {
  var languages = new Array("Html","CSS","Java","PHP"); // création d'un tableau avec new Array
  return languages;
}

var numbersArrayCreation = function () {
    var numbers = [0,1,2,3,4,5]; // Autre méthode pour créer un tableau
    return numbers;
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript'; // Le premier emplacement d'un tableau est le 0 donc pour modifier le 3ème, on met 2
  // languages.splice(2, 1, 'Javascript'); 1er argument (2), emplacement  , 2ème argument fonction
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby","Python"); //push ajoute à la fin du tableau
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1); //fonction unshift ajoute au début du tableau
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift(); //shift supprime le prmeir élément du tableau
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop(); //pop supprime le dernier
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var socialMedia = socialMediaInString.split(','); // split transforme une string(chaine de caractères) en array(tableau)
  return socialMedia;
}

var arrayToString = function (languages) {
  var languagesInString = languages.toString(); //toString tableau verschaine de caraactères
  return languagesInString;
}

var arraySort = function (socialMedia) {

  return socialMedia.sort(); //sort, trie par ordre alphabétique un tableau
}

var arrayInvert = function (languages){


  return languages.reverse(); // reverse, inverse les éléments d'un tableau
}
