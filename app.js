let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

const mainContainer = document.getElementById('main-container');
const filteredSection = document.getElementById('filtered-section');
const emptyState = document.getElementById('empty-state');
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectCount = document.getElementById('reject-count');
const jobCount = document.getElementById('job-count');

function calculateCount() {
    const cardContainer = document.querySelectorAll('.card-container');
    const total = cardContainer.length;
    totalCount.innerText = total;
    interviewCount.innerText = interviewList.length;
    rejectedList.innerText = rejectedList.length;

    if (currentStatus == 'all') {
        jobCount.innerText = total + "jobs";
        if (total === 0) {
            emptyState.classList.remove('hidden')
        } else {
            emptyState.classList.add(hidden);
        }

    } else if(currentStatus ==='rejected'){
        if(rejectedList.length ===0){
            jobCount.innerText = '0 jobs';
            emptyState.classList.remove('hidden');
        }
        else{
            jobCount.innerText = rejectedList.length + "of" + total + "jobs";
            emptyState.classList.add('hidden');
        }
    }

}





































// const mainContainer = document.getElementById('main-container')
// const emptyState = document.getElementById('empty-sate');
// const jobState = document.getElementById('job-state');

// let currentTab = 'all';

// function updatingDashboard(){
//     const cardContainer = document.querySelectorAll('.card-container');
//     let interviewCount = 0, rejectCount = 0;
//     for(let card of cardContainer){
//         if(card.)
//     }

// }