var _a;
var resumeData = {
    name: 'Your Name',
    contact: 'Contact Details',
    personalInfo: 'Your personal details go here.',
    education: 'Matric: ABC Secondary School',
    intermediate: 'Intermediate: ABC High School',
    undergraduate: 'Undergraduate: ABC University (BS Space Science and Technology)',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    workExperience: 'Details about your work experience go here.',
    fresher: 'Fresher',
    fatherName: 'Muhammad Shahid',
    contactNumber: '0310-1232112',
    email: 'abc@gmail.com'
};
function updateHeader(field, value) {
    resumeData[field] = value;
}
function updateSection(section, value) {
    if (section === 'skills') {
        console.error('Updating skills directly is not supported here.');
    }
    else {
        resumeData[section] = value;
    }
}
function updatePersonalInfo(field, value) {
    resumeData[field] = value;
}
function updateSkill(event) {
    var element = event.target;
    var index = Array.from(document.querySelectorAll('#skills-list li')).indexOf(element);
    if (index !== -1) {
        resumeData.skills[index] = element.innerText.trim();
    }
}
// Function to toggle visibility of skills section
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
