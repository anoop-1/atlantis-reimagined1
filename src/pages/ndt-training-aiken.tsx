import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAiken() {
  const profile = getTrainingCityProfile('aiken');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
