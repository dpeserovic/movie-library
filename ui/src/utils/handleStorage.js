const setItem = (key, data) => {
    if (key == null || data == null) {
        console.error('Missing key or data property! Unable to set item in storage.');
        return;
    }

    localStorage.setItem(key, JSON.stringify(data));
}

const getItem = key => {
    if (key == null) {
        console.error('Unable to read storage item due to missing key property!');
        return;
    }

    return JSON.parse(localStorage.getItem(key));
}

const removeItem = key => {
    if (key == null) {
        console.error('Unable to remove storage item due to missing key property!');
        return;
    }

    localStorage.removeItem(key);
}

const clear = () => {
    localStorage.clear();
}

export { setItem, getItem, removeItem, clear };