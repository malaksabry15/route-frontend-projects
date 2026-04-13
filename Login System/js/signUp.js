var SignUpBox=document.querySelector(".SignUpBox")
var signPassword=document.getElementById("signPassword")
var signName=document.getElementById("signName")
var signEmail=document.getElementById("signEmail")
var signUp=document.getElementById("signUp")
var signupBtn=document.querySelector(".signupBtn")
var signUpStatus=document.querySelector('.signUpStatus')




var arr=[]
if(localStorage.getItem("usersBox")!=null){
   arr= JSON.parse(localStorage.getItem("usersBox"))
    
}
signupBtn.addEventListener('click',function(){
    
    if(signName.value==""|| signEmail.value==""||signPassword.value=="" ){
       signUpStatus.innerHTML='All inputs is required '
       signUpStatus.style.color='red'
        
        return ;
        
    }
   
    
    if(SignUpValidation(signName)&&SignUpValidation(signEmail)&&SignUpValidation(signPassword)){
        for(let i=0;i<arr.length;i++){
        
        if(signEmail.value==arr[i].email){
             signUpStatus.innerHTML='Email already exist'
            signUpStatus.style.color='red'
            return;
            
        }
    }
        var users={
            name:signName.value,
            email:signEmail.value,
            password:signPassword.value
        }
        arr.push(users)
        localStorage.setItem('usersBox',JSON.stringify(arr))
        
         signUpStatus.innerHTML='sucess'
       signUpStatus.style.color='green'
        clear()
    

}
else{
    
      if(!SignUpValidation(signName)){
        
         signUpStatus.innerHTML='invalid user name  '
       signUpStatus.style.color='red'
    }
     else if(!SignUpValidation(signEmail)){
        
         signUpStatus.innerHTML='invalid Email '
       signUpStatus.style.color='red'
    }
     else if(!SignUpValidation(signPassword)){
        
         signUpStatus.innerHTML='invalid password'
       signUpStatus.style.color='red'
    }

}
})

function SignUpValidation(ele){
    input(ele)
    
    
    var regex={
        signName:/^[\w]{3,}$/,
        signEmail:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        signPassword:/^[\w]{8,15}$/
    }
    if(regex[ele.id].test(ele.value)){
         ele.classList.add("is-valid")
        ele.classList.remove("is-invalid")
        return true
    }
    else{
         ele.classList.add("is-invalid")
        ele.classList.remove("is-valid")
        return false
    }
}
function input(ele){
    ele.style.color='#fff'
}
 function clear(){
    signName.value=null;
    signEmail.value=null;
    signPassword.value=null;
    signEmail.classList.remove('is-valid')
    signEmail.classList.remove('is-invalid')
    signName.classList.remove('is-valid')
    signName.classList.remove('is-invalid')
    signPassword.classList.remove('is-valid')
    signPassword.classList.remove('is-invalid')


 }