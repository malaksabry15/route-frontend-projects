var LoginBox=document.querySelector(".LoginBox")
var loginbtn=document.querySelector(".loginbtn")
var loginPassword=document.getElementById("loginPassword")
var loginEmail=document.getElementById("loginEmail")
var loginStatus=document.querySelector(".loginStatus")
var passwordToggle=document.querySelector(".passwordToggle")



var arr=[]
if(localStorage.getItem("usersBox")!=null){
   arr= JSON.parse(localStorage.getItem("usersBox"))
    
}

loginbtn.addEventListener('click',function(){

     if( loginEmail.value==""||loginPassword.value=="" ){
       loginStatus.innerHTML='All inputs is required '
       loginStatus.style.color='red'
        
        return ;
        
    }
   var arr= JSON.parse(localStorage.getItem('usersBox'))
    let found=false
    for(let i=0 ;i<arr.length;i++){
        if(loginPassword.value==arr[i].password&& loginEmail.value==arr[i].email){
            found=true
            localStorage.setItem("currentUser",JSON.stringify(arr[i].name))
            break;
        }
    }
    if(found==true){
    location.href='user.html'
    
    }
    else{
        loginStatus.innerHTML='incorrect email or password'
        loginStatus.style.color='red'
    }
    
   
})
function input(ele){
    ele.style.color='#fff'
}


function inputPassword(ele){
    input(ele)
    if(ele.value.length>0){
passwordToggle.classList.remove('d-none')
}
else{
    passwordToggle.classList.add('d-none')

}


}
passwordToggle.addEventListener('click',function(){
    var type=loginPassword.getAttribute('type')
    if(type=='password'){
        loginPassword.setAttribute('type','text')
        passwordToggle.classList.remove('fa-eye')
        passwordToggle.classList.add('fa-eye-slash')

    }
    else{
      loginPassword.setAttribute('type', 'password');
      passwordToggle.classList.remove('fa-eye-slash');
      passwordToggle.classList.add('fa-eye');
    }
})