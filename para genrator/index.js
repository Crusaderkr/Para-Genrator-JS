const input = document.getElementById("numOfWords");
const container= document.querySelector(".container");

const generateWord = (n)=>{
const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text= "";
for (let i = 0; i<n; i++){
    const random= (Math.random() *(letters.length-1)).toFixed(0)
    text+= letters[random];
}
return text;    
}
console.log(generateWord(15));

let numOfWords;
const generatePara =()=>{

    numOfWords= Number(input.value);
    const para = document.createElement("p");

    let data="";
    const randomNumber= (Math.random()*15).toFixed(0);
for(let i=0;i<numOfWords;i++){
    console.log(generateWord((Math.random()*15).toFixed(0)));
    data+= generateWord(randomNumber);
    data+= " ";
}
console.log(data);
    para.innerText =data;

    para.setAttribute("class", "paras");

    container.append(para)
};


