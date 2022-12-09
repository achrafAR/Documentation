function colorfun(x){
    console.log(x);
    var p = document.getElementById("text");
    if(x=="green"){
        p.style.color="green"
    }else if(x=="red"){
        p.style.color="red";
    }else{
        p.style.color="blue";
    }
}
