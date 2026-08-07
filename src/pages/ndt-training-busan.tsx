import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBusan() {
  const profile = getTrainingCityProfile('busan');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
