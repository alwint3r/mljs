'use strict';

module.exports = {
    accuracy(predictions, labels) {
        const n = predictions.length;
        let score = 0;

        for (let i = 0; i < n; i++) {
            if (predictions[i] === labels[i]) {
                score += 1;
            }
        }

        return (score / n);
    },
};
