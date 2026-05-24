import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMussafah() {
  const profile = getTrainingCityProfile('mussafah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
