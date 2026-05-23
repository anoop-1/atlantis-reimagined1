import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingLagos() {
  const profile = getTrainingCityProfile('lagos');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
