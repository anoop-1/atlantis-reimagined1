import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBeijing() {
  const profile = getTrainingCityProfile('beijing');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
