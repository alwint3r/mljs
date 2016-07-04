'use strict';

const KNNClassifier = require('./KNNClassifier');
const fs = require('fs');
const dataset = require('../../datasets_info/banknote_authentication');
const parseCsv = require('../../lib/csv_parser');
const crossVal = require('../../lib/cross_validation');
const metrics = require('../../lib/metrics');

fs.readFile(dataset.filePath, (err, data) => {
    if (err) {
        console.error(err);

        return process.exit(1);
    }

    const parsedData = parseCsv(data.toString());
    const numericData = [];
    const labels = [];

    for (let i = 0; i < parsedData.length; i++) {
        const casted = parsedData[i].map(num => Number(num));
        labels.push(casted.pop());
        numericData.push(casted);
    }

    const newSplittedData = crossVal.splitTrainData(800, numericData, labels);
    const knn = new KNNClassifier(5, 'euclidean');

    knn.fit(newSplittedData.trainData, newSplittedData.trainLabel);

    const testData = newSplittedData.testData;
    const testLabel = newSplittedData.testLabel;

    const predictions = testData.map(test => knn.predict(test));

    console.log(metrics.accuracy(predictions, testLabel));
});


