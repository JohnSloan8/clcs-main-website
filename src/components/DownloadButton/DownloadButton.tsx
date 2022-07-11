/* eslint-disable  @typescript-eslint/no-explicit-any */
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

import JsFileDownloader from 'js-file-downloader';
import { jsPDF } from 'jspdf';

import { useApiURL, useCurrentTest } from '@/store/search';

import tcdLogo from '/tcdLogo.png';

const DownloadButton = () => {
  const { currentTest } = useCurrentTest();
  const apiMediaURL = useApiURL();

  const downloadFileFromURL = (url: string) => {
    console.log('downloading from:', apiMediaURL + url);
    const fullURL = apiMediaURL + url.slice(1);
    new JsFileDownloader({
      url: fullURL,
    })
      .then(function () {
        console.log('done downloading');
      })
      .catch(function (error) {
        console.log('error in downloading file:', error);
      });
  };

  const generatePDF = () => {
    console.log('currentTest:', currentTest);
    if (currentTest.url) {
      downloadFileFromURL(currentTest.url);
    }

    // https://www.youtube.com/watch?v=qEhhMZ0ObEw
    const doc: any = new jsPDF({
      orientation: 'p',
      unit: 'in',
      format: 'a4',
      putOnlyUsedFonts: true,
    });

    const verticalOffset = 1;
    const width = doc.internal.pageSize.getWidth();
    doc.addImage(tcdLogo, 'PNG', 2, 0.5, 4, 1.3);
    doc.setFontSize(16);
    doc.text(width / 2, 2, 'Centre for Speech and Communication Studies', { align: 'center' });
    doc.setFontSize(24);
    doc.text(width / 2, 5, currentTest.title, { align: 'center' });
    doc.setFontSize(14);
    doc.text(width / 2, 5.5, `${currentTest.language} - ${currentTest.level}`, { align: 'center' });
    doc.text(width / 2, 5.75, `${currentTest.test_type}`, { align: 'center' });

    const addTestPage = (text: string) => {
      doc.setFontSize(14);
      const textlines = doc.splitTextToSize(text, 6.25);
      doc.text(1, 1 + (verticalOffset + 14 / 36), textlines);
    };

    if (currentTest.blanks) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text(width / 2, verticalOffset + 14 / 36, 'Test Page', { align: 'center' });
      addTestPage(currentTest.blanks.replaceAll('~', '_'));
    }
    if (currentTest.text) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text(width / 2, verticalOffset + 14 / 36, 'Answer Page', { align: 'center' });
      addTestPage(currentTest.text);
    }

    doc.save(currentTest.title);
  };

  return (
    <Button variant="contained" endIcon={<DownloadIcon />} onClick={generatePDF}>
      Download
    </Button>
  );
};

export default DownloadButton;
