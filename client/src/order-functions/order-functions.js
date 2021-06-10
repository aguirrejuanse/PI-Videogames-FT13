export function sortAsc(arr) {
    console.log(arr.map(e => e.name.toLowerCase()));
    return arr.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    return 0;
    });
};

export function sortDesc(arr) {
    console.log(arr.map(e => e.name.toLowerCase()));
    return arr.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
        }
        return 0;    
    });
};

export function sortRatingAsc(arr) {
    console.log(arr.map(e => e.rating));
    return arr.sort(function (a, b) {
        if (a.rating < b.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return -1;
        }
        return 0;    
    });
};

export function sortRatingDesc(arr) {
    console.log(arr.map(e => e.rating));
    return arr.sort(function (a, b) {
        if (a.rating > b.rating) {
            return 1;
        }
        if (a.rating < b.rating) {
            return -1;
        }
        return 0;    
    });
};