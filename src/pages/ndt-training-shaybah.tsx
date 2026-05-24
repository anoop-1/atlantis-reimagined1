import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingShaybah() {
  const profile = getTrainingCityProfile('shaybah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
