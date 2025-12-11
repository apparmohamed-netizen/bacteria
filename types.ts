import React from 'react';

export interface Keyword {
  term: string;
  definition?: string;
}

export interface SubSection {
  title: string;
  keywords: string[]; 
}

export interface StudySection {
  id: string;
  title: string;
  color: string;
  icon?: React.ReactNode;
  content: SubSection[];
}

export interface DiagramPart {
  id: string;
  label: string;
  sectionId: string;
  x: number;
  y: number;
}