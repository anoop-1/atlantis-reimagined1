import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMiami() {
  const profile = getTrainingCityProfile('miami');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
