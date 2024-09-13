// Step 01: Listing Element

document.getElementById("resumeForm")?.addEventListener('submit', function(event){
    event.preventDefault();



// Get Input
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("contact") as HTMLInputElement;
const adrElement = document.getElementById("adr") as HTMLInputElement;
const eduElement = document.getElementById("edu") as HTMLInputElement;
const expElement = document.getElementById("exp") as HTMLInputElement;
const skillElement = document.getElementById("skill") as HTMLInputElement;
const aboutElement = document.getElementById("about") as HTMLInputElement;
// const userNameElement = document.getElementById("username") as HTMLInputElement;


if(nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement){


    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const adrress = adrElement.value;
    const education = eduElement.value;
    const exp = expElement.value;
    const skill = skillElement.value;
    const about = aboutElement.value;
    // const userName = userNameElement.value;
    // const uniquePath = `resume/${userName.replace(/\s+/g, ' ')}_cv.html


    
//Get Output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name: </strong>${name}</p>
<p><strong>Email: </strong>${email}</p>
<p><strong>Phone Number: </strong>${phone}</p>
<p><strong>Country/City: </strong>${adrress}</p>

<h3>Objective: </h3>
<p>${about}</p>

<h3>Education: </h3>
<p>${education}</p>

<h3>Experience: </h3>
<p>${exp}</p>

<h3>Skills: </h3>
<p>${skill}</p>

`;


// const downloadLink = document.createElement('a')
// downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
// downloadLink.download = uniquePath;
// downloadLink.textContent = 'Download your Resume';


const resumeOutputElement = document.getElementById("resumeOutput")

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;

    resumeOutputElement.classList.remove("hidden");

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    resumeOutputElement.appendChild(buttonContainer);


    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download PDF";
    downloadButton.addEventListener('click', () => {
        window.print();
    });

    buttonContainer.appendChild(downloadButton);

    const shareLink = document.createElement('button');
    shareLink.textContent = "Copy Link";
    shareLink.addEventListener('click', async () => {
        try{
            const shareableLink = `https://yourdomain.com/resume/${name.replace(/\s+/g, ' ')}_cv.html`;

            await navigator.clipboard.writeText(shareableLink);
            alert(`Copied to clipboard`);
        }catch(err){
            console.error("Failed to copy link! " + err);
            alert("Faild to copy link try again later! ")
            
        }
    });
    buttonContainer.appendChild(shareLink);



    // makeEditable();
}else {
    console.error('Information missing');
    
}


}
});


function makeEditable(){
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener('click' , function(){
            const currElement = element as HTMLElement;
            const currValue = currElement.textContent || "";


            //Content Replace for make it editable

            if (currElement.tagName === "p" || currElement.tagName === "SPAN") {
                const input = document.createElement('input')
                input.type = "text"
                input.value = currValue
                input.classList.add('editing-input')

                input.addEventListener('blur' , function(){
                    currElement.textContent = input.value;
                    currElement.style.display = 'inline'
                    input.remove()
                })


                currElement.style.display = "none"
                currElement.parentNode?.insertBefore(input, currElement)
                input.focus()
            }

        })
    })
};



