
import { TimelineData, EvidenceData, SimpleStatData } from './types';

export const COLORS = {
  gold: '#D4AF37',
  goldDark: '#B8860B',
  cyan: '#00AACC',
  navy: '#60A5FA', // Updated to lighter blue for better contrast on dark backgrounds
  navyDark: '#3B82F6', // Updated to royal blue
  red: '#EF4444',
  green: '#10B981',
  copperRed: '#B87333', // Copper Red as requested
  background: '#1c1c1c',
  surface: '#2a2a2a',
  text: '#E0E0E0',
  textHighlight: '#FAFAFA',
};

// Expanded to 6 datasets to accurately reflect the 3-year criminal timeline vs 2-month civil timeline
export const TIMELINE_DATA: TimelineData[] = [
  { stage: 'Interim Interdict', days: 3, color: COLORS.cyan, description: 'Civil: Immediate Legal Protection' },
  { stage: 'Final Order', days: 60, color: COLORS.copperRed, description: 'Civil: Permanent Removal Order' },
  { stage: 'SAPS: Forensics', days: 180, color: COLORS.gold, description: 'Criminal: Evidence Analysis Backlog' },
  { stage: 'NPA: Decision', days: 365, color: '#A16207', description: 'Criminal: Decision to Prosecute' },
  { stage: 'Court: Trial', days: 730, color: '#666666', description: 'Criminal: Trial & Postponements' },
  { stage: 'Final Verdict', days: 1095, color: COLORS.red, description: 'Criminal: Conviction (Avg 3 Years)' },
];

export const EVIDENCE_DATA: EvidenceData[] = [
  { name: 'The Content', value: 33, color: COLORS.navy },
  { name: 'Perpetrator ID', value: 33, color: COLORS.cyan },
  { name: 'Timestamp', value: 34, color: COLORS.gold },
];

// Data from Governance, Public Safety, and Justice Survey (GPSJS) 2024/25
export const GBV_SENTENCE_DATA: SimpleStatData[] = [
  { name: 'Not Long Enough', value: 72.7, color: COLORS.red },
  { name: 'Adequate', value: 27.3, color: COLORS.navy },
];

export const COURT_SATISFACTION_DATA: SimpleStatData[] = [
  { name: 'Dissatisfied', value: 55.2, color: COLORS.gold },
  { name: 'Satisfied', value: 44.8, color: COLORS.cyan },
];

// Data from EIU Report: Online Violence Against Women
export const GLOBAL_PREVALENCE_DATA: SimpleStatData[] = [
  { name: 'Witnessed Violence', value: 85, color: COLORS.red },
  { name: 'Personal Experience', value: 38, color: COLORS.gold },
];
