import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingYanbu() {
  const profile = getTrainingCityProfile('yanbu');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
