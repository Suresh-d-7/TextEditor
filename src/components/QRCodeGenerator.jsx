
import React, { useEffect } from 'react';
import QRCode from 'react-qr-code'; // Updated import for QR code
import JsBarcode from 'jsbarcode';

const QRCodeGenerator = ({ text }) => {
  const downloadQR = () => {
    const canvas = document.querySelector('#qrcode canvas');
    const pngUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  const downloadBarcode = () => {
    const canvas = document.getElementById('barcode');
    const pngUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'barcode.png';
    link.click();
  };

  useEffect(() => {
    JsBarcode('#barcode', text, {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 50,
      displayValue: true,
    });
  }, [text]);

  return (
    <div>
      <h2>QR Code</h2>
      <div id="qrcode">
        <QRCode value={text} />
      </div>
      <button onClick={downloadQR}>Download QR Code</button>

      <h2>Barcode</h2>
      <canvas id="barcode"></canvas>
      <button onClick={downloadBarcode}>Download Barcode</button>
    </div>
  );
};

export default QRCodeGenerator;
