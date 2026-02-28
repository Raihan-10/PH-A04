let currentTab = 'all';
const tabActive = ['bg-[#3B82F6]', 'text-white', 'rounded-sm'];
const tabInactive = ['bg-white', 'rounded-sm'];

const allContainer = document.getElementById('all-container');
const emptystate = document.getElementById('empty-state');
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const jobsCountLabel = document.getElementById('jobs-count');

const allTabs = ['all', 'interview', 'rejected'];

function toggle(id) {
    currentTab = id;

    for (const tab of allTabs) {
        const tabBtn = document.getElementById(tab);
        if (tab === id) {
            tabBtn.classList.remove(...tabInactive);
            tabBtn.classList.add(...tabActive);
        } else {
            tabBtn.classList.add(...tabInactive);
            tabBtn.classList.remove(...tabActive);
        }
    }

    const allCards = allContainer.querySelectorAll('.card');
    for (const card of allCards) {
        card.classList.add('hidden'); 

        if (id === 'all') {
            card.classList.remove('hidden');
        } else if (id === 'interview' && card.classList.contains('status-interview')) {
            card.classList.remove('hidden');
        } else if (id === 'rejected' && card.classList.contains('status-rejected')) {
            card.classList.remove('hidden');
        }
    }

    updateStat();
}

function updateStat() {
    const allCards = allContainer.querySelectorAll('.card');
    const total = allCards.length;
    
    let interviewMatch = [];
    let rejectedMatch = [];
    
    for (const card of allCards) {
        if (card.classList.contains('status-interview')) {
            interviewMatch.push(card);
        }
        if (card.classList.contains('status-rejected')) {
            rejectedMatch.push(card);
        }
    }

    totalCount.innerText = total;
    interviewCount.innerText = interviewMatch.length;
    rejectedCount.innerText = rejectedMatch.length;

    if (currentTab === 'all') {
        if (total === 0) {
            jobsCountLabel.innerText = "0 jobs";
        } else {
            jobsCountLabel.innerText = total + " jobs";
        }
    } else if (currentTab === 'interview') {
        if (interviewMatch.length === 0) {
            jobsCountLabel.innerText = "0 jobs";
        } else {
            jobsCountLabel.innerText = interviewMatch.length + " of " + total + " jobs";
        }
    } else if (currentTab === 'rejected') {
        if (rejectedMatch.length === 0) {
            jobsCountLabel.innerText = "0 jobs";
        } else {
            jobsCountLabel.innerText = rejectedMatch.length + " of " + total + " jobs";
        }
    }

    let visibleCount = 0;
    for (const card of allCards) {
        if (!card.classList.contains('hidden')) {
            visibleCount = visibleCount + 1;
        }
    }

    if (visibleCount === 0) {
        emptystate.classList.remove('hidden');
    } else {
        emptystate.classList.add('hidden');
    }
}

allContainer.addEventListener('click', function(event) {
    const clickElement = event.target;
    const card = clickElement.closest('.card');

    if (!card) return;

    const statusBadge = card.querySelector('.status-badge');

    if (clickElement.classList.contains('interview')) {
        card.classList.remove('status-rejected');
        card.classList.add('status-interview'); 
        statusBadge.innerText = 'Interviewed';
    } 
    else if (clickElement.classList.contains('rejected')) {
        card.classList.remove('status-interview');
        card.classList.add('status-rejected'); 
        statusBadge.innerText = 'Rejected';
    } 
    else if (clickElement.classList.contains('delete') || clickElement.closest('.delete')) {
        if (currentTab === 'all') {
            card.remove(); 
        } else {
            card.classList.remove('status-interview', 'status-rejected');
            statusBadge.innerText = 'Not Applied';
        }
    }
    
    toggle(currentTab); 
});

toggle(currentTab);