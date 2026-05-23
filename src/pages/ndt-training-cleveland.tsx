import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCleveland() {
  const profile = getTrainingCityProfile('cleveland');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
