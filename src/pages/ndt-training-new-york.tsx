import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNewYork() {
  const profile = getTrainingCityProfile('new-york');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
