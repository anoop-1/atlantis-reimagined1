import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMilan() {
  const profile = getTrainingCityProfile('milan');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
