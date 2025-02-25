const inputslider=document.getElementById("inputslider");
const slidevalue=document.getElementById("slidevalue");
const inputbox=document.getElementById("inputbox");
const pass=document.getElementById("Password");
const lowercase=document.getElementById("lowercase");
const uppercase=document.getElementById("uppercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const button1=document.getElementById("btn" );
const copyicon=document.getElementById("copy");

const lowercaseLetter="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const symbol="!@#$%^&*()_+[]{}|;:,.<>?";

slidevalue.textContent=inputslider.value;
inputslider.addEventListener("input",()=>{
    slidevalue.textContent=inputslider.value;
})

button1.addEventListener("click",()=>{
    pass.value=generatePassword();


});
function generatePassword(){
    const length=inputslider.value;
    let character="";
    let password="";
     
    character+=lowercase.checked?lowercaseLetter:"";
    character+=uppercase.checked?uppercaseLetter:"";
    character+=numbers.checked?number:"";
    character+=symbols.checked?symbol:"";

    for(let i=0;i<length;i++){
        password+=character.charAt(Math.floor(Math.random()*character.length));
        console.log(password);
    }
    return password;
    

}
copyicon.addEventListener("click",()=>{
    if(pass.value!="" || pass.value.length>=10){
        navigator.clipboard.writeText(pass.value);
        copyicon.innerHTML='<i class="fa-solid fa-check"></i>';
        
        setTimeout(()=>{
            copyicon.innerHTML='<i class="fa-regular fa-copy"></i>';
        },3000)

    }

})