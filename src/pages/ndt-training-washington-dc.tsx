import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingWashingtonDc() {
  const profile = getTrainingCityProfile('washington-dc');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
