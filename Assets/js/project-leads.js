const projectLeads = ()=>{
    document.addEventListener('DOMContentLoaded', function() {
        const showMoreButton = document.querySelector('.show-more-button');
        const experts = document.querySelectorAll('.expert');
        let visibleExpertsCount = 5;

        // Initially hiding extra experts
        experts.forEach((expert, index) => {
            if (index >= visibleExpertsCount) {
                expert.classList.add('hide');
            }
        });

        showMoreButton.addEventListener('click', () => {
            const newVisibleCount = visibleExpertsCount + 5;

            experts.forEach((expert, index) => {
                if (index < newVisibleCount) {
                    expert.classList.remove('hide');
                    expert.classList.add('show');
                }
            });

            visibleExpertsCount = newVisibleCount;
        });
    });
}
export default projectLeads;