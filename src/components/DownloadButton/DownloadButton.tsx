/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

import html2canvas from 'html2canvas';
import JsFileDownloader from 'js-file-downloader';
import { jsPDF } from 'jspdf';

import { useCurrentTest } from '@/store/search';

import './NanumGothic-Regular-normal.js';

const DownloadButton = () => {
  const { currentTest } = useCurrentTest();

  const downloadFileFromURL = (url: string) => {
    console.log('downloading from:', url);
    const fullURL = url;
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

  const addHTML2Canvas = () => {
    html2canvas(document.querySelector('#answer') as HTMLElement)
      .then((canvas1) => {
        document.body.appendChild(canvas1);
        canvas1.id = 'answerCanvas';
      })
      .then(() => {
        if (currentTest.test_type !== 'Dictation') {
          console.log('in current test blanks');
          html2canvas(document.querySelector('#exercise') as HTMLElement)
            .then((canvas2) => {
              document.body.appendChild(canvas2);
              canvas2.id = 'exerciseCanvas';
            })
            .then(() => {
              generatePDF();
            });
        } else {
          generatePDF();
        }
      });
  };

  const generatePDF = () => {
    console.log('currentTest:', currentTest);
    if (currentTest.url) {
      console.log('downloading Audio File');
      downloadFileFromURL(currentTest.url);
    }

    // https://www.youtube.com/watch?v=qEhhMZ0ObEw
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'in',
      format: 'a4',
      putOnlyUsedFonts: true,
    });

    // const verticalOffset = 1;
    const width = doc.internal.pageSize.getWidth();

    doc.setFontSize(24);
    doc.text(currentTest.title, width / 2, 4, { align: 'center' });
    doc.setFontSize(14);
    doc.text(`${currentTest.language} - ${currentTest.level}`, width / 2, 5, { align: 'center' });
    doc.text(`${currentTest.test_type}`, width / 2, 5.3, { align: 'center' });

    const addTestPage = () => {
      // doc.setFontSize(14);
      // const textlines = doc.splitTextToSize(text, 6.25);
      // doc.text(textlines, 1, 1 + (verticalOffset + 14 / 36));
      const canvasA = document.querySelector('#answerCanvas') as HTMLCanvasElement | null;
      if (canvasA !== null) {
        canvasA.style.display = 'block';
        const imgWidth = canvasA.width / 128;
        const imgHeight = canvasA.height / 128;
        const imgData = canvasA.toDataURL('image/png', 1.0);
        doc.addImage(imgData, 'PNG', 1, 1, imgWidth, imgHeight);
        canvasA.remove();
      }

      if (currentTest.test_type !== 'Dictation') {
        doc.addPage();
        const canvasB = document.querySelector('#exerciseCanvas') as HTMLCanvasElement | null;
        if (canvasB !== null) {
          canvasB.style.display = 'block';
          const imgWidthB = canvasB.width / 128;
          const imgHeightB = canvasB.height / 128;
          const imgDataB = canvasB.toDataURL('image/png', 1.0);
          doc.addImage(imgDataB, 'PNG', 1, 1, imgWidthB, imgHeightB);
          canvasB.remove();
        }
      }

      doc.save(currentTest.title);
    };

    if (currentTest.text) {
      doc.addPage();
      // doc.setFontSize(16);
      // doc.text('Answer Page', width / 2, verticalOffset + 14 / 36, { align: 'center' });
      addTestPage();
    }

    doc.save(currentTest.title);
  };

  return (
    <Button variant="contained" endIcon={<DownloadIcon />} onClick={addHTML2Canvas}>
      Download
    </Button>
  );
};

export default DownloadButton;
