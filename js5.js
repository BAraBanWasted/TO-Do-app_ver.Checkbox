let addbut = document.getElementById('add')
let tasklist = document.getElementById ('tasklist')
let inp = document.getElementById ('inp')
const chek = document.getElementsByClassName('checkbox')
const cross = document.getElementsByTagName('img')
const boxses = document.getElementsByClassName('box')

addbut.onclick = add 

function add (){
    let newz = '<div class="box" id="box"><div class= "checkbox"></div><p>' + inp.value + '</p><img src="krest.png" alt=""></div>'
    tasklist.innerHTML+=newz
    update ()
}

function update (){
    for (c of chek){
        c.onclick = fchek
    }
    for (c of cross){
        c.onclick = fdel
    }
}

function fchek (){
    if (this.style.backgroundColor=='violet'){
        this.style.backgroundColor='white'
    }
    else {
        this.style.backgroundColor='violet'
    }
}

function fdel (){
    console.log('ok')
    console.log (this.parentNode)
    let parent=this.parentNode
    parent.style.display = 'none'
}