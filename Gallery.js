var fullImgBox = document.getElementById("Full-imgBox");
var fullimg = document.getElementById("Full-img");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullimg.src = pic;
}

    function closeFullImg(){
        fullImgBox.style.display = "none";
    }
