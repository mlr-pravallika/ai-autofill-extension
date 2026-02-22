console.log("CONTENT SCRIPT RUNNING");
if(window.location.hostname.includes("linkedin"))
    console.log("LinkedIn mode activated")

console.log("AI Autofill Content Script Loaded")

// Listen for popup message
chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.action === "fillForm")
        await smartFill();

    if (msg.action === "fillRequired")
        await smartFill(true);
});

async function smartFill(requiredOnly=false){

    const fields = document.querySelectorAll("input, textarea, select");

    for (let field of fields){

        if(field.disabled || field.readOnly || field.type==="hidden")
            continue;

        if(requiredOnly && !field.required)
            continue;

        const label = getLabel(field).toLowerCase();

        try{

            // NAME
            if(label.includes("name"))
                field.value="Pravallika";

            // EMAIL
            else if(label.includes("mail"))
                field.value="pravallika@gmail.com";

            // PHONE
            else if(label.includes("phone"))
                field.value="9876543210";

            // LINKEDIN
            else if(label.includes("linkedin"))
                field.value="https://linkedin.com/in/pravallika";

            // PASSWORD
            else if(field.type==="password")
                field.value="Password@123";

            // DATE
            else if(field.type==="date")
                field.value="2024-12-31";

            // NUMBER
            else if(field.type==="number")
                field.value=25;

            // RANGE
            else if(field.type==="range")
                field.value=60;

            // COLOR
            else if(field.type==="color")
                field.value="#00ff88";

            // CHECKBOX
            else if(field.type==="checkbox")
                field.checked=true;

            // RADIO
            else if(field.type==="radio")
                field.checked=true;

            // SELECT
            else if(field.tagName==="SELECT")
                field.selectedIndex=1;

            // FILE UPLOAD
            else if(field.type==="file"){
                console.log("File upload requires manual selection for security");
            }

            // TEXTAREA AI ANSWER
            else if(field.tagName==="TEXTAREA"){

                const question = field.placeholder || label || "Tell about yourself";

                const res = await fetch("http://localhost:3000/ask",{
                    method:"POST",
                    headers:{ "Content-Type":"application/json" },
                    body:JSON.stringify({question})
                });

                const data = await res.json();

                field.value=data.answer;
            }

            // NORMAL TEXT
            else if(field.type==="text")
                field.value="Demo Text";

            field.style.background="#d4ffd4";

            trigger(field);

        }catch(err){
            console.log("Fill error:",err);
        }
    }

    alert("🚀 Smart AI Autofill Completed");
}



function getLabel(field){

    let label="";

    if(field.labels?.length)
        label=field.labels[0].innerText;

    if(!label && field.placeholder)
        label=field.placeholder;

    if(!label && field.name)
        label=field.name;

    if(!label && field.id)
        label=field.id;

    return label;
}

function trigger(el){
    el.dispatchEvent(new Event("input",{bubbles:true}));
    el.dispatchEvent(new Event("change",{bubbles:true}));
}

const submitBtn = document.querySelector("button[type=submit], input[type=submit]");

if (submitBtn)
    submitBtn.style.border = "3px solid lime";