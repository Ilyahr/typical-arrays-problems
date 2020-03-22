
exports.min = function min (array) {
    if (!arguments.length) return 0;
    if (Array.isArray(array)) {
        if (!array.length) return 0;
        return Math.min.apply(null, array)
    }

}

exports.max = function max (array) {
    if (!arguments.length) return 0;
    if (Array.isArray(array)) {
        if (!array.length) return 0;
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg (array) {
    if (!arguments.length) return 0;
    if (Array.isArray(array)) {
        if (!array.length) return 0;
        let sum = 0;
        array.forEach(function (item) {
            sum += item;
        });
        return sum / array.length;
    }
}
