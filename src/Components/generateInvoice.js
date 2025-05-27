import jsPDF from "jspdf";

const generateInvoice = (order) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Food Hive - Invoice", 20, 20);

  doc.setFontSize(12);
  doc.text(`Order ID: ${order.id}`, 20, 40);
  
  doc.text(`Customer Name: ${order.customerName}`, 20, 50);
  doc.text(`Email: ${order.email}`, 20, 60);


  doc.text(`Food Item: ${order.title}`, 20, 70);

    doc.text(`Amount Paid: ₦${order.amount}`, 20, 80);

  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 90);

  doc.text("Thank you for your order!", 20, 100);

  doc.save(`invoice-${order.id}.pdf`);
};

export default generateInvoice;

