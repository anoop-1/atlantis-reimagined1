import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBrisbane() {
  const profile = getTrainingCityProfile('brisbane');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
