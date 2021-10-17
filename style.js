
    function getbmivalue() {
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;

        height = height * 12;
        height = height * 0.025;// now height in meter
        var newbmivalue = weight / (height * height);
        newbmivalue = Math.round(newbmivalue);
       
        

        document.getElementById('bmivalue').value = newbmivalue;
        var u=document.getElementById("button1");
        var m=document.getElementById("popupcontent");
        
      
        if(newbmivalue<18.5){
           
           document.getElementById("solution").innerHTML="you are under weight" ;
           u.innerHTML="<a>Get detail about under weight</a>"
           m.innerHTML="<p>data about under weight</p>"
          

        }
        else if(newbmivalue>18.5 && newbmivalue<24.9){
            document.getElementById("solution").innerHTML="you are in healthy range";
            u.innerHTML="<a>Get detail for healthy body</a>"
            m.innerHTML="<p>great you are healty .maintain it</p>"
          

        }
        else if(newbmivalue>25 && newbmivalue<29.9){
            document.getElementById("solution").innerHTML="you are in over weight";
            u.innerHTML="<a>Get detail about over weight</a>"
            m.innerHTML="<p>data about over weight how to overcome it </p>"
          
        }
        else if(newbmivalue>30 && newbmivalue<39.9){
            document.getElementById("solution").innerHTML="you are in described obesity";
            u.innerHTML="<a>Now more</a>"
            m.innerHTML="<p>hello world</p>"
          
        }
        else if(newbmivalue>40){
            document.getElementById("solution").innerHTML="you are in severe obesity";
            u.innerHTML="<a>Now more new content</a>"
        }
       
    }
function fun(){
    document.getElementById("myform").reset();
}
function getbfpvalue(){
    var age = document.getElementById('age').value;
    var bmi = document.getElementById('bmivalue').value;
    if(age>18)
    var bfp=1.20*bmi + 0.23*age -16.2;
    else if(age<=18){
        var bfp=1.51*bmi - 0.7*age -2.2;
    }
    bfpvalue = Math.round(bfpvalue);

    document.getElementById('bfpvalue').value = bfp;
}
