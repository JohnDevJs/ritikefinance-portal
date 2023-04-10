// import { PDFDocument, StandardFonts } from 'pdf-lib';

// // Function to generate PDF document
// const generatePdf = async (data) => {
//     const pdfDoc = await PDFDocument.create();
//     const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     const page = pdfDoc.addPage();
//     const { width, height } = page.getSize();
//     const fontSize = 15;
//     const lineHeight = helveticaFont.heightAtSize(fontSize);

//     // Add data to PDF document
//     page.drawText(`Full Name: ${data?.user?.firstName} ${data?.user?.lastName}`, {
//         x: 50,
//         y: height - 50,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Phone number: ${data?.user?.phoneNumber}`, {
//         x: 50,
//         y: height - 70 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Email : ${data?.user?.email}`, {
//         x: 50,
//         y: height - 90 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Account Number: ${data?.user?.accountNumber}`, {
//         x: 50,
//         y: height - 110 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Bank Name: ${data?.user?.bankName}`, {
//         x: 50,
//         y: height - 130 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Payment date :  ${data?.loan?.paymentDate.split('T')[0]}`, {
//         x: 50,
//         y: height - 150 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });

//     page.drawText(`Loan amount :  ${data?.loan?.amount}`, {
//         x: 50,
//         y: height - 180 - lineHeight,
//         size: fontSize,
//         font: helveticaFont,
//         lineHeight,
//     });


//     // Add more data as needed

//     const pdfBytes = await pdfDoc.save();
//     return pdfBytes;
// }

// export default generatePdf



//* second method

import { PDFDocument, StandardFonts } from 'pdf-lib';

const generatePdf = async (data, fontSize = 12, fontFamily = StandardFonts.Helvetica) => {
    if (!data?.user || !data?.loan) {
        throw new Error('Invalid data');
    }

    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(fontFamily);

    const page = pdfDoc.addPage();
    page.setMargins(80); // Increase margins to 80 units
    const { width, height } = page.getSize();
    const lineHeight = font.heightAtSize(fontSize);

    const fields = [
        { label: 'Full Name:', value: `${data.user.firstName} ${data.user.lastName}`, yOffset: 50 },

    ];

    fields.forEach(({ label, value, yOffset }) => {
        page.drawText(`${label} ${value}`, {
            x: 40,
            y: height - yOffset - lineHeight,
            size: fontSize,
            font,
            lineHeight,
        });
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};

export default generatePdf;
