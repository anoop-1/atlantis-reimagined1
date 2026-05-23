import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNashville() {
  const profile = getTrainingCityProfile('nashville');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
