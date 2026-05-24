import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPune() {
  const profile = getTrainingCityProfile('pune');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
