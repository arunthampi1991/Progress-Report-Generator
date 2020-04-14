// You can add your codes here 
function getReport()
    {
      var rno = document.getElementById('rollNo').value;
      var cl = document.getElementById('clas').value;
      var name = document.getElementById('name').value;
      var m1 = document.getElementById('mark1').value;
      var m2 = document.getElementById('mark2').value;
      var m3 = document.getElementById('mark3').value;

      var totalmarks = parseInt(m1) + parseInt(m2) + parseInt(m3) ;

       //calculation of percentage
       var percentage = (totalmarks/3) ;
       percentage = percentage.toFixed(2);
      //printing the name and percentage
      
     
       if(percentage<=40){
            
        document.getElementById("getavg").style.color="red";
    }
    else if(percentage<=70){
        document.getElementById("getavg").style.color="orange";
    }
    else{
        document.getElementById("getavg").style.color="Green";
    }


    document.getElementById("prog").innerHTML = "Progress Report";
    document.getElementById("studname").innerHTML = name+", Roll No: "+rno+" of Class "+cl+" has scored";
       document.getElementById("getavg").innerHTML = percentage +"% in the examination";
       
    }
    
    