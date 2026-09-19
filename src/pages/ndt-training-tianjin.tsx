import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingTianjin() {
  const profile = getTrainingCityProfile('tianjin');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
