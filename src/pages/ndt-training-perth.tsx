import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPerth() {
  const profile = getTrainingCityProfile('perth');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
