import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingWichita() {
  const profile = getTrainingCityProfile('wichita');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
