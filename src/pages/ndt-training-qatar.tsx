import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingQatar() {
  const profile = getTrainingCityProfile('qatar');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
