import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSarnia() {
  const profile = getTrainingCityProfile('sarnia');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
