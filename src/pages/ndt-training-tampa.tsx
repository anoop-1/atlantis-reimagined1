import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingTampa() {
  const profile = getTrainingCityProfile('tampa');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
