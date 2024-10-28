import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export const exportToPDF = (content) => {
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save("document.pdf");
};

export const exportToWord = (content) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [new Paragraph({ children: [new TextRun(content)] })],
    }],
  });

  Packer.toBlob(doc).then(blob => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.docx';
    link.click();
    URL.revokeObjectURL(url);
  });
};
