document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust body height for mobile devices
    function adjustBodyHeight() {
        // Get viewport height
        const vh = window.innerHeight;
        
        // Set CSS variable for true viewport height that we can use in CSS
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Explicitly set body and html height to prevent overflow
        document.body.style.minHeight = `${vh}px`;
        document.documentElement.style.height = `${vh}px`;
        
        // Check if content is shorter than viewport
        const mainContent = document.querySelector('main');
        const footerHeight = document.querySelector('footer').offsetHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (mainContent) {
            // If content + header + footer is less than viewport height,
            // explicitly set main height to fill the space
            const availableSpace = vh - headerHeight - footerHeight;
            if (mainContent.offsetHeight < availableSpace) {
                mainContent.style.minHeight = `${availableSpace}px`;
            }
        }
    }
    
    // Fix for infinite scrolling on mobile
    function fixScroll() {
        // Calculate the document height
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        // If we're trying to scroll beyond the content
        if (window.scrollY > documentHeight - window.innerHeight) {
            // Prevent further scrolling
            window.scrollTo(0, documentHeight - window.innerHeight);
        }
    }
    
    // Run on first load
    adjustBodyHeight();
    
    // Run on resize to handle orientation changes
    window.addEventListener('resize', adjustBodyHeight);
    
    // Run when device orientation changes (especially important for mobile)
    window.addEventListener('orientationchange', adjustBodyHeight);
    
    // Add scroll event listener to prevent infinite scrolling
    window.addEventListener('scroll', fixScroll);
}); 