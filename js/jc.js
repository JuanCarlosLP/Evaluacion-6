const jc = {};

jc.each = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

export default jc;