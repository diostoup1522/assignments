let firstnum=true; //fixes: fix the calculator always picking the "/" mode and "=" not working
let box = document.querySelector("#box");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let moden = document.querySelector("#mode");
let modec="";
function numbval (number) {
    if (firstnum) {
        input1.innerText= input1.innerText+number;        
    } else {
        input2.innerText= input2.innerText+number;
    }
}
function calculate() {
    if (firstnum==false && input1.innerText != "" && input2.innerText != "") {
        switch(modec) {
            case "+":
                input1.innerText=Number(input1.innerText) + Number(input2.innerText);
                break;
            case "-":
                input1.innerText=Number(input1.innerText) - Number(input2.innerText);
                break;
            case "*":
                input1.innerText=Number(input1.innerText) * Number(input2.innerText);
                break;
            case "/":
                if (Number(input1.innerText) == 0) {
                    input1.innerText=0;
                    break;
                } else {
                input1.innerText=Number(input1.innerText) / Number(input2.innerText);
                break;
                }
            }
        }
                input2.innerText= "";
                moden.innerText= "";
                modec="";
                firstnum=true;
}
function mode(type) {
    if (firstnum==true && input1.innerText!="") {
    switch(type) {
        case "+":
            modec="+";
            moden.innerText="+";
            break;
        case "-":
            modec="-";
            moden.innerText="-";
            break;
        case "*":
            modec="*";
            moden.innerText="*";
            break;
        case "/":
            modec="/";
            moden.innerText="/";
            break;
    }
        firstnum=false;
    }
}
//makes each mode
//make calculations
function clearnum() {
    input1.innerText= "";
    input2.innerText= "";
    moden.innerText= "";
    modec="";
    firstnum=true;
}
function creategrids() {
    for (let i=0;i <= 2; i++) {
        if (i != 1) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridbox");
        box.appendChild(div);
        for (let b=1;b <= 3; b++) {
            let gridcont=document.createElement("div");
            gridcont.innerText=(b+(i*3));
            gridcont.setAttribute("class", "numbers");
            gridcont.setAttribute("id", "n"+(b+(i*3)));
            gridcont.addEventListener("click", function(){numbval((b+(i*3)));});
            div.appendChild(gridcont);
            }
        } else {
        let div = document.createElement("div");
        div.setAttribute("class", "gridbox");
        box.appendChild(div);
        for (let b=1;b <= 4; b++) {
            if (b != 4) {
            let gridcont=document.createElement("div");
            gridcont.innerText=(b+(i*3));
            gridcont.setAttribute("class", "numbers");
            gridcont.setAttribute("id", "n"+(b+(i*3)));
            gridcont.addEventListener("click", function(){numbval((b+(i*3)));});
            div.appendChild(gridcont);
            } else {
            let gridcont=document.createElement("div");
            gridcont.innerText=("0");
            gridcont.setAttribute("class", "numbers");
            gridcont.setAttribute("id", "n0");
            gridcont.addEventListener("click", function(){numbval(0);});
            div.appendChild(gridcont);
            }
        }
        }
    }
        let c = 1;
        if (c == 1) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridbox");
        box.appendChild(div);
        let clear = document.createElement("div");
        clear.setAttribute("id", "clear");
        clear.setAttribute("class", "numbers");
        clear.innerText="C"
        clear.addEventListener("click", function(){clearnum()})
        div.appendChild(clear);
        let add = document.createElement("div");
        add.setAttribute("id", "add");
        add.setAttribute("class", "numbers");
        add.innerText="+"
        add.addEventListener("click", function(){mode("+")})
        div.appendChild(add);
        let subtract = document.createElement("div");
        subtract.setAttribute("id", "subtract");
        subtract.setAttribute("class", "numbers");
        subtract.innerText="-"
        subtract.addEventListener("click", function(){mode("-")})
        div.appendChild(subtract);
        }
        let div = document.createElement("div");
        div.setAttribute("class", "gridbox");
        box.appendChild(div);
        let multiply = document.createElement("div");
        multiply.setAttribute("id", "multiply");
        multiply.setAttribute("class", "numbers");
        multiply.innerText="*"
        multiply.addEventListener("click", function(){mode("*")})
        div.appendChild(multiply);
        let divide = document.createElement("div");
        divide.setAttribute("id", "divide");
        divide.setAttribute("class", "numbers");
        divide.innerText="/"
        divide.addEventListener("click", function(){mode("/")})
        div.appendChild(divide);
        let equal = document.createElement("div");
        equal.setAttribute("id", "clear");
        equal.setAttribute("class", "numbers");
        equal.innerText="="
        equal.addEventListener("click", function(){calculate()})
        div.appendChild(equal);
    }
creategrids()