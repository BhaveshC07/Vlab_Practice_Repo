

function add(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let result=document.getElementById("result");
    let a=parseInt(num1.value);
    let fact=1;
    i=1;
    do{
        fact*=i;
        i++;
    }while(i<=a);
    result.value=fact;
}


function createtable(){
    let num1=document.getElementById("num1");
    let n=parseInt(num1.value);
    let table=document.getElementById("tb1");
    table.innerHTML="";
    let tbody="";
    for(i=1;i<=n;i++){
        tbody+= `<tr>
        <th scope="row">${i}</th>
       
        <td>${i*i}</td>
      </tr>`
    }
    table.innerHTML=tbody;
}
