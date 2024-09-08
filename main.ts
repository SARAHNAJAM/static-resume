document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsList.style.display === 'none' || skillsList.style.display === '') {
            skillsList.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            skillsList.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
    });
});