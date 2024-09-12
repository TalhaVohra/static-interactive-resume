interface ResumeData {
    name: string;
    contact: string;
    personalInfo: string;
    education: string;
    intermediate: string;
    undergraduate: string;
    skills: string[];
    workExperience: string;
    fresher: string;
    fatherName: string;
    contactNumber: string;
    email: string;
}

let resumeData: ResumeData = {
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

function updateHeader(field: 'name' | 'contact', value: string): void {
    resumeData[field] = value;
}

function updateSection(section: keyof ResumeData, value: string): void {
    if (section === 'skills') {
        console.error('Updating skills directly is not supported here.');
    } else {
        resumeData[section] = value;
    }
}


function updatePersonalInfo(field: 'name' | 'fatherName' | 'contactNumber' | 'email', value: string): void {
    resumeData[field] = value;
}

function updateSkill(event: Event): void {
    const element = event.target as HTMLElement;
    const index = Array.from(document.querySelectorAll('#skills-list li')).indexOf(element);
    if (index !== -1) {
        resumeData.skills[index] = element.innerText.trim();
    }
}

// Function to toggle visibility of skills section
document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
