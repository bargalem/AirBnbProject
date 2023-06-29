
 
let sltdDate1=document.getElementById("sltdDate1").value;


let  sltdDate2=document.getElementById("sltdDate2").value;
 
let btn=document.getElementById("btn");






function addguest(){

   document.getElementById("setgut").innerHTML=
   (formid.selectGest[formid.selectGest.selectedIndex].text)
}


function selectd(){
   let sltdDate1=document.getElementById("sltdDate1").value;

let  sltdDate2=document.getElementById("sltdDate2").value;
 
var d1=new Date(sltdDate1).getDate();
var d2=new Date(sltdDate2).getDate();
const time1=Math.abs(d2-d1);
// const diffday=Math.ceil(time/(1000 + 60 + 60 + 24));
console.log(time1);

let item=document.getElementById("setgut").innerHTML=
   (formid.selectGest[formid.selectGest.selectedIndex].text)


let dt1=d1;
let dt2=d2;
let diffdate=time1;
let itemselect=item;
 localStorage.setItem('diffdate',diffdate);
 localStorage.setItem('itemselect',itemselect);
 localStorage.setItem('selectdt1',dt1);
 localStorage.setItem('selectdt2',dt2);
 window.location.href='./confirm.html';


}



