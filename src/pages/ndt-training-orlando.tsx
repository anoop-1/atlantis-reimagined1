import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOrlando() {
  const profile = getTrainingCityProfile('orlando');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
