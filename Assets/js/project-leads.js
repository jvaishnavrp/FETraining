const projectLeads = ()=>{
    document.addEventListener('DOMContentLoaded', function() {
        const showMoreButton = document.querySelector('.show-more-button');
        const expertsContainer = document.querySelector('.experts');
        const experts = document.querySelectorAll('.expert');

        if (!showMoreButton || !expertsContainer || experts.length === 0) {
            return;
        }

        let visibleExpertsCount = parseInt(expertsContainer.getAttribute('data-visible-count')) || 5;

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