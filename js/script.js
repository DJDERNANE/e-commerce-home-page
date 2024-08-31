var catBtn = document.getElementById('cat-btn')
var catList = document.getElementById('cat-list')

catBtn.addEventListener('click', function(){
    catBtn.classList.toggle('active')
    catList.classList.toggle('active')
})