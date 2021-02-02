
const courses = [
    {
        Name: "Complete C course",
        Price: "4"
    },
    {
        Name: "Complete C++ course",
        Price: "1"
    },
    {
        Name: "Complete DSA course",
        Price: "2"
    },
    {
        Name: "Complete Python course",
        Price: "3"
    },
    {
        Name: "Complete JAVA course",
        Price: "0"
    },

];

//  <li class="list-group-item">Complete c++ course
// <span class="float-right">25$</span> 
// </li> 
function generateLIST()
{
    const ul = document.querySelector(".list-group");
    // for reset aftr updation
    ul.innerHTML = "";
    courses.forEach((course) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.Name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode(course.Price + " Ruppess");
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateLIST();


window.addEventListener("load",generateLIST);

const button = document.querySelector(".sort-btn")
button.addEventListener("click",() =>{
    courses.sort((a,b) => a.Price - b.Price)
    generateLIST();
});