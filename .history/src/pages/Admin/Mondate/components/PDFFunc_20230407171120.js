import { PDFDocument, StandardFonts } from 'pdf-lib';

// Function to generate PDF document
const generatePdf = async (data) => {
    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 15;
    const lineHeight = helveticaFont.heightAtSize(fontSize);

    // Add data to PDF document
    page.drawText(`Full Name: ${data?.user?.firstName} ${data?.user?.lastName}`, {
        x: 50,
        y: height - 50,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Phone number: ${data?.user?.phoneNumber}`, {
        x: 50,
        y: height - 70 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Email : ${data?.user?.email}`, {
        x: 50,
        y: height - 90 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Account Number: ${data?.user?.accountNumber}`, {
        x: 50,
        y: height - 110 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Bank Name: ${data?.user?.bankName}`, {
        x: 50,
        y: height - 130 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Payment date :  ${data?.loan?.paymentDate.split('T')[0]}`, {
        x: 50,
        y: height - 150 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Loan amount :  ${data?.loan?.amount}`, {
        x: 50,
        y: height - 180 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });


    // Add more data as needed

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}

export default generatePdf