import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBathMaine() {
  const profile = getTrainingCityProfile('bath-maine');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
