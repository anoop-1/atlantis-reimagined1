import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGroton() {
  const profile = getTrainingCityProfile('groton');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
