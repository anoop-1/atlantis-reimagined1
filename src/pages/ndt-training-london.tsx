import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingLondon() {
  const profile = getTrainingCityProfile('london');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
