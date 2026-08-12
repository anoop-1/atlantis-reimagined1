import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingTexasCity() {
  const profile = getTrainingCityProfile('texas-city');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
