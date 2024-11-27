const puppeteer = require("puppeteer");

const generatePdf = async (html) => {
  console.log("Generating PDF...");
  // Launch Puppeteer browser
  const browser = await puppeteer.launch({
    headless: true, // Set to true for running without a UI
  });

  // Create a new page
  const page = await browser.newPage();

  // Set the content of the page with the HTML template
  await page.setContent(html);

  // Set the viewport to ensure it matches A4 size, to avoid extra space
  await page.setViewport({
    width: 595, // Width of A4 in px
    height: 842, // Height of A4 in px
  });

  // Generate a PDF from the HTML
  await page.pdf({
    path: "generated_resume.pdf", // Path where the PDF will be saved
    format: "A4", // Page size
    printBackground: true, // Ensure background styles are included in the PDF
    margin: {
      top: "0", // Set top margin to 0
      right: "0", // Set right margin to 0
      bottom: "0", // Set bottom margin to 0
      left: "0", // Set left margin to 0
    },
  });

  // Close the browser
  await browser.close();

  console.log("PDF generated successfully!");
};

module.exports = generatePdf;
