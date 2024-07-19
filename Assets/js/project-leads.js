const projectLeads = ()=>{
    document.addEventListener('DOMContentLoaded', function() {
        const showMoreButton = document.querySelector('.show-more-button');
        const experts = document.querySelectorAll('.expert');
        let visibleExpertsCount = 5;

        // Initially hide extra experts
        experts.forEach((expert, index) => {
            if (index >= visibleExpertsCount) {
                expert.style.display = 'none';
            }
        });

        showMoreButton.addEventListener('click', () => {
            const newVisibleCount = visibleExpertsCount + 5;
            
            experts.forEach((expert, index) => {
                if (index < newVisibleCount) {
                    expert.style.display = 'block';
                }
            });

            visibleExpertsCount = newVisibleCount;
        });
    });
}
export default projectLeads;