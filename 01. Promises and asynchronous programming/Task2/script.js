var body = document.querySelector("body");
var button = document.querySelector("button");
var popup = document.createElement("div");
var message = document.createElement("h2");
var promise;

message.innerHTML = "*popup div ... i guess* Redirecting ...";
popup.appendChild(message);


promiseClick = new Promise(function (resolve){
    button.addEventListener("click", function(clicked){
        resolve(true);
    });
});

promiseClick.then(callPopup).then(timeout);

function callPopup(clicked){
    if (clicked){
        body.appendChild(popup);
        return true;
    }
}

function timeout(shouldContinue){
    if(shouldContinue){
        setTimeout(redirect, 2000);
    }
}

function redirect(){
    window.open("./index2.html", "_self");
}