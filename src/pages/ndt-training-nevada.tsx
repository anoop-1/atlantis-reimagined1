import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNevada() {
  const profile = getTrainingCityProfile('nevada');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
