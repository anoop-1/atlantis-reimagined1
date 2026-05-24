import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKhobar() {
  const profile = getTrainingCityProfile('khobar');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
