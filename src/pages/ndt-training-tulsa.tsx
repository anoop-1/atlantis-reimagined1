import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingTulsa() {
  const profile = getTrainingCityProfile('tulsa');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
