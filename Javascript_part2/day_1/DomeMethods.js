let d1=document.getElementById("div");
console.log(d1);
d1.innerHTML="good moring";


let s1=document.getElementById("section");
console.log(s1);
s1.textContent="good night";

let a1=document.getElementById("article");
console.log(a1);
a1.innerHTML="<div>hi</div";
let h3=document.getElementById("h3");
console.log(h3);
h3.textContent="<div>hello</div>";


let p1=document.getElementsByClassName("div1");
console.log(p1);
p1[0].innerHTML="pubg";
p1[1].innerHTML="free fire"



let p2=document.getElementById("div3");

let check1=document.createElement("article");
console.log(check1);
check1.textContent="article is created";

let check2=p2.appendChild(check1);
console.log(check2);



let c1=document.getElementsByClassName("one");
console.log(c1);

for(let i=0;i<5;i++)
{
    c1[i].innerHTML="Subash";
}



