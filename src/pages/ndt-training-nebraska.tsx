import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNebraska() {
  const profile = getTrainingCityProfile('nebraska');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
