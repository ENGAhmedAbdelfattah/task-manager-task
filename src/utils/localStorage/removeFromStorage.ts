function removeFromStorage(item: string): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem(item);
    }
}

export default removeFromStorage;
