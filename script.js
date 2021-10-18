function Verificar(){
    //respostas corretas
  var corretas = 0

  // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 2; i++) {
      var radiosName = document.getElementsByName('answer'+i);
  
  //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if(radiosValue.value == "certa" && radiosValue.checked) {
          corretas++;
        }
      }
    }
    window.location.href = "resultado.html";
    
    document.write("Olá");
}