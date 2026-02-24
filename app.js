// let interviewList = [];
// let rejectedList = [];
// let currentStatus = 'all';

// const mainContainer = document.getElementById('main-container');
// const filteredSection = document.getElementById('filtered-section');
// const emptyState = document.getElementById('empty-state');
// const totalCount = document.getElementById('total-count');
// const interviewCount = document.getElementById('interview-count');
// const rejectCount = document.getElementById('reject-count');
// const jobCount = document.getElementById('job-count');

// function calculateCount() {
//     const cardContainer = document.querySelectorAll('.card-container');
//     const total = cardContainer.length;
//     totalCount.innerText = total;
//     interviewCount.innerText = interviewList.length;
//     rejectedList.innerText = rejectedList.length;

//     if (currentStatus == 'all') {
//         jobCount.innerText = total + "jobs";
//         if (total === 0) {
//             emptyState.classList.remove('hidden')
//         } else {
//             emptyState.classList.add(hidden);
//         }

//     } else if (currentStatus === 'rejected') {
//         if (rejectedList.length === 0) {
//             jobCount.innerText = '0 jobs';
//             emptyState.classList.remove('hidden');
//         }
//         else {
//             jobCount.innerText = rejectedList.length + "of" + total + "jobs";
//             emptyState.classList.add('hidden');
//         }
//     }

// }

// // toggle

// function toggle(id) {
//     currentStatus = id;
//     const btnIds = ['all', 'interview', 'rejected'];
//     for (let btnId of btnIds) {
//         const btn = document.getElementById(id);
//         if (btnId == id) {
//             btn.classList.add('active-tab', 'bg-[#3B82F6]', 'text-white');
//             btn.classList.remove('bg-white', 'text-black');
//         }
//         else {
//             btn.classList.remove('active-tab', 'bg-[#3B82F6]', 'text-white');
//             btn.classList.add('bg-white', 'text-black');

//         }
//     }

//     // hide and show
//     if (id === 'all') {
//         mainContainer.classList.remove('hidden');
//         filteredSection.classList.add('hidden');
//     }
//     else if (id === 'interview') {
//         mainContainer.classList.add('hidden');
//         filteredSection.classList.remove('hidden');
//         renderList(interviewList, 'interview');

//     }
//     else if (id === 'rejected') {
//         mainContainer.classList.add('hidden');
//         filteredSection.classList.remove('hidden');
//         renderList(rejectedList, 'rejected');
//     }
//     calculateCount();

// }
// document.body.addEventListener('click', function (event) {
//     const card = event.target.closest('.job-card');
//     if (!card) return;

//     const company = card.querySelector('.company').innerText;
//     const position = card.querySelector('.position').innerText;
//     const location = card.querySelector('.location-text').innerText;
//     const desc = card.querySelector('.description').innerText;

//     const cardInfo = { company, position, location, desc };

//     if (event.target.classList.contains('interview-btn')) {
//         let newRejected = [];
//         for (let item of rejectedList) {
//             if (item.company !== company)
//                 newRejected.push(item);
//         }
//         rejectedList = newRejected;

//         let inList = false;
//         for (let item of interviewList) { if (item.company === company) inList = true; }

//         if (inList) {
//             let newInterview = [];
//             for (let item of interviewList) {
//                 if (item.company !== company) newInterview.push(item);
//             }
//             interviewList = newInterview;
//             updateBadgeInMain(company, 'none');
//         } else {
//             interviewList.push(cardInfo);
//             updateBadgeInMain(company, 'interview');
//         }

//         if (currentStatus !== 'all') toggle(currentStatus);

//     }

//     // rejected button
//     else if (event.target.classList.contains('rejected-btn')) {
//         let newInterview = [];
//         for (let item of interviewList) {
//             if (item.company !== company) newInterview.push(item);
//         }
//         interviewList = newInterview;

//         let inList = false;
//         for (let item of rejectedList) {
//             if (item.company === company) alreadyInList = true;
//         }

//         if (inList) {
//             let newRejected = [];
//             for (let item of rejectedList) { if (item.company !== company) newRejected.push(item); }
//             rejectedList = newRejected;
//             updateBadgeInMain(company, 'none');
//         } else {
//             rejectedList.push(cardInfo);
//             updateBadgeInMain(company, 'rejected');
//         }

//         if (currentStatus !== 'all') toggle(currentStatus);
//     }

//     else if (event.target.closest('.btn-delete')) {

//         let newInterview = [];
//         for (let item of interviewList) {
//             if (item.company !== company) newInterview.push(item);
//         }
//         interviewList = newInterview;

//         let newRejected = [];
//         for (let item of rejectedList) { 
//             if (item.company !== company) newRejected.push(item); 
//         }
//         rejectedList = newRejected;

//         const allMainCards = mainContainer.querySelectorAll('.job-card');
//         for (let mainCard of allMainCards) {
//             if (mainCard.querySelector('.company').innerText === company) {
//                 mainCard.remove();
//             }
//         }


//         if (currentStatus !== 'all') {
//             card.remove();
//         }
//     }

//     calculateCount();
// });
//  function updateBadgeInMain(name, status) {
//             const allCards = mainContainer.querySelectorAll('.job-card');
//             for (let card of allCards) {
//                 if (card.querySelector('.company').innerText === name) {
//                     const badge = card.querySelector('.status-badge');
//                     if (status === 'interview') {
//                         badge.innerText = 'Interview';
//                         badge.className = "status-badge rounded-1 px-3 py-2 bg-[#DCFCE7] text-[#10B981] font-bold text-[12px] uppercase";
//                     } else if (status === 'rejected') {
//                         badge.innerText = 'Rejected';
//                         badge.className = "status-badge rounded-1 px-3 py-2 bg-[#FEE2E2] text-[#EF4444] font-bold text-[12px] uppercase";
//                     } else {
//                         badge.innerText = 'Not Applied';
//                         badge.className = "status-badge rounded-1 px-3 py-2 bg-[#EEF4FF] text-[#002C5C] font-bold text-[12px] uppercase";
//                     }
//                 }
//             }
//         }

//  function renderList(list, type) {
//             filteredSection.innerHTML = '';
//             for (let job of list) {
//                 const div = document.createElement('div');
//                 div.innerHTML = `
//                   <section class="card-container space-y-5 p-6 bg-white rounded-lg mb-4">
//             <div class="cards-container flex justify-between gap-1 ">
//                 <div class="company">
//                     <p class="font-semibold text-[#002C5C] text-[18px] leading-[26px]">WebFlow Agency</p>
//                     <p class="font-normal text-4 leading-[22px] text-[#64748B]">Web Designer & Developer</p>
//                 </div>
//                 <div class="delete">
//                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M13.5 3H11V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H6.5C6.10218 1 5.72064 1.15804 5.43934 1.43934C5.15804 1.72064 5 2.10218 5 2.5V3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5C2 3.63261 2.05268 3.75979 2.14645 3.85355C2.24021 3.94732 2.36739 4 2.5 4H3V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V4H13.5C13.6326 4 13.7598 3.94732 13.8536 3.85355C13.9473 3.75979 14 3.63261 14 3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM6 2.5C6 2.36739 6.05268 2.24021 6.14645 2.14645C6.24021 2.05268 6.36739 2 6.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3H6V2.5ZM12 13H4V4H12V13ZM7 6.5V10.5C7 10.6326 6.94732 10.7598 6.85355 10.8536C6.75979 10.9473 6.63261 11 6.5 11C6.36739 11 6.24021 10.9473 6.14645 10.8536C6.05268 10.7598 6 10.6326 6 10.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6C6.63261 6 6.75979 6.05268 6.85355 6.14645C6.94732 6.24021 7 6.36739 7 6.5ZM10 6.5V10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11C9.36739 11 9.24021 10.9473 9.14645 10.8536C9.05268 10.7598 9 10.6326 9 10.5V6.5C9 6.36739 9.05268 6.24021 9.14645 6.14645C9.24021 6.05268 9.36739 6 9.5 6C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 6.24021 10 6.36739 10 6.5Z"
//                             fill="#64748B" />
//                     </svg>

//                 </div>

//             </div>
//             <!-- location and salary -->
//             <div class="location-salary">
//                 <p class="font-normal text-[14px] leading-5 text-[#64748B]">Los Angeles, CA
//                     •
//                     Part-time
//                     •
//                     $80,000 - $120,000</p>
//             </div>
//             <!-- process and required skills -->
//             <div class="">
//                 <button class="rounded-1 px-3 py-2  bg-[#EEF4FF] text-[#002C5C]">Not Applied</button>
//                 <p class="mt-2 text-[#323B49] text-[14px] leading-5">Create stunning web experiences for high-profile
//                     clients. Must have portfolio and experience with modern web design trends.</p>
//             </div>
//             <!-- button of process -->
//             <div class="flex gap-2">
//                 <button
//                     class="hover:bg-[#10B981] hover:text-white font-semibold text-[14px] leading-5 rounded-sm py-3 px-2 border text-[#10B981]">INTERVIEW</button>
//                 <button
//                     class="hover:bg-[#EF4444] hover:text-white font-semibold text-[14px] leading-5 rounded-sm py-3 px-2 border text-[#EF4444]">REJECTED</button>
//             </div>
//         </section>`;

//  filteredSection.appendChild(div);
//             }
//         }
//         window.onload = calculateCount;

// State management lists
        let interviewList = [];
        let rejectedList = [];
        let currentStatus = 'all';

        const mainContainer = document.getElementById('main-container');
        const filteredSection = document.getElementById('filtered-section');
        const emptyState = document.getElementById('empty-state');
        const totalCountDisplay = document.getElementById('total-count');
        const interviewCountDisplay = document.getElementById('interview-count');
        const rejectedCountDisplay = document.getElementById('rejected-count');
        const jobCountDisplay = document.getElementById('jobs-count');

        // Detailed count and dashboard calculation
        function calculateCount() {
            const allCards = mainContainer.querySelectorAll('.card-container');
            const total = allCards.length;

            totalCountDisplay.innerText = total;
            interviewCountDisplay.innerText = interviewList.length;
            rejectedCountDisplay.innerText = rejectedList.length;

            if (currentStatus === 'all') {
                jobCountDisplay.innerText = total + " jobs";
                if (total === 0) {
                    emptyState.classList.remove('hidden');
                } else {
                    emptyState.classList.add('hidden');
                }
            } else if (currentStatus === 'interview') {
                if (interviewList.length === 0) {
                    jobCountDisplay.innerText = "0 jobs";
                    emptyState.classList.remove('hidden');
                } else {
                    jobCountDisplay.innerText = interviewList.length + " of " + total + " jobs";
                    emptyState.classList.add('hidden');
                }
            } else if (currentStatus === 'rejected') {
                if (rejectedList.length === 0) {
                    jobCountDisplay.innerText = "0 jobs";
                    emptyState.classList.remove('hidden');
                } else {
                    jobCountDisplay.innerText = rejectedList.length + " of " + total + " jobs";
                    emptyState.classList.add('hidden');
                }
            }
        }

        // Tab switching logic
        function toggle(id) {
            currentStatus = id;
            
            const ids = ['all', 'interview', 'rejected'];
            for (let btnId of ids) {
                const btn = document.getElementById(btnId);
                if (btnId === id) {
                    btn.classList.add('tab-active', 'bg-[#3B82F6]', 'text-white', 'font-semibold');
                    btn.classList.remove('bg-white', 'text-black', 'font-medium');
                } else {
                    btn.classList.remove('tab-active', 'bg-[#3B82F6]', 'text-white', 'font-semibold');
                    btn.classList.add('bg-white', 'text-black', 'font-medium');
                }
            }

            if (id === 'all') {
                mainContainer.classList.remove('hidden');
                filteredSection.classList.add('hidden');
            } else if (id === 'interview') {
                mainContainer.classList.add('hidden');
                filteredSection.classList.remove('hidden');
                renderList(interviewList, 'interview');
            } else if (id === 'rejected') {
                mainContainer.classList.add('hidden');
                filteredSection.classList.remove('hidden');
                renderList(rejectedList, 'rejected');
            }
            calculateCount();
        }

        // Global click listener for event delegation
        document.body.addEventListener('click', function (event) {
            const card = event.target.closest('.card-container');
            if (card === null) return;

            // Scrape data from the card element
            const company = card.querySelector('.company').innerText;
            const position = card.querySelector('.position').innerText;
            const location = card.querySelector('.location-text').innerText;
            const desc = card.querySelector('.description').innerText;
            const jobInfo = { company, position, location, desc };

            // Handle Interview button logic
            if (event.target.classList.contains('interview-btn')) {
                removeFromRejected(company);
                
                let alreadyInList = false;
                for (let item of interviewList) { if (item.company === company) alreadyInList = true; }

                if (alreadyInList === true) {
                    removeFromInterview(company);
                    updateBadgeInMain(company, 'none');
                } else {
                    interviewList.push(jobInfo);
                    updateBadgeInMain(company, 'interview');
                }
                if (currentStatus !== 'all') toggle(currentStatus);
            }

            // Handle Rejected button logic
            else if (event.target.classList.contains('rejected-btn')) {
                removeFromInterview(company);

                let alreadyInList = false;
                for (let item of rejectedList) { if (item.company === company) alreadyInList = true; }

                if (alreadyInList === true) {
                    removeFromRejected(company);
                    updateBadgeInMain(company, 'none');
                } else {
                    rejectedList.push(jobInfo);
                    updateBadgeInMain(company, 'rejected');
                }
                if (currentStatus !== 'all') toggle(currentStatus);
            }

            // Handle Delete button logic (completely remove from UI and counts)
            else if (event.target.closest('.delete')) {
                removeFromInterview(company);
                removeFromRejected(company);

                const allMainCards = mainContainer.querySelectorAll('.card-container');
                for (let mainCard of allMainCards) {
                    if (mainCard.querySelector('.company').innerText === company) {
                        mainCard.remove();
                    }
                }

                if (currentStatus !== 'all') {
                    card.remove();
                }
            }
            calculateCount();
        });

        // Helper functions for state modification
        function removeFromInterview(name) {
            let newList = [];
            for (let item of interviewList) { if (item.company !== name) newList.push(item); }
            interviewList = newList;
        }

        function removeFromRejected(name) {
            let newList = [];
            for (let item of rejectedList) { if (item.company !== name) newList.push(item); }
            rejectedList = newList;
        }

        // Sync visual badges in the main section
        function updateBadgeInMain(name, status) {
            const allCards = mainContainer.querySelectorAll('.card-container');
            for (let card of allCards) {
                if (card.querySelector('.company').innerText === name) {
                    const badge = card.querySelector('.status-badge');
                    if (status === 'interview') {
                        badge.innerText = 'Interview';
                        badge.className = "status-badge rounded-1 px-3 py-2 bg-[#DCFCE7] text-[#10B981] font-bold text-[12px] uppercase";
                    } else if (status === 'rejected') {
                        badge.innerText = 'Rejected';
                        badge.className = "status-badge rounded-1 px-3 py-2 bg-[#FEE2E2] text-[#EF4444] font-bold text-[12px] uppercase";
                    } else {
                        badge.innerText = 'Not Applied';
                        badge.className = "status-badge rounded-1 px-3 py-2 bg-[#EEF4FF] text-[#002C5C] font-bold text-[12px] uppercase";
                    }
                }
            }
        }

        // Render logic for dynamic sections (Interview / Rejected)
        function renderList(list, type) {
            filteredSection.innerHTML = '';
            for (let job of list) {
                let badgeClass;
                let label;
                
                if (type === 'interview') {
                    badgeClass = "bg-[#DCFCE7] text-[#10B981]";
                    label = "Interview";
                } else if (type === 'rejected') {
                    badgeClass = "bg-[#FEE2E2] text-[#EF4444]";
                    label = "Rejected";
                }

                const div = document.createElement('div');
                div.innerHTML = `
                <section class="card-container space-y-5 p-6 bg-white rounded-lg border border-[#F1F2F4]">
                    <div class="cards-container flex justify-between gap-1 ">
                        <div class="company-info">
                            <p class="company font-semibold text-[#002C5C] text-[18px] leading-[26px]">${job.company}</p>
                            <p class="position font-normal text-4 leading-[22px] text-[#64748B]">${job.position}</p>
                        </div>
                        <div class="delete"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 3H11V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H6.5C6.10218 1 5.72064 1.15804 5.43934 1.43934C5.15804 1.72064 5 2.10218 5 2.5V3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5C2 3.63261 2.05268 3.75979 2.14645 3.85355C2.24021 3.94732 2.36739 4 2.5 4H3V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V4H13.5C13.6326 4 13.7598 3.94732 13.8536 3.85355C13.9473 3.75979 14 3.63261 14 3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM6 2.5C6 2.36739 6.05268 2.24021 6.14645 2.14645C6.24021 2.05268 6.36739 2 6.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3H6V2.5ZM12 13H4V4H12V13ZM7 6.5V10.5C7 10.6326 6.94732 10.7598 6.85355 10.8536C6.75979 10.9473 6.63261 11 6.5 11C6.36739 11 6.24021 10.9473 6.14645 10.8536C6.05268 10.7598 6 10.6326 6 10.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6C6.63261 6 6.75979 6.05268 6.85355 6.14645C6.94732 6.24021 7 6.36739 7 6.5ZM10 6.5V10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11C9.36739 11 9.24021 10.9473 9.14645 10.8536C9.05268 10.7598 9 10.6326 9 10.5V6.5C9 6.36739 9.05268 6.24021 9.14645 6.14645C9.24021 6.05268 9.36739 6 9.5 6C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 2.24021 10 6.36739 10 6.5Z" fill="#64748B"/></svg></div>
                    </div>
                    <div class="location-salary">
                        <p class="location-text font-normal text-[14px] leading-5 text-[#64748B]">${job.location}</p>
                    </div>
                    <div class="">
                        <button class="status-badge rounded-1 px-3 py-2 ${badgeClass} font-bold text-[12px] uppercase">${label}</button>
                        <p class="description mt-2 text-[#323B49] text-[14px] leading-5">${job.desc}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="interview-btn hover:bg-[#10B981] hover:text-white font-semibold text-[14px] leading-5 rounded-sm py-3 px-2 border text-[#10B981] border-[#10B981]">INTERVIEW</button>
                        <button class="rejected-btn hover:bg-[#EF4444] hover:text-white font-semibold text-[14px] leading-5 rounded-sm py-3 px-2 border text-[#EF4444] border-[#EF4444]">REJECTED</button>
                    </div>
                </section>`;
                filteredSection.appendChild(div);
            }
        }

        // Initialize state after document loads
        document.addEventListener('DOMContentLoaded', function() {
            calculateCount();
        });















