import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDarwin() {
  const profile = getTrainingCityProfile('darwin');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
