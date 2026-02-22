console.log("Popup loaded");
async function send(action){
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    await chrome.tabs.sendMessage(tab.id,{action});
}

document.getElementById("fill").onclick=()=>send("fillForm");
document.getElementById("req").onclick=()=>send("fillRequired");