import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGlasgow() {
  const profile = getTrainingCityProfile('glasgow');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
