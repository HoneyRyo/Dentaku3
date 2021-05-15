let result = document.getElementById("result");
     function edit(elem) {
      let v=result.value +elem.value;;
      v = v.replace(/\D(\D)/,'$1');
      v = v.replace(/^[\*\/]/,'');
      v = v.replace(/(^|[\*\+\-\/])0(?=\d)/,'$1');
      v = v.replace(/(\d\.\d*)\./,'$1');
      result.value =v;
     }
     function calc() {
       result.value = new Function("return " + result.value)();
     }
     function allclear(_V){
       document.querySelector('input').value=_V
     }