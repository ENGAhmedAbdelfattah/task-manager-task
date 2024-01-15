const getFromStorage = (key: string): string => {
    let field: any = "";
    // if (typeof window !== "undefined") {
    //     if (typeof localStorage.getItem(key) === 'string') {
    //         field = localStorage.getItem(key)  && JSON.parse(localStorage.getItem(key) || "");
    //     }
    // }
    if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem(key);
        if (typeof storedValue === 'string') {
            try {
                field = JSON.parse(storedValue);
            } catch (error) {
                // Handle the error if the JSON parsing fails
                console.log("Error parsing JSON:", error);
            }
        }
    }
    
    return field;
    
    return field;
};

export default getFromStorage;