import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOakRidge() {
  const profile = getTrainingCityProfile('oak-ridge');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
