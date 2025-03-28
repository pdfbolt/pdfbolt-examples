const ejs = require('ejs');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// PDFBolt API configuration
const API_URL = 'https://api.pdfbolt.com/v1/direct';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

(async () => {
    try {
        // Load invoice data from JSON file
        const invoiceData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'invoice-data.json'), 'utf8'));

        // Render EJS template with invoice data
        const templatePath = path.join(__dirname, 'templates', 'invoice.ejs');
        const html = await ejs.renderFile(templatePath, invoiceData);

        // Encode HTML to Base64 (required by PDFBolt API)
        const htmlBase64 = Buffer.from(html).toString('base64');

// Generate timestamped filename for the PDF
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

        // Send request to PDFBolt API
        const response = await axios.post(
            API_URL,
            {
                html: htmlBase64,
                printBackground: true,
                format: 'A4'
                // Add more parameters as needed from PDFBolt API documentation
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'API_KEY': API_KEY
                },
                responseType: 'arraybuffer' // Receive binary PDF data
            }
        );

        // Save the generated PDF locally
        const pdfPath = `invoice-${timestamp}.pdf`;
        fs.writeFileSync(pdfPath, response.data);
        console.log(`PDF saved successfully: ${pdfPath}`);
    } catch (error) {
        // This block is used to debug and log errors in case the PDF generation fails
        const responseData = error.response?.data;
        if (responseData) {
            try {
                // Try to parse the error as JSON to extract detailed error information
                const errorDetails = JSON.parse(responseData.toString('utf8'));
                console.error('API Error Details:', errorDetails);
            } catch (parseError) {
                // If not JSON, log as text
                console.error('API Error Response:', responseData.toString('utf8'));
            }
        } else {
            // If no response data is available, log the error message
            console.error('Error generating PDF:', error.message);
        }
    }
})();