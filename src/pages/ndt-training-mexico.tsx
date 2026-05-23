import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMexico() {
  const profile = getTrainingCityProfile('mexico');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
