const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');
const imagePath = urlParams.get('image');
const projectTitle = urlParams.get('title');
const projectDetails = urlParams.get('details');

console.log(`Displaying details for project: ${projectId}`);
console.log(`Image path: ${imagePath}`);
console.log(`Project title: ${projectTitle}`);
console.log(`Project details: ${projectDetails}`);

const projectTitleElement = document.getElementById('projectTitle');
projectTitleElement.textContent = projectTitle;

const projectImageDiv = document.getElementById('projectImage');
const img = document.createElement('img');
img.src = imagePath;
projectImageDiv.appendChild(img);

const projectDetailsDiv = document.getElementById('projectDetails');
const detailsText = document.createElement('p');
detailsText.textContent = projectDetails;
projectDetailsDiv.appendChild(detailsText);
