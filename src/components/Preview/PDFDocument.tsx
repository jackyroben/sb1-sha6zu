import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../types/cv';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  }
});

interface PDFDocumentProps {
  data: CVData;
}

export const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => {
  const { personalInfo } = data;
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.section}>
          <h1 style={styles.heading}>{personalInfo.firstName} {personalInfo.lastName}</h1>
          <p style={styles.text}>{personalInfo.title}</p>
          <p style={styles.text}>{personalInfo.email}</p>
          <p style={styles.text}>{personalInfo.phone}</p>
          <p style={styles.text}>{personalInfo.location}</p>
        </div>
      </Page>
    </Document>
  );
};