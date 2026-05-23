import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGdansk() {
  const profile = getTrainingCityProfile('gdansk');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
