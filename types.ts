export interface TimelineData {
  stage: string;
  days: number;
  color: string;
  description: string;
}

export interface EvidenceData {
  name: string;
  value: number;
  color: string;
}

export interface SimpleStatData {
  name: string;
  value: number;
  color: string;
}

export interface SupportContact {
  name: string;
  phone: string;
  region?: string;
}