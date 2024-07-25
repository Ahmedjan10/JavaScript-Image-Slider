let myImg = ["https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://kinsta.com/wp-content/uploads/2019/05/edit-wordpress-code-image.jpg",
 "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg","https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg"
]

let currenTndex = 0;
let totalImg = myImg.length;
let img = document.querySelector("#img")
let next = document.querySelector("#btn1")
let pre = document.querySelector("#btn2");
function showImg(){
    img.src = myImg[currenTndex]
}
next.addEventListener("click",()=>{
    currenTndex = (currenTndex + 1 ) %totalImg
    showImg()
})
pre.addEventListener("click",()=>{
    currenTndex = (currenTndex - 1 + totalImg ) %totalImg
    showImg()
})
showImg()


