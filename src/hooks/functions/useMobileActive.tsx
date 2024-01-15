import { useState } from "react";

const useMobileActive = () => {
    const [activeMobile, setActiveMobile] = useState(false);
    var x = typeof window !== "undefined" && window.matchMedia("(max-width: 767.98px)");

    const handleActiveMobile = () => {
        if (x && x.matches) {
            setActiveMobile(true);
        } else {
            setActiveMobile(false);
        }
        console.log("activeMobile", activeMobile)
    }

    x && x.addEventListener("change", handleActiveMobile);
    return { activeMobile }
}

export default useMobileActive;