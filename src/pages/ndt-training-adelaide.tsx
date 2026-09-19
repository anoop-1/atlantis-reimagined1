import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAdelaide() {
  const profile = getTrainingCityProfile('adelaide');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
