
const path = require('path');

module.exports = {
    downloadUrl: 'https://archive.ics.uci.edu/ml/machine-learning-databases/00267/data_banknote_authentication.txt',
    homepage: 'https://archive.ics.uci.edu/ml/datasets/banknote+authentication',
    featureNames: ['Variance', 'Skewness', 'Curtosis', 'Entropy'],
    filePath: path.join(__dirname, '../datasets/data_banknote_authentication.txt'),
};
