// Step 01: Listing Element
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    event.preventDefault();
    // Get Input
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("contact");
    var adrElement = document.getElementById("adr");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("exp");
    var skillElement = document.getElementById("skill");
    var aboutElement = document.getElementById("about");
    // const userNameElement = document.getElementById("username") as HTMLInputElement;
    if (nameElement && emailElement && phoneElement && adrElement && eduElement && expElement && skillElement && aboutElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var adrress = adrElement.value;
        var education = eduElement.value;
        var exp = expElement.value;
        var skill = skillElement.value;
        var about = aboutElement.value;
        // const userName = userNameElement.value;
        // const uniquePath = `resume/${userName.replace(/\s+/g, ' ')}_cv.html
        //Get Output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name: </strong>".concat(name_1, "</p>\n<p><strong>Email: </strong>").concat(email, "</p>\n<p><strong>Phone Number: </strong>").concat(phone, "</p>\n<p><strong>Country/City: </strong>").concat(adrress, "</p>\n\n<h3>Objective: </h3>\n<p>").concat(about, "</p>\n\n<h3>Education: </h3>\n<p>").concat(education, "</p>\n\n<h3>Experience: </h3>\n<p>").concat(exp, "</p>\n\n<h3>Skills: </h3>\n<p>").concat(skill, "</p>\n\n");
        // const downloadLink = document.createElement('a')
        // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        // downloadLink.download = uniquePath;
        // downloadLink.textContent = 'Download your Resume';
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            resumeOutputElement.appendChild(buttonContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download PDF";
            downloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            var shareLink = document.createElement('button');
            shareLink.textContent = "Copy Link";
            shareLink.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resume/".concat(name_1.replace(/\s+/g, ' '), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link! " + err_1);
                            alert("Faild to copy link try again later! ");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareLink);
            // makeEditable();
        }
        else {
            console.error('Information missing');
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currElement = element;
            var currValue = currElement.textContent || "";
            //Content Replace for make it editable
            if (currElement.tagName === "p" || currElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currElement.textContent = input_1.value;
                    currElement.style.display = 'inline';
                    input_1.remove();
                });
                currElement.style.display = "none";
                (_a = currElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currElement);
                input_1.focus();
            }
        });
    });
}
;
