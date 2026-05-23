import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBarcelona() {
  const profile = getTrainingCityProfile('barcelona');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
