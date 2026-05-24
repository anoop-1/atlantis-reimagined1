import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPortArthur() {
  const profile = getTrainingCityProfile('port-arthur');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
