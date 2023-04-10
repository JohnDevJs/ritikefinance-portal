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
        y: height - 50 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    // Add more data as needed

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}

export default generatePdf