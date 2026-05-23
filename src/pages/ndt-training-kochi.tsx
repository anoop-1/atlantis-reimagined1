import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKochi() {
  const profile = getTrainingCityProfile('kochi');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
