'use strict';

const distance = {
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
    }
}

function selectLabel(results, n) {
    // results is sorted array
    if (n === 1) {
        return results.shift().label;
    }

    const points = {};
    for (let i = 0; i < n; i++) {
        const point = results[i];

        if (!points[point.label]) {
            points[point.label] = 1;
        } else {
            points[point.label] += 1;
        }
    }

    let bestSofar;

    Object.keys(points).forEach(i => {
        if (!bestSofar) {
            bestSofar = i;
        } else {
            if (points[i] > points[bestSofar]) {
                bestSofar = i;
            }
        }
    });

    if (isNaN(Number(bestSofar))) {
        return bestSofar;
    } else {
        return Number(bestSofar);
    }
}

function KNNClassifier(n, distanceFn) {
    this.n = n || 1;
    this.distance = distance[distanceFn] || distance.euclidean;
}

KNNClassifier.prototype.fit = function (trainingSet, labels) {
    this.trainData = trainingSet;
    this.trainLabel = labels;
};

KNNClassifier.prototype.predict = function (testSet) {
    const distances = [];

    for (let i = 0; i < this.trainData.length; i++) {
        distances.push({
            score: this.distance(testSet, this.trainData[i]),
            label: this.trainLabel[i],
        });
    }

    distances.sort((a, b) => a.score - b.score);

    return selectLabel(distances, this.n);
};

module.exports = KNNClassifier;

