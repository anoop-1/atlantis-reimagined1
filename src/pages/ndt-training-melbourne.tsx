import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMelbourne() {
  const profile = getTrainingCityProfile('melbourne');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
