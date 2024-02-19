function beforesubmit(){
    let x=document.querySelector(".outputdate");
    let y=document.querySelector(".inputdate");
    
    
    let formattedDate= new Date(y.value).toLocaleDateString("en-US");
    x.value = formattedDate;
    console.log('cccc :: ',x.value);
    console.log('cccc :: ',typeof x.value);
}
