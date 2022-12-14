	function calculoImc() {
	 let altura = document.getElementById("height").value;  
	 let peso = document.getElementById("weight").value;
	 let imc = (peso)/((altura*altura)/10000); //imc form
	 let re = document.getElementById("result");   // get the result value
		
   if(imc<16){
       re.textContent = "Magreza Grave"
        //sets the result value
    }else if(imc>=16 && imc<17){
        re.textContent = "Magreza Moderada"
        
    }else if (imc>=17 && imc<18.5){
        re.textContent = "Magreza Leve"
        
    }else if (imc>=18.5 && imc<25){
        re.textContent = "Saudável"
                
    }else if(imc>=25 && imc<30){
          re.textContent = "Sobrepeso"
                    
    }else if(imc>=30 && imc<35){
          re.textContent = "Obesidade Grau I"
                   
    }else if(imc>=35 && imc<40){
          re.textContent = "Obesidade Grau II (Severa)"
                        
    }else if(imc>=40){
        re.textContent = "Obesidade Grau III (Mórbida)"
   
    }else if(peso<6 && altura<60){
        re.textContent = ""
   
    }
                   
    
  }