import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKuwait() {
  const profile = getTrainingCityProfile('kuwait');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
