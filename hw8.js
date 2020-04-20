// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//localStorage.clear();
let textArea=document.createElement('textarea');

document.body.appendChild(textArea);
//let textarea=document.getElementsByTagName('textarea');
textArea.oninput=()=>
{localStorage.setItem('text',textArea.value)};
function gettext(){
    textArea.value=localStorage.getItem('text');

}
gettext();
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let texts=document.getElementsByName('textarea2');

for (const eltext of texts) {
    console.log(eltext);
    eltext.oninput=()=>{localStorage.setItem(eltext.id,eltext.value)};
}
function gettext1(){
    for (const eltext of texts) {


        eltext.value = localStorage.getItem(eltext.id);

    }
}
gettext1();


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их,
// затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории -
// нажатеи кнопки сохранить).
let div2=document.createElement("div");
document.body.appendChild(div2);

let p=document.createElement('p');
p.style=[' display: flex;flex-direction: row;justify-content: space-between;width:150px;margin-bottom:0'];
div2.appendChild(p);

let btnleft=document.createElement('button');
btnleft.innerText='left';
btnleft.style.display='none';
p.appendChild(btnleft);

let btnRight=document.createElement('button');
btnRight.innerText='right';
btnRight.style.display='none';
p.appendChild(btnRight);

let textArea2=document.createElement('textarea');
div2.appendChild(textArea2);
let btnSavedoc=document.createElement('button');
btnSavedoc.innerText='save';
div2.appendChild(btnSavedoc);
let arr=[];

btnSavedoc.onclick=function () {
arr.push(textArea2.value);
let str=JSON.stringify(arr);
        localStorage.setItem("arr",str);


    };
let arr1=JSON.parse(localStorage.getItem("arr"));
if(arr1.length>0){
btnleft.style=['display:block'];
btnRight.style=['display:block'];
}



let current = 0;

function next() {
    goTo(current+1);
}

function previous() {
    goTo(current-1);
}
function goTo(n) {
   // arr1[current]= 'slide';
    current = (n+arr1.length)%arr1.length;
textArea2.value=arr1[current];
}

btnRight.onclick=function () {
next()
};
btnleft.onclick=function () {
previous()
};


l
