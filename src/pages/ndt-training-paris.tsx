import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingParis() {
  const profile = getTrainingCityProfile('paris');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
