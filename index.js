const fs = require('fs');
const path = require('path');

// Fungsi untuk membaca file dalam folder tertentu
const readbankLogo = (folderPath) => {
    const categories = fs.readdirSync(folderPath).filter((item) => {
        return fs.statSync(path.join(folderPath, item)).isDirectory();
    });

    return categories.reduce((acc, category) => {
        const categoryPath = path.join(folderPath, category);
        acc[category] = fs.readdirSync(categoryPath).reduce((bankLogo, file) => {
            const name = path.basename(file, path.extname(file));
            bankLogo[name] = path.join(categoryPath, file);
            return bankLogo;
        }, {});
        return acc;
    }, {});
};

// Path ke folder PNG dan SVG
const svgPath = path.join(__dirname, 'SVG');
const pngPath = path.join(__dirname, 'PNG');

// Struktur ekspor
const bankLogo = {
    SVG: readbankLogo(svgPath), // Semua logo dalam folder SVG
    PNG: {
        x1: readbankLogo(path.join(pngPath, 'x1')),
        x2: readbankLogo(path.join(pngPath, 'x2')),
        x3: readbankLogo(path.join(pngPath, 'x3')),
        x4: readbankLogo(path.join(pngPath, 'x4')),
        Large: readbankLogo(path.join(pngPath, 'Large')),
    },
};

module.exports = bankLogo;