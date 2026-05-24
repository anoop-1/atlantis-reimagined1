import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKhurais() {
  const profile = getTrainingCityProfile('khurais');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
