import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingVermont() {
  const profile = getTrainingCityProfile('vermont');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
