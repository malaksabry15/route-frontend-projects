
let sidebar = document.querySelector(".sidebar");
let side_menu = document.querySelector(".side-menu");
let bar_icon = document.querySelector(".header-bar i");
let rowData = document.getElementById("rowData");
let search = document.getElementById("search");
let menuItems = sidebar.querySelectorAll("li"); 
let loading=document.querySelector(".loading")



function showLoading() {
    loading.style.display = "flex";
}

function hideLoading() {
    loading.style.display = "none";
}

document.querySelector(".bar").addEventListener("click", () => {
    if (bar_icon.classList.contains("fa-bars")) {
        openSidebar();
    } else {
        closeSidebar();
    }
});

function openSidebar() {
    bar_icon.className = "bar fa-solid fa-xmark fa-2x text-black ";
    sidebar.classList.add("active");

    menuItems.forEach((li, index) => {
       
        

        setTimeout(() => {
            li.style.opacity = "1";
            li.style.transform = "translateY(0)";
            li.style.transitionDelay = `${index * 0.15}s`; 
        }, 50);
    });
}

function closeSidebar() {
    bar_icon.className = "bar fa-solid fa-bars fa-2x text-black";
    sidebar.classList.remove("active");

    menuItems.forEach(li => {
        li.style.opacity = "";
        li.style.transform = "";
        li.style.transition = "";
        li.style.transitionDelay = "";
    });
}


async function getdata(){
     showLoading()
    search.innerHTML=''
    rowData.innerHTML=''
    let x=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let response=await x.json()
    console.log(response)
    display(response.meals)
    hideLoading()
}
getdata()
function display(arr){
let box=``
for(let i=0;i<arr.length;i++){
    if(i==20)
        break;
    box+=`<div class="col-md-3 text-black">
    <div onclick=" getDetails('${arr[i].idMeal}')" class="box position-relative overflow-hidden ">
            <img src="${arr[i].strMealThumb}" alt="" class="w-100  rounded-2">
             <div class=" layer position-absolute w-100     d-flex align-items-center rounded-2" ><h3 class=" ps-2" >${arr[i].strMeal}</h3></div>
        </div>
        </div>`
}
rowData.innerHTML=box
}

async function getCategory(){
    showLoading()
    rowData.innerHTML=''
    search.innerHTML=''
    let x=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let categories=await x.json()
    console.log(categories)
    displayCategory(categories.categories)
    hideLoading()
}
// getCategory()
function displayCategory(arr){
    let box=``
for(let i=0;i<arr.length;i++){
    box+=`<div class="col-md-3 text-center ">
    <div onclick="getCategoryMeal('${arr[i].strCategory}')" class="box position-relative overflow-hidden text-black" >
    
            <img src="${arr[i].strCategoryThumb}" alt="" class="w-100 rounded-2">
        <div class=" layer position-absolute w-100  rounded-2" ><h3 class=" ps-2 " >${arr[i].strCategory}</h3>
        <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
        </div>
            </div></div>`
}

rowData.innerHTML=box
}
async function getCategoryMeal(category){
    showLoading()
rowData.innerHTML=''
search.innerHTML=''
let x= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
let response=await x.json()
console.log(response)
display(response.meals)
hideLoading()
}
 async function getArea(){
    showLoading()
    rowData.innerHTML=''
    search.innerHTML=''
    let x=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let area=await x.json()
    console.log(area)
    displayArea(area.meals)
    hideLoading()
 }
//  getArea()
 function displayArea(arr){
        let box=``
for(let i=0;i<arr.length;i++){
    box+=`<div class="col-md-3 text-center  " onclick="getAreaMeal('${arr[i].strArea}')">
            <i class="fa-solid fa-house-laptop fa-4x "></i>
            <h3 >${arr[i].strArea}</h3>
        </div>`
    }
    rowData.innerHTML=box
 }
 async function getAreaMeal(area){
    showLoading()
    rowData.innerHTML=''
    search.innerHTML=''
    let x=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let response=await x.json()
    console.log(response)
    display(response.meals)
    hideLoading()
 }


async function getIngredients() {
    showLoading()
    rowData.innerHTML=''
    search.innerHTML=''
    let x=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let response=await x.json()
    console.log(response)
displayIngredients(response.meals.slice(0,20))
hideLoading()

}
// getIngredients()
function displayIngredients(arr){
         let box=``
for(let i=0;i<arr.length;i++){
    box+=`<div class="col-md-3 text-center" onclick="getIngredientMeal('${arr[i].strIngredient}')">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3 >${arr[i].strIngredient}</h3>
            <p>${arr[i].strDescription.split(' ').slice(0,20).join(' ')}</p>
        </div>`
    }
    rowData.innerHTML=box

}

async function getIngredientMeal(ingredient) {
     showLoading()
     search.innerHTML=''
    rowData.innerHTML=''
    
    let x=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    let response=await x.json()
    console.log(response)
    display(response.meals)
     hideLoading()
    
}

async function getDetails(id){
    showLoading()
search.innerHTML=''
let x=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
let response= await x.json()

console.log(response)
displayDetails(response.meals[0])
hideLoading()
}
function displayDetails(meal){
    let tags
    if(meal.strTags){
         tags=meal.strTags.split(',')

    }
    else{
        tags=[]
    }
    let arr=``
    for(let i=0;i<tags.length;i++){
        arr+=`<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    rowData.innerHTML=''
    let ingredients=``
    for(let i=0 ;i<20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients+=`<li class="alert alert-info m-2 p-1 ">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }
    let box=`
    <div class="col-md-4 ps-3">

<div class="image">
    <img src='${meal.strMealThumb}' alt="" class=" w-100 my-3">
    <h2>${meal.strMeal}</h2>
</div>


</div>
<div class="col-md-8 ">
    <h2 class=" my-3">Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3 class="my-3">Area:${meal.strArea}</h3>
    <h3 class="my-4">Category:${meal.strCategory}</h3>
    <h3 class="my-2">Recipes:
    <ul class=" d-flex g-2 flex-wrap my-2">
     ${ingredients}
    </ul>
    </h3>
    
    <h3>Tags:<ul class=" d-flex g-2 flex-wrap">
     ${arr}
    </ul></h3>
    <a href="${meal.strSource}" target="_blank" class=" btn btn-success">source</a>
<a href="${meal.strYoutube}" target="_blank" class=" btn btn-danger">youtube</a>
</div>
    `
    rowData.innerHTML=box

}
function searchInputs(){
    showLoading()
    search.innerHTML=`
    <div class="col-md-6  ">
            <input oninput="searchByName(this.value)" class="form-control bg-transparent text-white my-2" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input oninput="searchByLetter(this.value)" maxlength="1" class="form-control my-2 bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    `
   rowData.innerHTML=''
   hideLoading()
}
async function searchByName(name) {
    closeSidebar()
    rowData.innerHTML=''
    let x= await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let response= await x.json()
    display(response.meals)
}

async function searchByLetter(letter) {
    closeSidebar()
    rowData.innerHTML = '';
    letter == "" ? letter = "a" : "";
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let response = await x.json();
    display(response.meals);
}


function showContacts() {
    showLoading()
    search.innerHTML=''
    rowData.innerHTML = `
<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">

            <div class="col-md-6">
                <input id="name" onkeyup="handleInput(this)" type="text" class="form-control" placeholder="Enter Your Name">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>

            <div class="col-md-6">
                <input id="email" onkeyup="handleInput(this)" type="email" class="form-control" placeholder="Enter Your Email">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid example@yyy.zzz
                </div>
            </div>

            <div class="col-md-6">
                <input id="phone" onkeyup="handleInput(this)" type="text" class="form-control" placeholder="Enter Your Phone">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>

            <div class="col-md-6">
                <input id="age" onkeyup="handleInput(this)" type="number" class="form-control" placeholder="Enter Your Age">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>

            <div class="col-md-6">
                <input id="password" onkeyup="handleInput(this)" type="password" class="form-control" placeholder="Enter Your Password">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Minimum eight characters, at least one letter and one number
                </div>
            </div>

            <div class="col-md-6">
                <input id="repassword" onkeyup="handleInput(this)" type="password" class="form-control" placeholder="Repassword">
                <div class="alert alert-danger w-100 mt-2 d-none">
                    Password not matched
                </div>
            </div>

        </div>

        <button id="submitBtn" disabled onclick="clearAllInputs()" class="btn btn-outline-danger px-2 mt-3">
            Submit
        </button>
    </div>
</div>
`;
hideLoading()
}



function handleInput(ele) {
    Alert(ele);
    updateSubmitButton();
}



function Alert(ele) {
    let isValid = validateValue(ele);

    let alertBox = ele.nextElementSibling;

    if (isValid) {
        alertBox.classList.add("d-none");
        alertBox.classList.remove("d-block");
    } else {
        alertBox.classList.remove("d-none");
        alertBox.classList.add("d-block");
    }

    return isValid;
}


function validateValue(ele) {
    let regex = {
        name: /^[a-zA-Z ]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^(010|011|012|015)[0-9]{8}$/,
        age: /^(?:[1-9][0-9]?|100)$/,
        password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
        repassword: null
    };

    if (ele.id === "repassword") {
        return ele.value !== "" &&
               ele.value === document.getElementById("password").value;
    }

    return regex[ele.id].test(ele.value);
}



function updateSubmitButton() {
    let submitBtn = document.getElementById("submitBtn");

    let allValid =
        validateValue(document.getElementById("name")) &&
        validateValue(document.getElementById("email")) &&
        validateValue(document.getElementById("phone")) &&
        validateValue(document.getElementById("age")) &&
        validateValue(document.getElementById("password")) &&
        validateValue(document.getElementById("repassword"));

    if (allValid) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", true);
    }
}


function clearAllInputs() {
    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.value = "";

        let alertBox = input.nextElementSibling;
        if (alertBox) {
            alertBox.classList.add("d-none");
            alertBox.classList.remove("d-block");
        }
    });

    document.getElementById("submitBtn").setAttribute("disabled", true);
}

