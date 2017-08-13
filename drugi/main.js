 $('#linkIncrease').click(function () {
     modifyFontSize('increase');
 });

 $('#linkDecrease').click(function () {
     modifyFontSize('decrease');
 });

 $('#linkReset').click(function () {
     modifyFontSize('reset');
 })

 function modifyFontSize(flag) {
     /*
     moramo stavljati varijable kao u ovom slucaju
     Sada smo varijablu divElement dodelili curent varijabli
     i parsirali smo font brojeve
     da bi kasnije tu varijablu povecavali
     */
     var divElement = $('#divContent');
     var currentFontSize = parseInt(divElement.css('font-size'));

     if (flag == 'increase'){
       currentFontSize += 3;  
     }else if (flag == 'decrease'){
         currentFontSize -= 3; 
     }else{
        currentFontSize = 16; 
     }
         

     divElement.css('font-size', currentFontSize);
     /*
     font-seze varijable dvvElement je jednak 
     currenrFontSize varijabli a nju mozemo da povecamo
     ili da je smanjimo.
     */
 }