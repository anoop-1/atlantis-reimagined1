import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNewMexico() {
  const profile = getTrainingCityProfile('new-mexico');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
