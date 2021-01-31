var counter = document.querySelector(".counter")
var follower = document.querySelector(".followers")

let count = 1;
setInterval(()=>{
    if(count<100)
    {
        count++;
        counter.innerText = count;
    }
    // else
    // {
    //     counter.innerText = "Total subscribe "+count;
    // }

},1);
setTimeout(() => {
    follower.innerText="My followers on linkdin";
},5000);