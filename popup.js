document.addEventListener("DOMContentLoaded", () => {

  const fillAll = document.getElementById("fillAll");
  const fillRequired = document.getElementById("fillRequired");

  if(!fillAll || !fillRequired){
    console.error("Buttons not found");
    return;
  }

  fillAll.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({
      active:true,
      currentWindow:true
    });

    chrome.tabs.sendMessage(tab.id,{
      action:"fillAll"
    });

  });


  fillRequired.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({
      active:true,
      currentWindow:true
    });

    chrome.tabs.sendMessage(tab.id,{
      action:"fillRequired"
    });

  });

});