
    
function newimage(filename,idimage){
    let image  = document.getElementById(idimage);
    image.setAttribute("src",filename);
}
function oldimage(filename,idimage){
    let image = document.getElementById(idimage);
    image.setAttribute("src",filename);
}