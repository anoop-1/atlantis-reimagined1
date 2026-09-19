import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingQingdao() {
  const profile = getTrainingCityProfile('qingdao');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
