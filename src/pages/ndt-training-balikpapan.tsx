import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBalikpapan() {
  const profile = getTrainingCityProfile('balikpapan');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
