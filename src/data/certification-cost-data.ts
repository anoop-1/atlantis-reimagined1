// Certification Cost Calculator Data
// Interactive tool for estimating NDT certification costs and salary expectations

export interface CostBreakdown {
  examFee: number;
  trainingCost: number;
  materialsCost: number;
  travelEstimate: number;
}

export interface SalaryRange {
  min: number;
  median: number;
  max: number;
}

export interface Certification {
  id: string;
  name: string;
  shortName: string;
  provider: 'ASNT' | 'API' | 'ISO';
  levels: string[];
  costsByRegion: Record<string, Record<string, CostBreakdown>>;
  salaryByLevel: Record<string, SalaryRange>;
}

export interface Region {
  id: string;
  name: string;
  currency: string;
  exchangeRate: number;
}

export const regions: Region[] = [
  { id: 'usa', name: 'United States', currency: 'USD', exchangeRate: 1.0 },
  { id: 'middle-east', name: 'Middle East (UAE / Saudi)', currency: 'USD', exchangeRate: 1.0 },
  { id: 'india', name: 'India', currency: 'INR', exchangeRate: 83.0 },
  { id: 'europe', name: 'Europe (EU / UK)', currency: 'EUR', exchangeRate: 0.92 },
  { id: 'asia-pacific', name: 'Asia-Pacific', currency: 'USD', exchangeRate: 1.0 },
];

export const certifications: Certification[] = [
  // ── ASNT Level I ──────────────────────────────────────────────────────
  {
    id: 'asnt-level-i',
    name: 'ASNT NDT Level I',
    shortName: 'ASNT I',
    provider: 'ASNT',
    levels: ['Level I'],
    costsByRegion: {
      usa: {
        'Level I': { examFee: 350, trainingCost: 2500, materialsCost: 300, travelEstimate: 500 },
      },
      'middle-east': {
        'Level I': { examFee: 400, trainingCost: 3000, materialsCost: 350, travelEstimate: 600 },
      },
      india: {
        'Level I': { examFee: 250, trainingCost: 1500, materialsCost: 200, travelEstimate: 300 },
      },
      europe: {
        'Level I': { examFee: 380, trainingCost: 2800, materialsCost: 320, travelEstimate: 550 },
      },
      'asia-pacific': {
        'Level I': { examFee: 300, trainingCost: 2000, materialsCost: 250, travelEstimate: 450 },
      },
    },
    salaryByLevel: {
      'Level I': { min: 38000, median: 48000, max: 62000 },
    },
  },

  // ── ASNT Level II ─────────────────────────────────────────────────────
  {
    id: 'asnt-level-ii',
    name: 'ASNT NDT Level II',
    shortName: 'ASNT II',
    provider: 'ASNT',
    levels: ['Level II'],
    costsByRegion: {
      usa: {
        'Level II': { examFee: 450, trainingCost: 3500, materialsCost: 400, travelEstimate: 600 },
      },
      'middle-east': {
        'Level II': { examFee: 500, trainingCost: 4000, materialsCost: 450, travelEstimate: 700 },
      },
      india: {
        'Level II': { examFee: 300, trainingCost: 2000, materialsCost: 250, travelEstimate: 350 },
      },
      europe: {
        'Level II': { examFee: 480, trainingCost: 3800, materialsCost: 420, travelEstimate: 650 },
      },
      'asia-pacific': {
        'Level II': { examFee: 380, trainingCost: 2800, materialsCost: 300, travelEstimate: 500 },
      },
    },
    salaryByLevel: {
      'Level II': { min: 52000, median: 68000, max: 88000 },
    },
  },

  // ── ASNT Level III ────────────────────────────────────────────────────
  {
    id: 'asnt-level-iii',
    name: 'ASNT NDT Level III',
    shortName: 'ASNT III',
    provider: 'ASNT',
    levels: ['Level III'],
    costsByRegion: {
      usa: {
        'Level III': { examFee: 700, trainingCost: 5500, materialsCost: 600, travelEstimate: 800 },
      },
      'middle-east': {
        'Level III': { examFee: 750, trainingCost: 6000, materialsCost: 650, travelEstimate: 900 },
      },
      india: {
        'Level III': { examFee: 500, trainingCost: 3000, materialsCost: 400, travelEstimate: 500 },
      },
      europe: {
        'Level III': { examFee: 720, trainingCost: 5800, materialsCost: 620, travelEstimate: 850 },
      },
      'asia-pacific': {
        'Level III': { examFee: 600, trainingCost: 4500, materialsCost: 500, travelEstimate: 650 },
      },
    },
    salaryByLevel: {
      'Level III': { min: 78000, median: 105000, max: 145000 },
    },
  },

  // ── ISO 9712 ──────────────────────────────────────────────────────────
  {
    id: 'iso-9712',
    name: 'ISO 9712 NDT Certification',
    shortName: 'ISO 9712',
    provider: 'ISO',
    levels: ['Level I', 'Level II', 'Level III'],
    costsByRegion: {
      usa: {
        'Level I': { examFee: 400, trainingCost: 2200, materialsCost: 300, travelEstimate: 500 },
        'Level II': { examFee: 500, trainingCost: 3200, materialsCost: 400, travelEstimate: 600 },
        'Level III': { examFee: 600, trainingCost: 5000, materialsCost: 550, travelEstimate: 800 },
      },
      'middle-east': {
        'Level I': { examFee: 450, trainingCost: 2500, materialsCost: 350, travelEstimate: 550 },
        'Level II': { examFee: 550, trainingCost: 3500, materialsCost: 450, travelEstimate: 650 },
        'Level III': { examFee: 650, trainingCost: 5500, materialsCost: 600, travelEstimate: 900 },
      },
      india: {
        'Level I': { examFee: 300, trainingCost: 1800, materialsCost: 200, travelEstimate: 300 },
        'Level II': { examFee: 380, trainingCost: 2500, materialsCost: 280, travelEstimate: 400 },
        'Level III': { examFee: 500, trainingCost: 3500, materialsCost: 400, travelEstimate: 500 },
      },
      europe: {
        'Level I': { examFee: 380, trainingCost: 2000, materialsCost: 280, travelEstimate: 450 },
        'Level II': { examFee: 480, trainingCost: 3000, materialsCost: 380, travelEstimate: 550 },
        'Level III': { examFee: 580, trainingCost: 4800, materialsCost: 520, travelEstimate: 750 },
      },
      'asia-pacific': {
        'Level I': { examFee: 350, trainingCost: 2000, materialsCost: 250, travelEstimate: 400 },
        'Level II': { examFee: 420, trainingCost: 2800, materialsCost: 320, travelEstimate: 500 },
        'Level III': { examFee: 550, trainingCost: 4200, materialsCost: 480, travelEstimate: 650 },
      },
    },
    salaryByLevel: {
      'Level I': { min: 36000, median: 46000, max: 60000 },
      'Level II': { min: 50000, median: 65000, max: 85000 },
      'Level III': { min: 75000, median: 100000, max: 140000 },
    },
  },

  // ── API 510 ───────────────────────────────────────────────────────────
  {
    id: 'api-510',
    name: 'API 510 Pressure Vessel Inspector',
    shortName: 'API 510',
    provider: 'API',
    levels: ['Certified'],
    costsByRegion: {
      usa: {
        Certified: { examFee: 400, trainingCost: 3500, materialsCost: 500, travelEstimate: 700 },
      },
      'middle-east': {
        Certified: { examFee: 400, trainingCost: 4000, materialsCost: 550, travelEstimate: 800 },
      },
      india: {
        Certified: { examFee: 400, trainingCost: 2500, materialsCost: 350, travelEstimate: 400 },
      },
      europe: {
        Certified: { examFee: 400, trainingCost: 3800, materialsCost: 520, travelEstimate: 750 },
      },
      'asia-pacific': {
        Certified: { examFee: 400, trainingCost: 3000, materialsCost: 400, travelEstimate: 550 },
      },
    },
    salaryByLevel: {
      Certified: { min: 72000, median: 95000, max: 130000 },
    },
  },

  // ── API 570 ───────────────────────────────────────────────────────────
  {
    id: 'api-570',
    name: 'API 570 Piping Inspector',
    shortName: 'API 570',
    provider: 'API',
    levels: ['Certified'],
    costsByRegion: {
      usa: {
        Certified: { examFee: 400, trainingCost: 3500, materialsCost: 500, travelEstimate: 700 },
      },
      'middle-east': {
        Certified: { examFee: 400, trainingCost: 4000, materialsCost: 550, travelEstimate: 800 },
      },
      india: {
        Certified: { examFee: 400, trainingCost: 2500, materialsCost: 350, travelEstimate: 400 },
      },
      europe: {
        Certified: { examFee: 400, trainingCost: 3800, materialsCost: 520, travelEstimate: 750 },
      },
      'asia-pacific': {
        Certified: { examFee: 400, trainingCost: 3000, materialsCost: 400, travelEstimate: 550 },
      },
    },
    salaryByLevel: {
      Certified: { min: 70000, median: 92000, max: 128000 },
    },
  },

  // ── API 653 ───────────────────────────────────────────────────────────
  {
    id: 'api-653',
    name: 'API 653 Aboveground Storage Tank Inspector',
    shortName: 'API 653',
    provider: 'API',
    levels: ['Certified'],
    costsByRegion: {
      usa: {
        Certified: { examFee: 400, trainingCost: 3500, materialsCost: 500, travelEstimate: 700 },
      },
      'middle-east': {
        Certified: { examFee: 400, trainingCost: 4000, materialsCost: 550, travelEstimate: 800 },
      },
      india: {
        Certified: { examFee: 400, trainingCost: 2500, materialsCost: 350, travelEstimate: 400 },
      },
      europe: {
        Certified: { examFee: 400, trainingCost: 3800, materialsCost: 520, travelEstimate: 750 },
      },
      'asia-pacific': {
        Certified: { examFee: 400, trainingCost: 3000, materialsCost: 400, travelEstimate: 550 },
      },
    },
    salaryByLevel: {
      Certified: { min: 74000, median: 98000, max: 135000 },
    },
  },
];
