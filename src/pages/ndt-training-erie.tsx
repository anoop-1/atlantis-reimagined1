import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

// North American training expansion 2026-11-11: profile in src/data/training-cities.ts, long-form copy in
// src/data/deep-content/ndt-training-erie.json (wired by scripts/add-na-training-cities-2026-11.mjs).
export default function NDTTrainingErie() {
  const profile = getTrainingCityProfile('erie');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
