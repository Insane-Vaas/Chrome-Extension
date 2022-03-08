const re1 = new RegExp(/\b(?:coding|programming|coding|java|dart|flutter|c|js|nodejs)\b/gi)

var arr = new Array;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.message === 'URLCHANGED!') {
        
        arr.push(request.url);
        if(arr.length%4 === 0)mainFunction();
    }
});

async function mainFunction(){

    var item = item = document.getElementsByClassName('style-scope ytd-video-primary-info-renderer');
    var dis = dis = document.getElementsByClassName('content style-scope ytd-video-secondary-info-renderer');
    var play_pause = document.getElementsByClassName('ytp-play-button ytp-button');
    const str1 = item[6].outerText.toString();
    const str2 = dis[0].outerText.toString();

    const matche1 = str1.match(re1);
    const matche2 = str2.match(re1);

    if((matche1 != null && matche1.length > 0) || (matche2 != null && matche2.length > 0)){

        console.log("Learning Detected!!");

    }
    else{
        
        console.log("Masti Nhi");
        play_pause[0].click();
        
    }

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function(){

    await timeout(1300)
    mainFunction();

}
