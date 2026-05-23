import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKualaLumpur() {
  const profile = getTrainingCityProfile('kuala-lumpur');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
