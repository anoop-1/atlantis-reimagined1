import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSavannah() {
  const profile = getTrainingCityProfile('savannah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
