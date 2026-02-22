document.addEventListener("DOMContentLoaded", () => {

const fillAllBtn = document.getElementById("fillAll")
const requiredBtn = document.getElementById("fillRequired")
const saveBtn = document.getElementById("save")

if(fillAllBtn)
fillAllBtn.onclick = async () => {
const [tab] = await chrome.tabs.query({active:true,currentWindow:true})
chrome.tabs.sendMessage(tab.id,{action:"fillAll"})
}

if(requiredBtn)
requiredBtn.onclick = async () => {
const [tab] = await chrome.tabs.query({active:true,currentWindow:true})
chrome.tabs.sendMessage(tab.id,{action:"fillRequired"})
}

if(saveBtn)
saveBtn.onclick = () => {
alert("Data Saved ✅")
}

})