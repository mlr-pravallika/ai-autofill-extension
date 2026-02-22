console.log("Smart Autofill Loaded");
console.log("AI Autofill Running");

/* PROFILE DATA */
const profile = {
  name: "Pravallika",
  email: "pravallika@gmail.com",
  phone: "9876543210",
  city: "Hyderabad",
  college: "XYZ University",
  degree: "BTech Computer Science",
  skills: "JavaScript, Python, React, SQL",
  experience: "Fresher",
  about: "Motivated developer passionate about building scalable applications."
};


/* MESSAGE LISTENER */
chrome.runtime.onMessage.addListener((msg)=>{
  if(msg.action==="fillAll") smartFill(false);
  if(msg.action==="fillRequired") smartFill(true);
});


async function smartFill(requiredOnly){

  const fields=[
    ...document.querySelectorAll("input,textarea,select"),
    ...document.querySelectorAll('[contenteditable="true"]')
  ];

  for(const field of fields){

    if(requiredOnly && !field.required) continue;

    const label = detectLabel(field).toLowerCase();

    const value = matchValue(label,field.type);

    if(value) await typeLikeHuman(field,value);

    triggerEvents(field);

    highlight(field);

    await sleep(120);
  }

  console.log("DONE");
}



/* DETECT LABEL */
function detectLabel(field){

  return (
    field.name ||
    field.id ||
    field.placeholder ||
    field.getAttribute("aria-label") ||
    field.closest("label")?.innerText ||
    ""
  );
}



/* MATCH FIELD VALUE */
function matchValue(label,type){

  if(label.includes("name")) return profile.name;
  if(label.includes("mail")) return profile.email;
  if(label.includes("phone")) return profile.phone;
  if(label.includes("city")) return profile.city;
  if(label.includes("college")) return profile.college;
  if(label.includes("degree")) return profile.degree;
  if(label.includes("skill")) return profile.skills;
  if(label.includes("experience")) return profile.experience;
  if(label.includes("about")||label.includes("summary"))
    return profile.about;

  if(type==="email") return profile.email;
  if(type==="tel") return profile.phone;

  return null;
}



/* HUMAN TYPING SIMULATION */
async function typeLikeHuman(el,text){

  el.focus();
  el.value="";

  for(const char of text){
    el.value+=char;
    el.dispatchEvent(new Event("input",{bubbles:true}));
    await sleep(25);
  }
}



/* EVENTS FOR REACT FORMS */
function triggerEvents(el){

  el.dispatchEvent(new Event("change",{bubbles:true}));
  el.dispatchEvent(new Event("blur",{bubbles:true}));
}



/* HIGHLIGHT */
function highlight(el){
  el.style.background="#d4ffd4";
}



/* DELAY */
function sleep(ms){
  return new Promise(r=>setTimeout(r,ms));
}
const submitBtn = document.querySelector("button[type=submit], input[type=submit]");
if (submitBtn) {
    submitBtn.style.border = "3px solid lime";
}
    