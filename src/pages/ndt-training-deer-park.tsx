import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDeerPark() {
  const profile = getTrainingCityProfile('deer-park');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
