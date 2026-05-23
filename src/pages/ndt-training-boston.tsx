import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBoston() {
  const profile = getTrainingCityProfile('boston');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
