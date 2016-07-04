'use strict';

module.exports = function csvParser(data) {
    const options = {
        lineEnding: '\r\n',
        delimiter: ',',
    };

    const splittedData = data.split(options.lineEnding);
    const result = [];
    for (let i = 0; i < splittedData.length; i++) {
        result.push(splittedData[i].split(options.delimiter));
    }

    return result;
};
