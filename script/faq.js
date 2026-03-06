(function() {
    
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length === 0) return;
        
        console.log('Initializing FAQ with ' + faqItems.length + ' items');
        
        faqItems.forEach(item => {
            const questionRow = item.querySelector('.question-row');
            
            if (questionRow) {
                
                questionRow.removeEventListener('click', handleClick);
                questionRow.addEventListener('click', handleClick);
                
                
                function handleClick(e) {
                   
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('faq-active')) {
                            otherItem.classList.remove('faq-active');
                        }
                    });
                    
                    
                    item.classList.toggle('faq-active');
                }
            }
        });
    }
    
   
    document.addEventListener('DOMContentLoaded', initFAQ);
    
})();