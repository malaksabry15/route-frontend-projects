var siteName=document.getElementById("name")
var siteURL=document.getElementById("URL")
var closebtn=document.getElementById("alert")
var arr=[]
if(localStorage.getItem("container")!=null){
   arr= JSON.parse(localStorage.getItem("container"))
    display()
}
function validateForm(ele){
    var regex={
        name:/^.{3,}$/,
        URL:/^https?:\/\/[\w]+\.[\w]{2,}(\.[\w]{2,})?$/,
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
function submitBtn(){
    if(validateForm(siteName)&&validateForm(siteURL)){
    var info={
        name:siteName.value,
        url:siteURL.value,
    }
    arr.push(info)
    console.log(arr)
    localStorage.setItem("container",JSON.stringify(arr))
    display()
    clear()
    }
    else{
   closebtn.classList.remove('d-none')
   document.body.classList.add("layer")
   


}}

function closeBtn(){
closebtn.classList.add('d-none')
document.body.classList.remove("layer")
}
function display(){
   arr= JSON.parse(localStorage.getItem("container"))
    var box=``
    for(var i=0; i<arr.length; i++){
        box+=`<tr >
                    <td class=" py-3 ">${i+1}</td>
                    <td>${arr[i].name}</td>
                    <td><button id="visitbtn" type="button" onclick="visit(${i})" class=" btn text-white "><i class="fa-solid fa-eye pe-2 me-2"></i>Visit</button></td>
                    <td><button id="deletebtn" onclick="deleted(${i})" class=" btn text-white "><i class="fa-solid fa-trash-can me-2" ></i>Delete</button></td>
                </tr>`
    }
    document.getElementById("tableBody").innerHTML=box
    
}
function clear(){
    siteName.value=null;
    siteURL.value=null;
    siteName.classList.remove("is-valid")
    siteName.classList.remove("is-invalid")
    siteURL.classList.remove("is-valid")
    siteURL.classList.remove("is-invalid")
}

function deleted(index){
arr.splice(index,1)
localStorage.setItem("container", JSON.stringify(arr))
display()
}

function visit(index){
    window.open(arr[index].url,"_blank")
}