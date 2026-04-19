let grid = document.querySelector("#grid");
let x=0;
let y=0;
function newcanvas() {
    y=document.querySelector("#y").value;
    x=document.querySelector("#x").value;
    grid.innerHTML= "";
    creategrids()
}
function creategrids() {
    for (let i= x*-1;i <= 0; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridbox");
        grid.appendChild(div);
        for (let b= y*-1;b <= 0; b++) {
        let gridcont=document.createElement("div");
        gridcont.setAttribute("class", "gridcont");
        gridcont.addEventListener("mouseover", (e)=>{e.target.style.background="black";});
        div.appendChild(gridcont);
    }
    }
}