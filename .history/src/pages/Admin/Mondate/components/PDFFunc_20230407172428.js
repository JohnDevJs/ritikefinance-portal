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
        { label: 'Phone number:', value: data.user.phoneNumber, yOffset: 80 },
        { label: 'Email:', value: data.user.email, yOffset: 110 },
        { label: 'Account Number:', value: data.user.accountNumber, yOffset: 140 },
        { label: 'Bank Name:', value: data.user.bankName, yOffset: 170 },
        { label: 'Payment Date:', value: data.loan.paymentDate.split('T')[0], yOffset: 200 },
        { label: 'Loan Amount:', value: data.loan.amount, yOffset: 230 },

        {
            label: 'If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day:',
            value: data.loan.amount, yOffset: 260
        },

        { label: 'The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day:', value: data.loan.amount, yOffset: 290 },

        { label: 'To allow for tracking of dates to match with flow of Credit at no additional cost to myself:', value: data.loan.amount, yOffset: 320 },

        { label: 'I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:', value: data.loan.amount, yOffset: 350 },

        { label: 'Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing:', value: data.loan.amount, yOffset: 380 },

        { label: 'I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.', value: data.loan.amount, yOffset: 410 }
    ];

    fields.forEach(({ label, value, yOffset }) => {
        page.drawText(`${label} ${value}`, {
            x: 400,
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
