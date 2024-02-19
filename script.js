function beforesubmit(){
    let x=document.querySelector(".outputdate");
    let y=document.querySelector(".inputdate");
    
    
    let formattedDate= new Date(y.value).toLocaleDateString("en-US");
    x.value = formattedDate;
    console.log('cccc :: ',x.value);
    console.log('cccc :: ',typeof x.value);
}
function timestamp() 
{ var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") 
{var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
elems["ts"] = JSON.stringify(new Date().getTime());
document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
} } setInterval(timestamp, 500);