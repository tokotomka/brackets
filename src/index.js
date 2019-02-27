module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(e => e.join(''));

    while(arr.some(e => str.includes(e))) {
        for(let i = 0; i < arr.length; i++) {
            if(str.includes(arr[i])) {
                while(str.includes(arr[i])) {
                    str = str.replace(arr[i], '')
                }
            }
        }
    }

    return !str.length;
};
