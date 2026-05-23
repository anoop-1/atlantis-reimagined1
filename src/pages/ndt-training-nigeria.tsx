import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNigeria() {
  const profile = getTrainingCityProfile('nigeria');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
