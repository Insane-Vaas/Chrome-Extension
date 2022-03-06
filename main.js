const re1 = new RegExp(/\b(?:coding|programming|coding|java|dart|flutter|c|js|nodejs)\b/gi)
function onRemoved() {
    console.log(`Removed`);
  }
  
function onError(error) {
    console.log(`Error: ${error}`);
  
}

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function mainFunction(){

    var item = item = document.getElementsByClassName('style-scope ytd-video-primary-info-renderer');
    var dis = dis = document.getElementsByClassName('content style-scope ytd-video-secondary-info-renderer');
    var play_pause = document.getElementsByClassName('ytp-play-button ytp-button');
    const str1 = item[6].outerText.toString();
    const str2 = dis[0].outerText.toString();

    const matche1 = str1.match(re1);
    const matche2 = str2.match(re1);

    console.log(getCurrentTab());

    if((matche1 != null && matche1.length > 0) || (matche2 != null && matche2.length > 0)){

        console.log("Learning Detected!!");

    }
    else{
        
        console.log("Masti Nhi");
        play_pause[0].click();
        var removing = chrome.tabs.remove();
        removing.then(onRemoved, onError);


    }

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function(){

    await timeout(1300)
    mainFunction();

}
