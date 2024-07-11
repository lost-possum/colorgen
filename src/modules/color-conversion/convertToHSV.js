// Color Palette Generator - version 0.31
// Licensed under GNU GPLv3 (https://www.gnu.org/licenses/gpl-3.0.html)
// Author: Viihna Lehraine (reach me at viihna@voidfucker.com / viihna.78 (Signal) / Lost-Possum (Github))

// BEGIN CODE



// Convert Hex to HSV
function hexToHSV(hex) {
    const rgb = hexToRGB(hex);

    return rgbToHSV(rgb.red, rgb.green, rgb.blue);
}


// Convert HSL to HSV
function hslToHSV(hue, saturation, lightness) {
    saturation /= 100;
    lightness /= 100;

    const value = lightness + saturation * Math.min(lightness, 1 - lightness);

    const newSaturation = value === 0 ? 0 : 2 * (1 - lightness / value);

    return {
        hue: Math.floor(hue),
        saturation: Math.floor(newSaturation * 100),
        value: Math.floor(value * 100)
    };
}


// convert RGB to HSV
function rgbToHSV(red, green, blue) {

    red /= 255;
    green /= 255;
    blue /= 255;

    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const value = max;
    const delta = max - min;
    const saturation = max === 0 ? 0 : delta / max;
    let hue;

    if (max === min) {
        hue = 0; // achromatic
    } else {
        switch (max) {
            case red:
                hue = (green - blue) / delta + (green < blue ? 6 : 0);
                break;
            case green:
                hue = (blue - red) / delta + 2;
                break;
            case blue:
                hue = (red - green) / delta + 4;
                break;
        }
        hue *= 60;
    }
    return {
        hue: Math.round(hue),
        saturation: Math.round(saturation * 100),
        value: Math.round(value * 100)
    };
}


// Convert CMYK to HSV
function cmykToHSV(cyan, magenta, yellow, key) {
    const rgb = cmykToRGB(cyan, magenta, yellow, key);
    return rgbToHSV(rgb.red, rgb.green, rgb.blue);
}


// Convert Lab to HSV
function labToHSV(l, a, b) {
    const rgb = labToRGB(l, a, b);
    return rgbToHSV(rgb.red, rgb.green, rgb.blue);
}


export { hexToHSV, rgbToHSV, hslToHSV, cmykToHSV, labToHSV }