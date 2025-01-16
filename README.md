# 📄 PDFBolt Examples

Welcome to the PDFBolt Examples Repository!

Here, you’ll find practical examples demonstrating how to generate high-quality PDFs effortlessly using the **PDFBolt API**.

Each example is designed to be ready-to-use — just clone the repository, follow the included steps, and see how easily you can create professional PDFs.

🔑 To run these examples, you’ll need an API Key from **PDFBolt**. Create a **free account** at **[PDFBolt](https://pdfbolt.com)** to get started!

---

## ✨ First Example: Invoice PDF Generator

<div>
    <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge">
    <img src="https://img.shields.io/badge/EJS-%23000000.svg?style=for-the-badge&logo=javascript&logoColor=white" alt="EJS Badge">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge">
</div>

- The **Invoice PDF Generator** demonstrates how to create a professional, dynamic invoice PDF using **Node.js**, **EJS templates** (HTML with placeholders for dynamic content), and the **PDFBolt API**. 
- This approach allows you to seamlessly transform HTML templates into polished PDFs filled with custom data.


### 📂 Repository Structure

```plaintext
pdfbolt-examples/
├── invoice-pdf-generator/  
│   ├── data/                 // Directory for JSON data
│   │   └── invoice-data.json // Invoice data for placeholders
│   ├── templates/            // Directory for HTML templates
│   │   └── invoice.ejs       // EJS template for the invoice
│   ├── generate-pdf.js       // Main script for PDF generation
│   └── package.json          // Project configuration
```

### 📸 Example Output

Here’s a preview of the invoice PDF you’ll generate:

<img src="https://img.pdfbolt.com/invoice-example.png" width="600px" alt="Invoice example generated using PDFBolt API">

### 🚀 How to Run the Example

#### 1. Clone the Repository

```plaintext
git clone https://github.com/pdfbolt/pdfbolt-examples.git
```

#### 2. Navigate to the Invoice Generator Directory

```plaintext
cd invoice-pdf-generator
```

#### 3. Install Dependencies

Ensure you have Node.js installed, then run:

```plaintext
npm install
```

#### 4. Add Your API Key
Before running the script, add your API Key:

- Open the `generate-pdf.js` file.
- Replace the placeholder with your API Key from PDFBolt.

#### 5. Run the Script to Generate the PDF

```plaintext
node generate-pdf.js
```

#### 6. View the Output

After running the script, the PDF will be saved in `invoice-pdf-generator` directory as:

```plaintext
invoice-<timestamp>.pdf
```

[//]: # (### 📘 Discover More: Full Tutorial)

[//]: # ()
[//]: # (For an in-depth walkthrough of this example, explore the detailed article: **[Effortless Invoice PDF Generation with Node.js and PDFBolt API]&#40;https://pdfbolt.com/blog/effortless-invoice-pdf-generation&#41;**.)

---

## 💡 Explore Other Examples

Stay tuned! More practical examples for PDF generation with the PDFBolt API are coming soon.

**Good Luck and Happy PDFing! 🚀**