import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingFortMcmurray() {
  const profile = getTrainingCityProfile('fort-mcmurray');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
