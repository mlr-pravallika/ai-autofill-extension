console.log("Smart Autofill Loaded");
console.log("Smart Autofill Active");

// LISTENER
chrome.runtime.onMessage.addListener((msg)=>{
if(msg.action==="fillAll") fillForm(false)
if(msg.action==="fillRequired") fillForm(true)
})

async function fillForm(requiredOnly){

const data = await chrome.storage.local.get("profile")
const profile = data.profile || {}

const fields = document.querySelectorAll("input, textarea, select")

fields.forEach(field=>{

if(requiredOnly && !field.required) return
if(field.disabled || field.readOnly) return

let labelText = ""
let label = document.querySelector(`label[for="${field.id}"]`)
if(label) labelText = label.innerText.toLowerCase()

let key = (
(field.name||"")+
(field.id||"")+
(field.placeholder||"")+
labelText
).toLowerCase()

let value=""

// SMART MATCHING
if(key.includes("name"))
value = profile.name || "John Doe"

else if(key.includes("mail") || key.includes("email"))
value = profile.email || "demo@mail.com"

else if(key.includes("phone") || key.includes("mobile"))
value = profile.phone || "9876543210"

else if(key.includes("date"))
value = "2025-01-01"

else if(field.type==="password")
value = "Password@123"

else if(field.type==="color")
value = "#22c55e"

else if(field.tagName==="SELECT"){
if(field.options.length>1) field.selectedIndex=1
return
}

else if(field.type==="checkbox" || field.type==="radio"){
field.checked=true
return
}

else
value="Demo"

// APPLY VALUE SAFELY
try{

if(field.type==="checkbox" || field.type==="radio"){
    field.checked=true
}

else if(field.type==="range"){
    field.value = field.min || 1
}

else if(field.type==="file"){
    return // cannot autofill file inputs
}

else if(field.tagName==="SELECT"){
    if(field.options.length>1) field.selectedIndex=1
}

else{
    field.value=value
}

field.dispatchEvent(new Event("input",{bubbles:true}))
field.dispatchEvent(new Event("change",{bubbles:true}))

field.style.background="#d4ffd4"

}catch(err){
console.warn("Skipped field:",field)
}

// highlight filled fields
field.style.background="#d4ffd4"

})

}