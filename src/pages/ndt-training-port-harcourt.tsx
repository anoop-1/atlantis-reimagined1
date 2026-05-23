import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPortHarcourt() {
  const profile = getTrainingCityProfile('port-harcourt');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
