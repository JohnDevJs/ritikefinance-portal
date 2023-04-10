import { PDFDocument, StandardFonts } from 'pdf-lib';

const generatePdf = async (data, fontSize = 15, fontFamily = StandardFonts.Helvetica) => {
    if (!data?.user || !data?.loan) {
        throw new Error('Invalid data');
    }

    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(fontFamily);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const lineHeight = font.heightAtSize(fontSize);

    const fields = [
        { label: 'Full Name:', value: `${data.user.firstName} ${data.user.lastName}`, yOffset: 50 },
        { label: 'Phone number:', value: data.user.phoneNumber, yOffset: 70 },
        { label: 'Email:', value: data.user.email, yOffset: 90 },
        { label: 'Account Number:', value: data.user.accountNumber, yOffset: 110 },
        { label: 'Bank Name:', value: data.user.bankName, yOffset: 130 },
        { label: 'Payment Date:', value: data.loan.paymentDate.split('T')[0], yOffset: 150 },
        { label: 'Loan Amount:', value: data.loan.amount, yOffset: 180 },
    ];

    fields.forEach(({ label, value, yOffset }) => {
        page.drawText(`${label} ${value}`, {
            x: 50,
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
