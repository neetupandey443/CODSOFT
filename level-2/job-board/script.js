const jobs = [

{
title:"Frontend Developer",
company:"TechNova",
location:"Mumbai",
category:"IT"
},

{
title:"Backend Developer",
company:"CodeSphere",
location:"Bangalore",
category:"IT"
},

{
title:"UI Designer",
company:"Creative Studio",
location:"Delhi",
category:"Design"
},

{
title:"Digital Marketing Executive",
company:"BrandBoost",
location:"Mumbai",
category:"Marketing"
}

];

const jobList = document.getElementById("jobList");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const locationFilter = document.getElementById("locationFilter");

const modal = document.getElementById("jobModal");

const modalTitle = document.getElementById("modalTitle");

const modalCompany = document.getElementById("modalCompany");

const modalLocation = document.getElementById("modalLocation");

const applyModal = document.getElementById("applyModal");

const postModal = document.getElementById("postModal");

const closeModal = document.getElementById("closeModal");

const closeApply = document.getElementById("closeApply");

const closePost = document.getElementById("closePost");

const postBtn = document.querySelector(".post-btn");

const submitJob = document.getElementById("submitJob");

const darkToggle = document.getElementById("darkToggle");

let savedJobs = [];

function displayJobs(jobArray){

jobList.innerHTML="";

jobArray.forEach((job,index)=>{

const card = document.createElement("div");

card.classList.add("job-card");

card.innerHTML = `

<h3>${job.title}</h3>

<p><b>Company:</b> ${job.company}</p>

<p><b>Location:</b> ${job.location}</p>

<button class="view-btn">View</button>

<button class="save-btn">Save</button>

`;

card.querySelector(".view-btn").onclick = ()=>{

modal.style.display="flex";

modalTitle.innerText = job.title;

modalCompany.innerText = "Company: " + job.company;

modalLocation.innerText = "Location: " + job.location;

};

card.querySelector(".save-btn").onclick = ()=>{

savedJobs.push(job);

alert("Job Saved");

};

jobList.appendChild(card);

});

}

displayJobs(jobs);

function filterJobs(){

let filtered = jobs.filter(job =>{

let searchMatch = job.title.toLowerCase()
.includes(searchInput.value.toLowerCase());

let categoryMatch = categoryFilter.value === ""
|| job.category === categoryFilter.value;

let locationMatch = locationFilter.value === ""
|| job.location === locationFilter.value;

return searchMatch && categoryMatch && locationMatch;

});

displayJobs(filtered);

}

searchInput.addEventListener("keyup",filterJobs);

categoryFilter.addEventListener("change",filterJobs);

locationFilter.addEventListener("change",filterJobs);

document.getElementById("applyBtn").onclick = ()=>{

modal.style.display="none";

applyModal.style.display="flex";

};

closeModal.onclick = ()=>{

modal.style.display="none";

};

closeApply.onclick = ()=>{

applyModal.style.display="none";

};

postBtn.onclick = ()=>{

postModal.style.display="flex";

};

closePost.onclick = ()=>{

postModal.style.display="none";

};

submitJob.onclick = ()=>{

const newJob = {

title:document.getElementById("jobTitle").value,

company:document.getElementById("jobCompany").value,

location:document.getElementById("jobLocation").value,

category:document.getElementById("jobCategory").value

};

jobs.push(newJob);

displayJobs(jobs);

postModal.style.display="none";

};

darkToggle.onclick = ()=>{

document.body.classList.toggle("dark-mode");

};