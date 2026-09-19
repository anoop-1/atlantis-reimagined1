import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNewcastle() {
  const profile = getTrainingCityProfile('newcastle');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
