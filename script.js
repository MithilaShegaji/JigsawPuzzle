var rows = 3;
var columns = 3;
var currtile;
var othertile;
var Turns = 0;
// var imgorder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgorder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //created an image tag
            let tile = document.createElement("img");
            tile.id=r.toString()+"-"+c.toString();
            tile.src=imgorder.shift()+".jpg";
            
            //drag and drop
            tile.addEventListener("dragstart",dragStart);
            tile.addEventListener("dragover",dragOver);
            tile.addEventListener("dragenter",dragEnter)
            tile.addEventListener("dragleave",dragLeave);
            tile.addEventListener("drop",dragDrop);
            tile.addEventListener("dragend",dragEnd);
            document.getElementById("board").append(tile);
        }
    }
}
function dragStart(){
    currtile=this;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){

}
function dragDrop(){
    othertile=this;
}
function dragEnd(){
if(!othertile.src.includes("3.jpg"))
{
    return;
}

    let currCoords= currtile.id.split("-");
    let r=parseInt(currCoords[0]);
    let c= parseInt(currCoords[1]);

    let otherCoords=othertile.id.split("-");
    let r2=parseInt(otherCoords[0]);
    let c2=parseInt(otherCoords[1]);


    let moveleft = r == r2 && c2 == c-1;
    let moveright= r == r2 && c2 == c+1;
    let moveUp= c == c2 && r2 == r-1;
    let movedown = c == c2 && r2 == r+1; 

    let isadjacent = moveleft || moveright || moveUp || movedown;
 
    if(isadjacent){
    let currimg = currtile.src;
    let otherimg= othertile.src;

    currtile.src=otherimg;
    othertile.src=currimg;

    Turns += 1;
    document.getElementById("Turns").innerText = Turns;
}
}