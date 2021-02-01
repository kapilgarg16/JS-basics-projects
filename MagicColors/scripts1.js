const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// window has many properity 
// console.log(window.getComputedStyle(red).backgroundColor)

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
// const orangecolor = getBGColor(orange)

        // // EVENT LISTNER
    // //devloper.mozilla.org

// orange.addEventListener('mouseenter',() =>{
    // //when we iplement stlyle just use style
// center.style.background = orangecolor;
// });
 
const magicolorChanger = (element,color)=>{
    
    return  element.addEventListener("mouseenter",() =>{
    center.style.background = color;
    });
};

magicolorChanger(red,getBGColor(red));
magicolorChanger(violet,getBGColor(violet));
magicolorChanger(pink,getBGColor(pink));
magicolorChanger(cyan,getBGColor(cyan));
magicolorChanger(orange,getBGColor(orange));