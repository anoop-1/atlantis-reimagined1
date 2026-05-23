import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBrazil() {
  const profile = getTrainingCityProfile('brazil');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
