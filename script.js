
/*adding event listener to each flipping card, it flips horisontally showing whats on the other side and changes color*/
let boxes=document.querySelectorAll('.box');

let icons=["brandico-facebook-rect","brandico-tumblr-rect","brandico-linkedin-rect","brandico-instagram","brandico-github","brandico-github-text","brandico-tumblr-rect","brandico-github-text","brandico-linkedin-rect","brandico-instagram","brandico-skype","brandico-twitter-bird","brandico-github","brandico-twitter-bird","brandico-skype","brandico-facebook-rect"]
let divs=[];
for(let i=0;i<=boxes.length-1;i++){
    divs.push(boxes[i])
}

for(let i=0;i<=boxes.length-1;i++){
    boxes[i].addEventListener('click',function(ev){
        if(ev.target.style.backgroundColor != "rgb(9, 255, 0)"){
            ev.target.innerHTML=`<p class=${icons[i]}></p>`
            ev.target.setAttribute('style','animation-name: click;animation-duration: 1s;background-color: rgb(78, 112, 163);transform: rotateY(360deg);transition: transform 0.8s')
        }
            ev.preventDefault();
    })
}

// declaring counter for clicks, array to store the clicked cards, array to store whats inside the clicked cards, and a nodeList of all cards
let clickCount=0;
let clickArray=[];
let targetArray=[];

// starting a loop over the cards nodeList, and adding event listener to each one of them
for(i=0;i<=boxes.length-1;i++){
        boxes[i].addEventListener('click',function(ev){
            if(ev.target.style.backgroundColor != "rgb(9, 255, 0)"){
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
                        setTimeout(function(){
                            timeout[1].setAttribute('style','animation-name: wrong;animation-duration: 1s;animation-iteration-count:2;background-color: rgba(255, 255, 255, 0.281);transform: rotateY(360deg);transition: transform 0.8s')
                        },80)
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
            
        }
        })
    }


    

