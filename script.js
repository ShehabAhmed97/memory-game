
/*adding event listener to each flipping card, it flips horisontally showing whats on the other side and changes color*/
let boxes=document.querySelectorAll('.box');
let correct=[];
for(i=0;i<16;i++){
    correct.push(false)
}
const one=document.getElementById('one')
    one.addEventListener('click',function(ev){
        one.innerHTML='<p class="brandico-facebook-rect"></p>'
        one.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
        ev.preventDefault();
    })

const sixteen=document.getElementById('sixteen')
    sixteen.addEventListener('click',function(ev){
        sixteen.innerHTML='<p class="brandico-facebook-rect"></p>'
        sixteen.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
        ev.preventDefault();
    })


const two=document.getElementById('two')
two.addEventListener('click',function(ev){
    two.innerHTML='<p class="brandico-tumblr-rect"></p>'
    two.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const seven=document.getElementById('seven')
seven.addEventListener('click',function(ev){
    seven.innerHTML='<p class="brandico-tumblr-rect"></p>'
    seven.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const nine=document.getElementById('nine')
nine.addEventListener('click',function(ev){
    nine.innerHTML='<p class="brandico-linkedin-rect"></p>'
    nine.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const three=document.getElementById('three')
three.addEventListener('click',function(ev){
    three.innerHTML='<p class="brandico-linkedin-rect"></p>'
    three.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const four=document.getElementById('four')
four.addEventListener('click',function(ev){
    four.innerHTML='<p class="brandico-instagram"></p>'
    four.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const ten=document.getElementById('ten')
ten.addEventListener('click',function(ev){
    ten.innerHTML='<p class="brandico-instagram"></p>'
    ten.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const five=document.getElementById('five')
five.addEventListener('click',function(ev){
    five.innerHTML='<p class="brandico-github"></p>'
    five.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const thirteen=document.getElementById('thirteen')
thirteen.addEventListener('click',function(ev){
    thirteen.innerHTML='<p class="brandico-github"></p>'
    thirteen.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const six=document.getElementById('six')
six.addEventListener('click',function(ev){
    six.innerHTML='<p class="brandico-github-text"></p>'
    six.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const eight=document.getElementById('eight')
eight.addEventListener('click',function(ev){
    eight.innerHTML='<p class="brandico-github-text"></p>'
    eight.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const eleven=document.getElementById('eleven')
eleven.addEventListener('click',function(ev){
    eleven.innerHTML='<p class="brandico-skype"></p>'
    eleven.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const fifteen=document.getElementById('fifteen')
fifteen.addEventListener('click',function(ev){
    fifteen.innerHTML='<p class="brandico-skype"></p>'
    fifteen.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const twelve=document.getElementById('twelve')
twelve.addEventListener('click',function(ev){
    twelve.innerHTML='<p class="brandico-twitter-bird"></p>'
    twelve.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

const fourteen=document.getElementById('fourteen')
fourteen.addEventListener('click',function(ev){
    fourteen.innerHTML='<p class="brandico-twitter-bird"></p>'
    fourteen.setAttribute('style','animation-name: click;animation-duration: 2s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
    ev.preventDefault();
})

// declaring counter for clicks, array to store the clicked cards, array to store whats inside the clicked cards, and a nodeList of all cards
let clickCount=0;
let clickArray=[];
let targetArray=[];

// starting a loop over the cards nodeList, and adding event listener to each one of them
for(i=0;i<=boxes.length-1;i++){
        boxes[i].addEventListener('click',function(ev){
            // keep pushing the clicked cards, whats inside them in the declared arrays, and count the clicks, if the number of clicks is less than two
            if(clickCount<2){
                clickCount++;
                clickArray.push(ev.target.innerHTML);
                targetArray.push(ev.target)

                // once there are two clicks, check if the two clicked cards are similer or different
                if(targetArray.length==2){

                    // checking if the player hit the same card twice in a row
                    if(targetArray[0]===targetArray[1]){
                        targetArray[0].setAttribute('style','background-color: rgba(255, 255, 255, 0.281);transform: rotateY(360deg);transition: transform 0.8s')
                        targetArray[0].removeChild(targetArray[0].firstElementChild);
                    }
                    if(clickArray[0]===clickArray[1] && targetArray[0]!=targetArray[1]){
                       
                        // adding some styling incase of similar cards
                        targetArray[0].setAttribute('style','animation-name: right;animation-duration: 1s;animation-iteration-count:3;background-color: rgb(9, 255, 0);')
                        targetArray[1].setAttribute('style','animation-name: right;animation-duration: 1s;animation-iteration-count:3;background-color: rgb(9, 255, 0);transform: rotateY(360deg);transition: transform 0.8s')
                    }else if(clickArray[0]!=clickArray[1] && targetArray[0]!=targetArray[1]){
                       
                        // adding some styling incase of different cards, and hide the card again
                        targetArray[0].setAttribute('style','animation-name: wrong;animation-duration: 1s;animation-iteration-count:2;background-color: rgba(255, 255, 255, 0.281);')
                        targetArray[1].setAttribute('style','animation-name: wrong;animation-duration: 1s;animation-iteration-count:2;background-color: rgba(255, 255, 255, 0.281);transform: rotateY(360deg);transition: transform 0.8s')

                        // delaying the hidding of the cards
                        setTimeout(function(){
                        timeout[0].removeChild(timeout[0].firstElementChild);
                        timeout[1].removeChild(timeout[1].firstElementChild);
                        },2000)
                        }

                        // declaring new variables for the delayed function to use
                        var timeout=[targetArray[0],targetArray[1]];

                        // set back the counter and the declared arrays to zero and empty arrays, to allow the process to repeat again
                        clickCount=0;
                        clickArray=[];
                        targetArray=[];
            }
            }
            ev.preventDefault();
        })
    }


    

