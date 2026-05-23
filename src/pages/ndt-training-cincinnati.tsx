import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCincinnati() {
  const profile = getTrainingCityProfile('cincinnati');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
