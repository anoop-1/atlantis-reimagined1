// NDT Method Selector Quiz Data
// Interactive tool that recommends the best NDT method based on user inputs

export interface SelectorOption {
  label: string;
  value: string;
}

export interface SelectorStep {
  id: string;
  question: string;
  options: SelectorOption[];
}

export interface MethodInfoEntry {
  name: string;
  description: string;
  link: string;
  color: string;
}

export const selectorSteps: SelectorStep[] = [
  {
    id: 'material',
    question: 'What material are you inspecting?',
    options: [
      { label: 'Carbon Steel', value: 'carbon-steel' },
      { label: 'Stainless Steel', value: 'stainless-steel' },
      { label: 'Aluminum', value: 'aluminum' },
      { label: 'Composites', value: 'composites' },
      { label: 'Cast Iron', value: 'cast-iron' },
      { label: 'Exotic Alloys', value: 'exotic-alloys' },
    ],
  },
  {
    id: 'defect',
    question: 'What type of defect are you looking for?',
    options: [
      { label: 'Surface Cracks', value: 'surface-cracks' },
      { label: 'Subsurface Flaws', value: 'subsurface-flaws' },
      { label: 'Volumetric Defects', value: 'volumetric-defects' },
      { label: 'Corrosion / Wall Thinning', value: 'corrosion' },
      { label: 'Weld Defects', value: 'weld-defects' },
      { label: 'Laminations', value: 'laminations' },
    ],
  },
  {
    id: 'access',
    question: 'What access do you have to the component?',
    options: [
      { label: 'Full access both sides', value: 'full-access' },
      { label: 'One side only', value: 'one-side' },
      { label: 'Remote / limited access', value: 'remote' },
      { label: 'In-service, no shutdown', value: 'in-service' },
    ],
  },
  {
    id: 'code',
    question: 'Which governing code or standard applies?',
    options: [
      { label: 'ASME Section V', value: 'asme-v' },
      { label: 'API 510 / 570 / 653', value: 'api' },
      { label: 'AWS D1.1', value: 'aws-d1' },
      { label: 'EN / ISO Standards', value: 'en-iso' },
      { label: 'No specific code', value: 'none' },
    ],
  },
  {
    id: 'priority',
    question: 'What is your top priority?',
    options: [
      { label: 'Speed', value: 'speed' },
      { label: 'Accuracy', value: 'accuracy' },
      { label: 'Cost', value: 'cost' },
      { label: 'Portability', value: 'portability' },
      { label: 'Safety (no radiation)', value: 'safety' },
    ],
  },
  {
    id: 'volume',
    question: 'How many items need inspection?',
    options: [
      { label: 'Single item', value: 'single' },
      { label: '10 \u2013 50 items', value: 'batch-small' },
      { label: '50 \u2013 200 items', value: 'batch-medium' },
      { label: '200+ items', value: 'batch-large' },
    ],
  },
];

// Scoring weights: each method gets a 0-100 score for every answer option.
// Higher score = better fit for that scenario.
export const methodScores: Record<string, Record<string, number>> = {
  'ultrasonic-testing': {
    // Material
    'carbon-steel': 95,
    'stainless-steel': 90,
    'aluminum': 85,
    'composites': 40,
    'cast-iron': 60,
    'exotic-alloys': 80,
    // Defect
    'surface-cracks': 70,
    'subsurface-flaws': 95,
    'volumetric-defects': 90,
    'corrosion': 95,
    'weld-defects': 90,
    'laminations': 95,
    // Access
    'full-access': 90,
    'one-side': 95,
    'remote': 60,
    'in-service': 80,
    // Code
    'asme-v': 95,
    'api': 95,
    'aws-d1': 85,
    'en-iso': 90,
    'none': 85,
    // Priority
    'speed': 80,
    'accuracy': 90,
    'cost': 75,
    'portability': 85,
    'safety': 95,
    // Volume
    'single': 90,
    'batch-small': 85,
    'batch-medium': 75,
    'batch-large': 65,
  },

  'radiographic-testing': {
    // Material
    'carbon-steel': 90,
    'stainless-steel': 85,
    'aluminum': 90,
    'composites': 70,
    'cast-iron': 85,
    'exotic-alloys': 85,
    // Defect
    'surface-cracks': 50,
    'subsurface-flaws': 85,
    'volumetric-defects': 95,
    'corrosion': 60,
    'weld-defects': 95,
    'laminations': 30,
    // Access
    'full-access': 95,
    'one-side': 40,
    'remote': 50,
    'in-service': 30,
    // Code
    'asme-v': 95,
    'api': 90,
    'aws-d1': 95,
    'en-iso': 90,
    'none': 80,
    // Priority
    'speed': 40,
    'accuracy': 95,
    'cost': 50,
    'portability': 40,
    'safety': 20,
    // Volume
    'single': 85,
    'batch-small': 75,
    'batch-medium': 60,
    'batch-large': 45,
  },

  'magnetic-particle-testing': {
    // Material
    'carbon-steel': 95,
    'stainless-steel': 70,
    'aluminum': 0,
    'composites': 0,
    'cast-iron': 85,
    'exotic-alloys': 40,
    // Defect
    'surface-cracks': 95,
    'subsurface-flaws': 60,
    'volumetric-defects': 20,
    'corrosion': 30,
    'weld-defects': 85,
    'laminations': 40,
    // Access
    'full-access': 90,
    'one-side': 90,
    'remote': 30,
    'in-service': 70,
    // Code
    'asme-v': 90,
    'api': 85,
    'aws-d1': 90,
    'en-iso': 85,
    'none': 80,
    // Priority
    'speed': 90,
    'accuracy': 75,
    'cost': 90,
    'portability': 85,
    'safety': 90,
    // Volume
    'single': 85,
    'batch-small': 90,
    'batch-medium': 90,
    'batch-large': 85,
  },

  'penetrant-testing': {
    // Material
    'carbon-steel': 90,
    'stainless-steel': 95,
    'aluminum': 95,
    'composites': 50,
    'cast-iron': 60,
    'exotic-alloys': 90,
    // Defect
    'surface-cracks': 95,
    'subsurface-flaws': 10,
    'volumetric-defects': 10,
    'corrosion': 20,
    'weld-defects': 75,
    'laminations': 15,
    // Access
    'full-access': 90,
    'one-side': 90,
    'remote': 25,
    'in-service': 55,
    // Code
    'asme-v': 90,
    'api': 80,
    'aws-d1': 85,
    'en-iso': 85,
    'none': 85,
    // Priority
    'speed': 70,
    'accuracy': 80,
    'cost': 95,
    'portability': 90,
    'safety': 85,
    // Volume
    'single': 90,
    'batch-small': 85,
    'batch-medium': 80,
    'batch-large': 70,
  },

  'eddy-current-testing': {
    // Material
    'carbon-steel': 80,
    'stainless-steel': 90,
    'aluminum': 95,
    'composites': 30,
    'cast-iron': 50,
    'exotic-alloys': 90,
    // Defect
    'surface-cracks': 90,
    'subsurface-flaws': 70,
    'volumetric-defects': 40,
    'corrosion': 80,
    'weld-defects': 70,
    'laminations': 60,
    // Access
    'full-access': 85,
    'one-side': 90,
    'remote': 75,
    'in-service': 90,
    // Code
    'asme-v': 85,
    'api': 80,
    'aws-d1': 70,
    'en-iso': 90,
    'none': 80,
    // Priority
    'speed': 95,
    'accuracy': 85,
    'cost': 70,
    'portability': 90,
    'safety': 95,
    // Volume
    'single': 75,
    'batch-small': 85,
    'batch-medium': 95,
    'batch-large': 95,
  },

  'visual-testing': {
    // Material
    'carbon-steel': 85,
    'stainless-steel': 85,
    'aluminum': 85,
    'composites': 80,
    'cast-iron': 80,
    'exotic-alloys': 75,
    // Defect
    'surface-cracks': 70,
    'subsurface-flaws': 10,
    'volumetric-defects': 10,
    'corrosion': 80,
    'weld-defects': 70,
    'laminations': 10,
    // Access
    'full-access': 95,
    'one-side': 85,
    'remote': 90,
    'in-service': 95,
    // Code
    'asme-v': 85,
    'api': 90,
    'aws-d1': 80,
    'en-iso': 80,
    'none': 95,
    // Priority
    'speed': 95,
    'accuracy': 50,
    'cost': 95,
    'portability': 95,
    'safety': 95,
    // Volume
    'single': 95,
    'batch-small': 95,
    'batch-medium': 90,
    'batch-large': 85,
  },
};

export const methodInfo: Record<string, MethodInfoEntry> = {
  'ultrasonic-testing': {
    name: 'Ultrasonic Testing (UT)',
    description:
      'Uses high-frequency sound waves to detect subsurface flaws, measure wall thickness, and characterize materials. Ideal for corrosion mapping, weld inspection, and thickness gauging across a wide range of metals.',
    link: '/ultrasonic-testing',
    color: '#2563eb',
  },
  'radiographic-testing': {
    name: 'Radiographic Testing (RT)',
    description:
      'Employs X-rays or gamma rays to produce an image of the internal structure of a component. Provides a permanent record and excels at detecting volumetric defects such as porosity, inclusions, and incomplete fusion in welds.',
    link: '/radiographic-testing',
    color: '#dc2626',
  },
  'magnetic-particle-testing': {
    name: 'Magnetic Particle Testing (MT)',
    description:
      'Detects surface and near-surface discontinuities in ferromagnetic materials by applying a magnetic field and fine iron particles. Fast, portable, and cost-effective for weld and structural steel inspection.',
    link: '/magnetic-particle-testing',
    color: '#059669',
  },
  'penetrant-testing': {
    name: 'Liquid Penetrant Testing (PT)',
    description:
      'Applies a visible or fluorescent dye to the surface to reveal cracks, porosity, and other surface-breaking defects. Works on almost any non-porous material and requires minimal equipment.',
    link: '/penetrant-testing',
    color: '#d97706',
  },
  'eddy-current-testing': {
    name: 'Eddy Current Testing (ET)',
    description:
      'Induces electrical currents in conductive materials to detect surface and near-surface flaws, measure conductivity, and sort alloys. Excellent for high-speed automated inspection of tubing and heat exchangers.',
    link: '/eddy-current-testing',
    color: '#7c3aed',
  },
  'visual-testing': {
    name: 'Visual Testing (VT)',
    description:
      'The most fundamental and widely used NDT method. Employs direct or remote visual examination (borescopes, drones, cameras) to identify surface conditions, misalignment, corrosion, and weld profile issues.',
    link: '/visual-testing',
    color: '#0891b2',
  },
};
