import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAbqaiq() {
  const profile = getTrainingCityProfile('abqaiq');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
