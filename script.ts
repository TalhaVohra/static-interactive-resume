interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string[];
}

let resumeData: ResumeData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    education: 'B.Sc. in Computer Science',
    workExperience: 'Software Developer at ABC Corp.',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
};

function generateResume(data: ResumeData): void {
    const resumeSection = document.getElementById('resume')!;
    resumeSection.innerHTML = `
        <h2 contenteditable="true" oninput="updateData('name', this.innerText)">${data.name}</h2>
        <p contenteditable="true" oninput="updateData('email', this.innerText)"><strong>Email:</strong> ${data.email}</p>
        <h3>Education</h3>
        <p contenteditable="true" oninput="updateData('education', this.innerText)">${data.education}</p>
        <h3>Work Experience</h3>
        <p contenteditable="true" oninput="updateData('workExperience', this.innerText)">${data.workExperience}</p>
        <h3>Skills</h3>
        <ul id="skills-list">${data.skills.map(skill => `<li contenteditable="true" oninput="updateSkill(event)">${skill.trim()}</li>`).join('')}</ul>
    `;
}

function updateData(field: keyof ResumeData, value: string): void {
    resumeData[field] = value;
}

function updateSkill(event: Event): void {
    const element = event.target as HTMLElement;
    const index = Array.from(document.querySelectorAll('#skills-list li')).indexOf(element);
    resumeData.skills[index] = element.innerText.trim();
}

// Generate the initial resume
generateResume(resumeData);
