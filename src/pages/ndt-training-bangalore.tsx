import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBangalore() {
  const profile = getTrainingCityProfile('bangalore');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
