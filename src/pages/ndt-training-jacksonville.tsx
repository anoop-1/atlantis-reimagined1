import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingJacksonville() {
  const profile = getTrainingCityProfile('jacksonville');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
