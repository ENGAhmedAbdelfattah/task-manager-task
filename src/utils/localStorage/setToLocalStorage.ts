function setToLocalStorage(obj: any): void {
    if (typeof window !== "undefined") {
        Object.keys(obj).forEach((key) => {
            localStorage.setItem(key, JSON.stringify(obj[`${key}`]));
        });
    }
}

export default setToLocalStorage;
