export const getAllFlags = async () => {
    debugger;
    const URL = "http://localhost:3030/";
    const response = await fetch(URL);
    const allFlags = await response.json();
    return allFlags;
}