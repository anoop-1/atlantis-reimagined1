import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingHalifax() {
  const profile = getTrainingCityProfile('halifax');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
