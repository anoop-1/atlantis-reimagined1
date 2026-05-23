import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAustin() {
  const profile = getTrainingCityProfile('austin');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
