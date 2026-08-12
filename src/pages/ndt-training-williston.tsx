import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingWilliston() {
  const profile = getTrainingCityProfile('williston');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
