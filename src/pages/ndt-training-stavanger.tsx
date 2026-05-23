import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingStavanger() {
  const profile = getTrainingCityProfile('stavanger');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
