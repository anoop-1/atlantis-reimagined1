import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPengerang() {
  const profile = getTrainingCityProfile('pengerang');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
