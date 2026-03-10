


// import jsPDF from "jspdf";

// export const generateInvoice = (order) => {
//   const doc = new jsPDF();
//   const pageW = doc.internal.pageSize.getWidth();

//   const date = new Date().toLocaleDateString("en-NG", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   const invoiceNumber = "FH-" + Math.floor(100000 + Math.random() * 900000);

//   // =====================
//   // BRAND COLORS
//   // =====================
//   const orange = [255, 107, 0];
//   const darkOrange = [204, 82, 0];
//   const cream = [255, 248, 240];
//   const dark = [30, 20, 10];
//   const gray = [100, 100, 100];
//   const lightGray = [240, 240, 240];
//   const white = [255, 255, 255];
//   const green = [34, 139, 34];

//   // =====================
//   // HEADER BACKGROUND
//   // =====================
//   doc.setFillColor(...orange);
//   doc.rect(0, 0, pageW, 50, "F");

//   // Decorative accent stripe
//   doc.setFillColor(...darkOrange);
//   doc.rect(0, 47, pageW, 3, "F");

//   // Brand name
//   doc.setTextColor(...white);
//   doc.setFontSize(28);
//   doc.setFont("helvetica", "bold");
//   doc.text("🍽 FOODHIVE", 14, 22);

//   // Tagline
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "normal");
//   doc.text("Delicious Meals, Delivered Fresh", 14, 31);
//   doc.text("Lagos, Nigeria  |  welcome@foodhive.com  |  +234 123 456 7890", 14, 39);

//   // INVOICE label on right
//   doc.setFontSize(22);
//   doc.setFont("helvetica", "bold");
//   doc.text("INVOICE", pageW - 14, 22, { align: "right" });

//   doc.setFontSize(9);
//   doc.setFont("helvetica", "normal");
//   doc.text(`No: ${invoiceNumber}`, pageW - 14, 31, { align: "right" });
//   doc.text(`Date: ${date}`, pageW - 14, 38, { align: "right" });
//   doc.text(`Ref: ${order.reference}`, pageW - 14, 45, { align: "right" });

//   // =====================
//   // BILLED TO SECTION
//   // =====================
//   // Card background
//   doc.setFillColor(...cream);
//   doc.roundedRect(12, 58, 85, 40, 3, 3, "F");
//   doc.setDrawColor(...orange);
//   doc.setLineWidth(0.5);
//   doc.roundedRect(12, 58, 85, 40, 3, 3, "S");

//   // Left orange accent bar
//   doc.setFillColor(...orange);
//   doc.roundedRect(12, 58, 4, 40, 2, 2, "F");

//   doc.setTextColor(...orange);
//   doc.setFontSize(11);
//   doc.setFont("helvetica", "bold");
//   doc.text("BILLED TO", 20, 68);

//   doc.setTextColor(...dark);
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "bold");
//   doc.text(order.customerName || order.username || "Customer", 20, 77);

//   doc.setFont("helvetica", "normal");
//   doc.setTextColor(...gray);
//   doc.setFontSize(9);
//   doc.text(`📧 ${order.email}`, 20, 85);
//   doc.text(`📞 ${order.phone}`, 20, 92);

//   // Payment status badge
//   doc.setFillColor(...green);
//   doc.roundedRect(110, 62, 85, 14, 3, 3, "F");
//   doc.setTextColor(...white);
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "bold");
//   doc.text("✓  PAYMENT CONFIRMED", 152, 71, { align: "center" });

//   // =====================
//   // ITEMS TABLE HEADER
//   // =====================
//   const tableTop = 108;

//   doc.setFillColor(...orange);
//   doc.rect(12, tableTop, pageW - 24, 10, "F");

//   doc.setTextColor(...white);
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "bold");
//   doc.text("ITEM", 16, tableTop + 7);
//   doc.text("QTY", 125, tableTop + 7, { align: "center" });
//   doc.text("UNIT PRICE", 155, tableTop + 7, { align: "center" });
//   doc.text("TOTAL", pageW - 16, tableTop + 7, { align: "right" });

//   // =====================
//   // TABLE ROWS
//   // =====================
//   let y = tableTop + 10;
//   let grandTotal = 0;

//   const items = order.items || order.cartItems || [];

//   items.forEach((item, index) => {
//     const rowTotal = item.price * item.quantity;
//     grandTotal += rowTotal;

//     // Alternating row background
//     if (index % 2 === 0) {
//       doc.setFillColor(...cream);
//     } else {
//       doc.setFillColor(...white);
//     }
//     doc.rect(12, y, pageW - 24, 10, "F");

//     doc.setTextColor(...dark);
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(9.5);
//     doc.text(item.title || item.name, 16, y + 7);

//     doc.text(String(item.quantity), 125, y + 7, { align: "center" });
//     doc.text(`N${item.price.toLocaleString()}`, 155, y + 7, { align: "center" });

//     doc.setFont("helvetica", "bold");
//     doc.text(`N${rowTotal.toLocaleString()}`, pageW - 16, y + 7, { align: "right" });

//     y += 10;
//   });

//   // Bottom border of table
//   doc.setDrawColor(...orange);
//   doc.setLineWidth(0.5);
//   doc.line(12, y, pageW - 12, y);

//   // =====================
//   // TOTALS SECTION
//   // =====================
//   y += 8;

//   // Grand Total box
//   doc.setFillColor(...orange);
//   doc.roundedRect(pageW - 90, y, 78, 16, 3, 3, "F");

//   doc.setTextColor(...white);
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.text("GRAND TOTAL:", pageW - 85, y + 10);
//   doc.text(`N${grandTotal.toLocaleString()}`, pageW - 16, y + 10, { align: "right" });

//   // =====================
//   // THANK YOU FOOTER
//   // =====================
//   const footerY = 270;

//   // Footer background
//   doc.setFillColor(...darkOrange);
//   doc.rect(0, footerY, pageW, 27, "F");

//   doc.setFillColor(...orange);
//   doc.rect(0, footerY, pageW, 2, "F");

//   doc.setTextColor(...white);
//   doc.setFontSize(13);
//   doc.setFont("helvetica", "bold");
//   doc.text("Thank you for choosing FoodHive!", pageW / 2, footerY + 10, { align: "center" });

//   doc.setFontSize(9);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     "Questions? Contact us: welcome@foodhive.com  |  +234 123 456 7890",
//     pageW / 2,
//     footerY + 18,
//     { align: "center" }
//   );

//   doc.text(
//     "This is a computer-generated invoice and requires no signature.",
//     pageW / 2,
//     footerY + 24,
//     { align: "center" }
//   );

//   // =====================
//   // SAVE
//   // =====================
//   doc.save(`FoodHive-Invoice-${invoiceNumber}.pdf`);
// };
import jsPDF from "jspdf";

export const generateInvoice = (order) => {
  const doc = new jsPDF();
  const pageW = doc.internal.pageSize.getWidth();

  const date = new Date().toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const invoiceNumber = "FH-" + Math.floor(100000 + Math.random() * 900000);

  // =====================
  // BRAND COLORS
  // =====================
  const orange = [255, 107, 0];
  const darkOrange = [204, 82, 0];
  const cream = [255, 248, 240];
  const dark = [30, 20, 10];
  const gray = [100, 100, 100];
  const lightGray = [240, 240, 240];
  const white = [255, 255, 255];
  const green = [34, 139, 34];

  // =====================
  // HEADER BACKGROUND
  // =====================
  doc.setFillColor(...orange);
  doc.rect(0, 0, pageW, 50, "F");

  // Decorative accent stripe
  doc.setFillColor(...darkOrange);
  doc.rect(0, 47, pageW, 3, "F");

  // Brand name
  doc.setTextColor(...white);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("FOODHIVE", 14, 22);

  // Tagline
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Delicious Meals, Delivered Fresh", 14, 31);
  doc.text("Lagos, Nigeria  |  welcome@foodhive.com  |  +234 123 456 7890", 14, 39);

  // INVOICE label on right
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("INVOICE", pageW - 14, 22, { align: "right" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`No: ${invoiceNumber}`, pageW - 14, 31, { align: "right" });
  doc.text(`Date: ${date}`, pageW - 14, 38, { align: "right" });
  doc.text(`Ref: ${order.reference}`, pageW - 14, 45, { align: "right" });

  // =====================
  // BILLED TO SECTION
  // =====================
  // Card background
  doc.setFillColor(...cream);
  doc.roundedRect(12, 58, 90, 42, 3, 3, "F");
  doc.setDrawColor(...orange);
  doc.setLineWidth(0.5);
  doc.roundedRect(12, 58, 90, 42, 3, 3, "S");

  // Left orange accent bar
  doc.setFillColor(...orange);
  doc.roundedRect(12, 58, 4, 42, 2, 2, "F");

  doc.setTextColor(...orange);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("BILLED TO", 20, 68);

  doc.setTextColor(...dark);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  const customerName = order.customerName || order.username || "Customer";
  const truncatedName = customerName.length > 25 ? customerName.substring(0, 25) + "..." : customerName;
  doc.text(truncatedName, 20, 77);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.setFontSize(9);
  doc.text(`Email: ${order.email}`, 20, 85);
  doc.text(`Phone: ${order.phone}`, 20, 92);

  // Payment status badge
  doc.setFillColor(...green);
  doc.roundedRect(110, 62, 85, 14, 3, 3, "F");
  doc.setTextColor(...white);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PAYMENT CONFIRMED", 152, 71, { align: "center" });

  // =====================
  // ITEMS TABLE HEADER
  // =====================
  const tableTop = 108;

  doc.setFillColor(...orange);
  doc.rect(12, tableTop, pageW - 24, 10, "F");

  doc.setTextColor(...white);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("ITEM", 16, tableTop + 7);
  doc.text("QTY", 125, tableTop + 7, { align: "center" });
  doc.text("UNIT PRICE", 155, tableTop + 7, { align: "center" });
  doc.text("TOTAL", pageW - 16, tableTop + 7, { align: "right" });

  // =====================
  // TABLE ROWS
  // =====================
  let y = tableTop + 10;
  let grandTotal = 0;

  const items = order.items || order.cartItems || [];

  items.forEach((item, index) => {
    const rowTotal = item.price * item.quantity;
    grandTotal += rowTotal;

    // Alternating row background
    if (index % 2 === 0) {
      doc.setFillColor(...cream);
    } else {
      doc.setFillColor(...white);
    }
    doc.rect(12, y, pageW - 24, 10, "F");

    doc.setTextColor(...dark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(item.title || item.name, 16, y + 7);

    doc.text(String(item.quantity), 125, y + 7, { align: "center" });
    doc.text(`N${item.price.toLocaleString()}`, 155, y + 7, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.text(`N${rowTotal.toLocaleString()}`, pageW - 16, y + 7, { align: "right" });

    y += 10;
  });

  // Bottom border of table
  doc.setDrawColor(...orange);
  doc.setLineWidth(0.5);
  doc.line(12, y, pageW - 12, y);

  // =====================
  // TOTALS SECTION
  // =====================
  y += 8;

  // Grand Total box
  doc.setFillColor(...orange);
  doc.roundedRect(pageW - 90, y, 78, 16, 3, 3, "F");

  doc.setTextColor(...white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("GRAND TOTAL:", pageW - 85, y + 10);
  doc.text(`N${grandTotal.toLocaleString()}`, pageW - 16, y + 10, { align: "right" });

  // =====================
  // THANK YOU FOOTER
  // =====================
  const footerY = 270;

  // Footer background
  doc.setFillColor(...darkOrange);
  doc.rect(0, footerY, pageW, 27, "F");

  doc.setFillColor(...orange);
  doc.rect(0, footerY, pageW, 2, "F");

  doc.setTextColor(...white);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Thank you for choosing FoodHive!", pageW / 2, footerY + 10, { align: "center" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Questions? Contact us: welcome@foodhive.com  |  +234 123 456 7890",
    pageW / 2,
    footerY + 18,
    { align: "center" }
  );

  doc.text(
    "This is a computer-generated invoice and requires no signature.",
    pageW / 2,
    footerY + 24,
    { align: "center" }
  );

  // =====================
  // SAVE
  // =====================
  doc.save(`FoodHive-Invoice-${invoiceNumber}.pdf`);
};