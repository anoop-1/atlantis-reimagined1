// ROI Calculator Data
// Interactive tool for estimating return on investment from risk-based inspection programs

export interface IndustryDefaults {
  vessels: number;
  piping_km: number;
  tanks: number;
  avg_inspection_cost: number;
  avg_failure_cost: number;
  inspection_frequency_months: number;
}

export interface InspectionApproach {
  name: string;
  description: string;
  efficiency_factor: number;
  false_call_rate: number;
  coverage_rate: number;
}

export interface SavingsFactors {
  reduced_downtime_pct: number;
  avoided_failures_pct: number;
  maintenance_optimization_pct: number;
  insurance_reduction_pct: number;
}

export const industryDefaults: Record<string, IndustryDefaults> = {
  refinery: {
    vessels: 50,
    piping_km: 25,
    tanks: 10,
    avg_inspection_cost: 5000,
    avg_failure_cost: 500000,
    inspection_frequency_months: 24,
  },
  petrochemical: {
    vessels: 40,
    piping_km: 30,
    tanks: 8,
    avg_inspection_cost: 5500,
    avg_failure_cost: 450000,
    inspection_frequency_months: 24,
  },
  pipeline: {
    vessels: 5,
    piping_km: 200,
    tanks: 2,
    avg_inspection_cost: 4000,
    avg_failure_cost: 750000,
    inspection_frequency_months: 36,
  },
  'power-generation': {
    vessels: 20,
    piping_km: 15,
    tanks: 5,
    avg_inspection_cost: 6000,
    avg_failure_cost: 600000,
    inspection_frequency_months: 18,
  },
  offshore: {
    vessels: 30,
    piping_km: 10,
    tanks: 4,
    avg_inspection_cost: 8000,
    avg_failure_cost: 1200000,
    inspection_frequency_months: 12,
  },
};

export const inspectionApproaches: Record<string, InspectionApproach> = {
  'time-based': {
    name: 'Time-Based Inspection (TBI)',
    description:
      'Traditional fixed-interval inspections where every asset is inspected on the same schedule regardless of condition or risk. Straightforward to plan but often results in over-inspection of low-risk assets and potential under-inspection of high-risk ones.',
    efficiency_factor: 1.0,
    false_call_rate: 0.15,
    coverage_rate: 0.6,
  },
  'risk-based': {
    name: 'Risk-Based Inspection (RBI)',
    description:
      'Prioritizes inspection resources based on the probability and consequence of failure for each asset. Uses degradation mechanisms, operating history, and engineering analysis to set optimal intervals -- reducing total inspections while improving safety and coverage.',
    efficiency_factor: 0.65,
    false_call_rate: 0.05,
    coverage_rate: 0.95,
  },
};

export const savingsFactors: SavingsFactors = {
  reduced_downtime_pct: 0.3,
  avoided_failures_pct: 0.45,
  maintenance_optimization_pct: 0.2,
  insurance_reduction_pct: 0.1,
};
