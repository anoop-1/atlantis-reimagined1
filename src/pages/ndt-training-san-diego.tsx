import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSanDiego() {
  const profile = getTrainingCityProfile('san-diego');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
