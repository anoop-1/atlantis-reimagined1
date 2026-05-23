import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingFortWorth() {
  const profile = getTrainingCityProfile('fort-worth');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
