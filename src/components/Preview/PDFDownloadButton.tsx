import React from 'react';
import { useTranslation } from 'react-i18next';
import { pdf } from '@react-pdf/renderer';
import { useCVStore } from '../../store/cvStore';
import { PDFDocument } from './PDFDocument';

export const PDFDownloadButton: React.FC = () => {
  const { t } = useTranslation();
  const cvData = useCVStore((state) => state.data);

  const handleDownload = async () => {
    try {
      const blob = await pdf(<PDFDocument data={cvData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cvData.personalInfo.firstName}-${cvData.personalInfo.lastName}-CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      {t('downloadPDF')}
    </button>
  );
};