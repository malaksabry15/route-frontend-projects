var WelcomeBox=document.querySelector(".WelcomeBox")
var logoutBtn=document.querySelector(".logoutBtn")
onload=function(){
    
   var user= JSON.parse(localStorage.getItem('currentUser'))
   if(user){
    WelcomeBox.innerHTML=`<h1>Welcome ${user} </h1>`
   }
   
   

}
logoutBtn.addEventListener('click',function(){
    localStorage.removeItem('currentUser')
})
