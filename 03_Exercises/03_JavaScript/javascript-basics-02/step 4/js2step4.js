function resetVariables() {
    const answer = confirm("YES OR NO")
    if(answer){
     document.getElementById("name").value="";
     document.getElementById("surname").value="";
     document.getElementById("city").value="";
    }
}
