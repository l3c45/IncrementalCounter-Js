let twitter
let facebook
let twich

function app(){
    function timer(limit,id,name){
        let count=0
        id=setInterval(myFunc,10,limit,name)
    
        function myFunc(limit,name){
            count += Math.floor(Math.random()*1000)
            $(`${name}`).text(count)
            count>limit&&clearInterval(id)
        }
    }
    
    timer(30000,twitter,"#twitter")
    timer(10000,facebook,"#facebook")
    timer(27000,twich,"#twich")
    
}

$(document).ready(app())