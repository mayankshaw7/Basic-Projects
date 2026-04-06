let parah=document.querySelector('p');
let inp=document.querySelector('textarea');

inp.addEventListener('input',function(){
    console.log(this.value);
    parah.innerText=this.value;
});