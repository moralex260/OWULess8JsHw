// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//
// Данные вводить через соответсвующую форму.
//
// --Каждому контакту добавить кнопку для удаления контакта.
//
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//

class User {
    constructor(name, phonNumber, email, firm, department, birthday) {
        this.name = name;
        this.phonNumber = phonNumber;
        this.email = email;
        this.firm = firm;
        this.department = department;
        this.birthday = birthday

    }
}
let  user=new User("","","","","","");

let div4=document.createElement('div');
document.body.appendChild(div4);
div4.style.width='500px';
div4.style.backgroundColor='antiquewhite';


let pName=document.createElement('p');
div4.appendChild(pName);
let pPhonNumber=document.createElement('p');
div4.appendChild(pPhonNumber);
let pEmail=document.createElement('p');
div4.appendChild(pEmail);
let pFirm=document.createElement('p');
div4.appendChild(pFirm);
let pDepartment=document.createElement('p');
div4.appendChild(pDepartment);
let pBirthday=document.createElement('p');
div4.appendChild(pBirthday);

let p7=document.createElement('p');
p7.style.display='flex' ;
p7.style.flexDirection='row';
p7.style.justifyContent='space-between';
div4.appendChild(p7);

let btnSave=document.createElement('button');
btnSave.innerText="save person";
p7.appendChild(btnSave);

let btnDelete=document.createElement('button');
btnDelete.innerText="delete person";
p7.appendChild(btnDelete);

let btnEdit=document.createElement('button');
btnEdit.innerText="edit person";
p7.appendChild(btnEdit);

let btnShow=document.createElement('button');
btnShow.innerText="show person";
p7.appendChild(btnShow);

let arrP=[pName,pPhonNumber,pEmail,pFirm,pDepartment,pBirthday];

for (let j = 0; j <arrP.length ; j++) {
    arrP[j].style.display='flex' ;
    arrP[j].style.flexDirection='row';
        arrP[j].style.justifyContent='space-between';
            arrP[j].style.width='300px';
    arrP[j].style.marginBottom='0';
    let textArea3=document.createElement('textarea');
    textArea3.value="";
    textArea3.id=`textArea3${j+1}`;
    arrP[j].appendChild(textArea3);

}

 let textArea31=document.getElementById('textArea31');
let textArea32=document.getElementById('textArea32');
let textArea33=document.getElementById('textArea33');
let textArea34=document.getElementById('textArea34');
let textArea35=document.getElementById('textArea35');
let textArea36=document.getElementById('textArea36');

let arrayNote=[];
textArea31.oninput = function(){ user.name=textArea31.value};
textArea32.oninput = function(){user.phonNumber = textArea32.value};
textArea33.oninput = function(){user.email = textArea33.value};
textArea34.oninput = function(){user.firm = textArea34.value};
textArea35.oninput = function(){user.department = textArea35.value};
textArea36.oninput = function(){user.birthday = textArea36.value};

btnSave.onclick=function () {
    localStorage.setItem(`${user.name}`,JSON.stringify(user));
    console.log(user);
    arrayNote.push(user.name);
    localStorage.setItem('arrName',(JSON.stringify(arrayNote)))
};

let str=(JSON.parse(localStorage.getItem('arrName')));
if(str!==null){arrayNote=str}
console.log(arrayNote);


btnDelete.onclick=function () {
    localStorage.removeItem(`${textArea31.value}`);

    for (let i = 0; i < arrayNote.length; i++) {
        if (arrayNote[i] === textArea31.value) {
            arrayNote.splice(i , 1);
        }
    }
    localStorage.setItem('arrName',JSON.stringify(arrayNote));

    alert(`person ${textArea31.value} have been delete`)
};
// // btnEdit.onclick=function () {
// //     textArea31.value=`list of persons ${arraynote}`;
// //     textArea32.value='enter name from list under this area';
// //     textArea34.value=' edit person than press save button';
// //     textArea33.oninput=()=>{f(textArea33.value)}
// // };
//
//
function f(key) {

    let a = localStorage.getItem(key);
    a = JSON.parse(a);
    console.log(a);
    textArea31.value = a.name;
    textArea32.value = a.phonNumber;
    textArea33.value = a.email;
    textArea34.value = a.firm;
    textArea35.value = a.department;
    textArea36.value = a.birthday;
}

btnShow.onclick=function () {
    textArea31.value=`list of persons ${arrayNote}`;
    textArea32.value='enter name from list under this area';
    textArea33.oninput=()=>{f(textArea33.value)}

};