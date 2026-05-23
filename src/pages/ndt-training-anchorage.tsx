import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAnchorage() {
  const profile = getTrainingCityProfile('anchorage');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
