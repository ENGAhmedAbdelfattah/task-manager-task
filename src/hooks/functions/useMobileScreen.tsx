// useMobileScreen.ts

import { useEffect, useState } from 'react';

const useMobileScreen = () => {
    const [activeMobile, setActiveMobile] = useState(false);
    useEffect(() => {
        const handleMobileScreen = () => {
            if (typeof window !== 'undefined') {
                // Check if the viewport matches a media query for mobile screens
                const isMobileScreen = window.matchMedia('(max-width: 767px)').matches;

                // Your logic for mobile screens
                if (isMobileScreen) {
                    setActiveMobile(true);
                    //pass to hook your function to call here
                    console.log('Handling logic for mobile screens');
                } else {
                    console.log('Handling logic for larger screens');
                    setActiveMobile(false);
                }
            }
        };

        // Call the function initially
        handleMobileScreen();

        // Attach the function to the window resize event
        window.addEventListener('resize', handleMobileScreen);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleMobileScreen);
        };
    }, []);
    return { activeMobile }
};

export default useMobileScreen;
