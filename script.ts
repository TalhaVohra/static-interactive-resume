// script.ts
const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Simple validation logic (add more as needed)
    if (!name || !email || !education || !workExperience || !skills.length) {
        alert('Please fill all the fields correctly.');
        return;
    }

    generateResume({ name, email, education, workExperience, skills });
});
interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string[];
}

function generateResume(data: ResumeData): void {
    const resumeSection = document.getElementById('resume')!;
    resumeSection.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Work Experience</h3>
        <p>${data.workExperience}</p>
        <h3>Skills</h3>
        <ul>${data.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;
}
