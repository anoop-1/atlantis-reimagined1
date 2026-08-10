import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDelaware() {
  const profile = getTrainingCityProfile('delaware');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
