import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNorway() {
  const profile = getTrainingCityProfile('norway');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
