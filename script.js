var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("contact");
    var adrElement = document.getElementById("adr");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("exp");
    var skillElement = document.getElementById("skill");
    var aboutElement = document.getElementById("about");
    if (nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var adrress = adrElement.value;
        var education = eduElement.value;
        var exp = expElement.value;
        var skill = skillElement.value;
        var about = aboutElement.value;
        var resumeOutput = "\n            <div class=\"resume-container\">\n                <h2 class=\"resume-header\">Resume</h2>\n                <div class=\"section\">\n                    <p><strong>Name: </strong>".concat(name_1, "</p>\n                    <p><strong>Email: </strong>").concat(email, "</p>\n                    <p><strong>Phone Number: </strong>").concat(phone, "</p>\n                    <p><strong>Country/City: </strong>").concat(adrress, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h3>Objective</h3>\n                    <p>").concat(about, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h3>Education</h3>\n                    <p>").concat(education, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h3>Experience</h3>\n                    <p>").concat(exp, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h3>Skills</h3>\n                    <p>").concat(skill, "</p>\n                </div>\n            </div>\n        ");
        // Open a new window and inject the HTML content
        var newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write("\n                <html>\n                <head>\n                    <title>Resume</title>\n                    <style>\n                        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9; }\n                        .resume-container {\n                            max-width: 800px;\n                            margin: auto;\n                            background: #fff;\n                            padding: 20px;\n                            border: 1px solid #ddd;\n                            border-radius: 8px;\n                        }\n                        .resume-header {\n                            text-align: center;\n                            color: #333;\n                            font-size: 24px;\n                            margin-bottom: 20px;\n                            border-bottom: 2px solid #333;\n                            padding-bottom: 10px;\n                        }\n                        .section {\n                            margin-top: 20px;\n                        }\n                        .section h3 {\n                            color: #555;\n                            font-size: 20px;\n                            border-bottom: 1px solid #ddd;\n                            padding-bottom: 5px;\n                            margin-bottom: 10px;\n                        }\n                        .section p {\n                            line-height: 1.6;\n                            font-size: 16px;\n                            margin: 5px 0;\n                        }\n                        .no-print { display: flex; justify-content: center; margin-top: 20px; }\n                        .no-print button {\n                            padding: 10px 15px;\n                            margin: 0 5px;\n                            font-size: 16px;\n                            cursor: pointer;\n                            background-color: #007bff;\n                            color: #fff;\n                            border: none;\n                            border-radius: 5px;\n                        }\n                        .no-print button:hover {\n                            background-color: #0056b3;\n                        }\n                        /* Hide buttons in print mode */\n                        @media print {\n                            .no-print { display: none; }\n                        }\n                    </style>\n                </head>\n                <body>\n                    ".concat(resumeOutput, "\n\n                    <div class=\"no-print\">\n                        <button onclick=\"window.print()\">Download PDF</button>\n                        <button id=\"copyLinkButton\">Copy Link</button>\n                    </div>\n\n                    <script>\n                        document.getElementById(\"copyLinkButton\").addEventListener('click', async () => {\n                            try {\n                                const shareableLink = \"https://yourdomain.com/resume/").concat(name_1.replace(/\s+/g, '_'), "_cv.html\";\n                                await navigator.clipboard.writeText(shareableLink);\n                                alert(\"Copied to clipboard!\");\n                            } catch (err) {\n                                console.error(\"Failed to copy link! \" + err);\n                                alert(\"Failed to copy link, try again later!\");\n                            }\n                        });\n                    </script>\n                </body>\n                </html>\n            "));
            newWindow.document.close(); // Helps the new page load properly
        }
        else {
            console.error("Unable to open a new window.");
        }
    }
    else {
        console.error('Information missing');
    }
});
