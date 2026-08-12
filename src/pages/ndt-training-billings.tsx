import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBillings() {
  const profile = getTrainingCityProfile('billings');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
