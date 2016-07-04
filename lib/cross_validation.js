'use strict';

// credit: https://gist.github.com/kerimdzhanov/7529623
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
    splitTrainData(testSize, data, labels) {
        const result = {
            trainData: [],
            trainLabel: [],
            testData: [],
            testLabel: [],
        };

        const testIndices = [];

        for (let i = 0; i < testSize; i++) {
            let currentIdx = getRandomInt(0, data.length - 1);

            while (testIndices.indexOf(currentIdx) > -1) {
                currentIdx = getRandomInt(0, data.length - 1);
            }

            result.testData.push(data[currentIdx]);
            testIndices.push(currentIdx);
            result.testLabel.push(labels[currentIdx]);
        }

        for (let i = 0; i < data.length; i++) {
            if (testIndices.indexOf(i) > -1) {
                continue;
            }

            result.trainData.push(data[i]);
            result.trainLabel.push(labels[i]);
        }

        return result
    },
}
