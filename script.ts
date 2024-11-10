document.getElementById("resumeForm")?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("contact") as HTMLInputElement;
    const adrElement = document.getElementById("adr") as HTMLInputElement;
    const eduElement = document.getElementById("edu") as HTMLInputElement;
    const expElement = document.getElementById("exp") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;
    const aboutElement = document.getElementById("about") as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const adrress = adrElement.value;
        const education = eduElement.value;
        const exp = expElement.value;
        const skill = skillElement.value;
        const about = aboutElement.value;

        const resumeOutput = `
            <div class="resume-container">
                <h2 class="resume-header">Resume</h2>
                <div class="section">
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}</p>
                    <p><strong>Phone Number: </strong>${phone}</p>
                    <p><strong>Country/City: </strong>${adrress}</p>
                </div>

                <div class="section">
                    <h3>Objective</h3>
                    <p>${about}</p>
                </div>

                <div class="section">
                    <h3>Education</h3>
                    <p>${education}</p>
                </div>

                <div class="section">
                    <h3>Experience</h3>
                    <p>${exp}</p>
                </div>

                <div class="section">
                    <h3>Skills</h3>
                    <p>${skill}</p>
                </div>
            </div>
        `;

        // Open a new window and inject the HTML content
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(`
                <html>
                <head>
                    <title>Resume</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9; }
                        .resume-container {
                            max-width: 800px;
                            margin: auto;
                            background: #fff;
                            padding: 20px;
                            border: 1px solid #ddd;
                            border-radius: 8px;
                        }
                        .resume-header {
                            text-align: center;
                            color: #333;
                            font-size: 24px;
                            margin-bottom: 20px;
                            border-bottom: 2px solid #333;
                            padding-bottom: 10px;
                        }
                        .section {
                            margin-top: 20px;
                        }
                        .section h3 {
                            color: #555;
                            font-size: 20px;
                            border-bottom: 1px solid #ddd;
                            padding-bottom: 5px;
                            margin-bottom: 10px;
                        }
                        .section p {
                            line-height: 1.6;
                            font-size: 16px;
                            margin: 5px 0;
                        }
                        .no-print { display: flex; justify-content: center; margin-top: 20px; }
                        .no-print button {
                            padding: 10px 15px;
                            margin: 0 5px;
                            font-size: 16px;
                            cursor: pointer;
                            background-color: #007bff;
                            color: #fff;
                            border: none;
                            border-radius: 5px;
                        }
                        .no-print button:hover {
                            background-color: #0056b3;
                        }
                        /* Hide buttons in print mode */
                        @media print {
                            .no-print { display: none; }
                        }
                    </style>
                </head>
                <body>
                    ${resumeOutput}

                    <div class="no-print">
                        <button onclick="window.print()">Download PDF</button>
                        <button id="copyLinkButton">Copy Link</button>
                    </div>

                    <script>
                        document.getElementById("copyLinkButton").addEventListener('click', async () => {
                            try {
                                const shareableLink = "https://yourdomain.com/resume/${name.replace(/\s+/g, '_')}_cv.html";
                                await navigator.clipboard.writeText(shareableLink);
                                alert("Copied to clipboard!");
                            } catch (err) {
                                console.error("Failed to copy link! " + err);
                                alert("Failed to copy link, try again later!");
                            }
                        });
                    </script>
                </body>
                </html>
            `);

            newWindow.document.close(); // Helps the new page load properly
        } else {
            console.error("Unable to open a new window.");
        }
    } else {
        console.error('Information missing');
    }
});
