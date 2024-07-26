// ColorGen - version 0.5.1
// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)
// Author: Viihna Lehraine (reach me at viihna@voidfucker.com / viihna.78 (Signal) / Lost-Possum (Github))

// BEGIN CODE



// For generateAndStoreColorValues in colorConversion.js; when colorValues is defined, this logs all the properties of the objects in colorValues
function logObjectPropertiesInColorValues(colorValues) {
    const properties = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk', 'lab'];

    properties.forEach(property => {
        if (typeofColorValues[property] === 'object') {
            console.log(`${property} values: `);
            logObjectProperties(colorValues[property]);
        } else {
            console.error(`Not an object; ${property}: `, colorValues[property], 'type: ', (typeof colorValues[property]));
        }
    });
};


// Helper functon to log the properties of an object
function logObjectProperties(obj) {
    try {
            for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(`${key}: `, obj[key]);
            }
        };
    } catch (error) {
        console.error('Error parsing keys in parameter passed to logObjectProperties. Checking parameter data type');
        console.log(typeof obj);
    }
};


// Initial logging for convertColors()
function convertColorsInitialLogging(targetFormat) {
    if (!targetFormat) {
        console.error('convertColorsInitialLogging - targetFormat not found');
    };

    console.log('executing convertColors');
    console.log('targetFormat: ', targetFormat, ' data type: ', (typeof targetFormat));
};


// Initial logging for generateAndStoreColorValues()
function generateAndStoreColorValuesInitialLogging(color, initialColorSpace = 'hex') {
    if (!color) {
        console.error('generateAndStoreColorValuesInitialLogging - color not found');
    };

    if (!initialColorSpace) {
        console.error('generateAndStoreColorValuesInitialLogging - initialColorSpace not found');
    };

    console.log('executing generateAndStoreColorValues');
    console.log('color: ', color, ' data type: ', (typeof color));
    console.log('initialColorSpace: ', initialColorSpace, ' data type: ', (typeof initialColorSpace));
};

// Final logging for generateAndStoreColorValues()
function generateAndStoreColorValuesFinalLogs(colorValues) {
    console.log('initialColorSpace switch expression completed for generateAndStoreColorValues');
    console.log('generated color values: ', colorValues, ' data type: ', (typeof colorValues));
    console.log('execution of generateAndStoreColorValues complete');
};


// Initial logging for adjustSaturationAndLightness
function adjustSatAndLightInitLogs(color, limitGrayAndBlack, limitLight, initialColorSpace = 'hex') {
    console.log('executing adjustSaturationAndLightness');
    console.log(`color: ${color}, limitGrayAndBlack: ${limitGrayAndBlack}, limitLight: ${limitLight}, initialColorSpace: ${initialColorSpace}`);
    console.log('types - color: ', (typeof color), ' limitGrayAndBlack: ', (typeof limitGrayAndBlack), ' limitLight ', (typeof limitLight), ' initialColorSpace: ', (typeof initialColorSpace));
};


export { logObjectProperties, logObjectPropertiesInColorValues };

export { convertColorsInitialLogging, generateAndStoreColorValuesInitialLogging, generateAndStoreColorValuesFinalLogs };

export { adjustSatAndLightInitLogs };