import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNashik() {
  const profile = getTrainingCityProfile('nashik');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
