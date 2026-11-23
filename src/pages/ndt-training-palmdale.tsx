import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

// US training expansion 2026-11-23: profile in src/data/training-cities.ts, long-form copy in
// src/data/deep-content/ndt-training-palmdale.json (wired by scripts/add-na-training-cities-2026-11.mjs).
export default function NDTTrainingPalmdale() {
  const profile = getTrainingCityProfile('palmdale');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
