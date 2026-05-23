import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPhilippines() {
  const profile = getTrainingCityProfile('philippines');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
