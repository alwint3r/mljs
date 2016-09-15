'use strict';

module.exports = {
    euclidean(onePoint, anotherPoint) {
        if (!Array.isArray(onePoint) || !Array.isArray(anotherPoint)) {
            throw new Error('Both points must be array!');
        }

        if (onePoint.length !== anotherPoint.length) {
            throw new Error('The two points must share the same dimension!');
        }

        let result = 0;

        for (let i = 0; i < onePoint.length; i++) {
            result += Math.pow(anotherPoint[i] - onePoint[i], 2);
        }

        return Math.sqrt(result);
    },

    manhattan(onePoint, anotherPoint) {
        if (!Array.isArray(onePoint) || !Array.isArray(anotherPoint)) {
            throw new Error('Both points must be array!');
        }

        if (onePoint.length !== anotherPoint.length) {
            throw new Error('The two points must share the same dimension!');
        }

        let result = 0;

        for (let i = 0; i < onePoint.length; i++) {
            result += Math.abs(onePoint[i] - anotherPoint[i]);
        }

        return result;
    },
};
