import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCanada() {
  const profile = getTrainingCityProfile('canada');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
