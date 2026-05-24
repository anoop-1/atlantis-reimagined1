import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKerteh() {
  const profile = getTrainingCityProfile('kerteh');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
