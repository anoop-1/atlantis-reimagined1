import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAntwerp() {
  const profile = getTrainingCityProfile('antwerp');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
