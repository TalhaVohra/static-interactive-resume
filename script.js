// script.ts
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
// script.ts
var form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Simple validation logic (add more as needed)
    if (!name || !email || !education || !workExperience || !skills.length) {
        alert('Please fill all the fields correctly.');
        return;
    }
    generateResume({ name: name, email: email, education: education, workExperience: workExperience, skills: skills });
});
function generateResume(data) {
    var resumeSection = document.getElementById('resume');
    resumeSection.innerHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience, "</p>\n        <h3>Skills</h3>\n        <ul>").concat(data.skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
}
