import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKansasCity() {
  const profile = getTrainingCityProfile('kansas-city');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
