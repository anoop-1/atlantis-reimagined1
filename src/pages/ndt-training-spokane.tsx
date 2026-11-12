import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

// North American training expansion 2026-11-11: profile in src/data/training-cities.ts, long-form copy in
// src/data/deep-content/ndt-training-spokane.json (wired by scripts/add-na-training-cities-2026-11.mjs).
export default function NDTTrainingSpokane() {
  const profile = getTrainingCityProfile('spokane');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
