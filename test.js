const PDFDocument = require('pdfkit');
const fs = require('fs');

const eicarTestString = "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";

function generateEICARPdf(outputPath) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(12).text('This PDF contains the EICAR antivirus test string:', 50, 50);
  doc.moveDown();
  doc.font('Courier').fontSize(10).text(eicarTestString, {
    width: 500,
    align: 'left'
  });

  doc.end();
}

generateEICARPdf('eicar_test.pdf');
console.log('EICAR test PDF generated successfully');