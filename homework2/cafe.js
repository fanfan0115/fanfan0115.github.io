window.onload = function (){
    var total=0;
    var itemselect = document.getElementById("order");
    document.getElementById("FXY1").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.95-Espresso"));
    itemselect.appendChild(options);
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    document.getElementById("FXY2").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$2.95-Latte"));
    itemselect.appendChild(options);
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("FXY3").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$3.45-Cappuccino"));
    itemselect.appendChild(options)
    total=total+3.45;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("FXY4").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.75-Drip coffee"));
    itemselect.appendChild(options)
    total=total+1.75;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);    
    }
    document.getElementById("FXY5").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$1.95-Biscotti"));
    itemselect.appendChild(options)
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);     
    }
    document.getElementById("FXY6").onclick=function(){
    var options=document.createElement("option");
    options.appendChild(document.createTextNode("$2.95-Scone"));
    itemselect.appendChild(options)
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);   
    }
    document.getElementById("clear_order").onclick=function(){
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="";
    }
}
