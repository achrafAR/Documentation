function result(){
    var shoesize = document.getElementById("shoe_size").value;
    var birthyear = document.getElementById("year").value;
    alert(((((shoesize*2)+5)*50)-birthyear)+1766);
    }