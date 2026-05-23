import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSydney() {
  const profile = getTrainingCityProfile('sydney');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
