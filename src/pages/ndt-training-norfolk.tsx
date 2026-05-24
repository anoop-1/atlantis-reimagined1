import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNorfolk() {
  const profile = getTrainingCityProfile('norfolk');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
