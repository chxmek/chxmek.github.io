function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


function goToDetails(projectId, imagePath, projectTitle, projectDetails) {
    window.location.href = `/project-detail.html?project=${projectId}&image=${imagePath}&title=${projectTitle}&details=${projectDetails}`;
}


document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = '/assets/resume/resume.pdf';
    link.download = 'resume-2023.pdf';
    link.click();
    document.body.removeChild(link);
});

document.getElementById('go-gmail').addEventListener('click', function() {
    window.open('mailto:Chawanwits.mek@gmail.com', '_blank');
});
document.getElementById('go-outlook').addEventListener('click', function() {
    window.open('mailto:chawanwits@outlook.com', '_blank');
});
document.getElementById('go-line').addEventListener('click', function() {
    window.open('https://line.me/ti/p/xwXj93VOS5', '_blank');
});
document.getElementById('go-gmail-2').addEventListener('click', function() {
    window.open('mailto:Chawanwits.mek@gmail.com', '_blank');
});