// local reviews data
const reviews = [
    {
      id: 1,
      name: "Kapil Garg",
      job: "web developer",
      img:
      "img1.jpeg",
      text:
        "This course is so good about resources we can easily understand what we can easily grab This is vary bebigicial for my future Thank you this type of course, keep it going",
    },
    {
      id: 2,
      name: "Kratik Khandelwal",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
       
      text:
        "When I started this course, I even have no knowledge about CP but time to time I growed up with course Thanks kapil for this type of website, Thankyou for everything",
    },
    {
      id: 3,
      name: "Krati Mitra",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
       
      text:
        "This Course was too good for my intern purpose Thank you for this type of course , I acquired knowledge a lot from this , thank you for this I will suggest you for every thing"
    },
    {
      id: 4,
      name: "Kartik Joshi",
      job: "Product Engineer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "I am feeling so confident afer this free course, This will proves me so good Thanks for this I would like to suggest to everyone",
    },
  ];

//       id: 1,
//       name: "Kapil Garg",
//       job: "web developer",
//       img:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//       text:

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem =0;

//load intial item
window.addEventListener("DOMContentLoaded", function(){
    showPersonDetails(currentItem);
});

function showPersonDetails(currentItem)
{
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem == reviews.length)
    currentItem=0;
    showPersonDetails(currentItem);
});
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0)
    currentItem=reviews.length - 1;
    showPersonDetails(currentItem);
});