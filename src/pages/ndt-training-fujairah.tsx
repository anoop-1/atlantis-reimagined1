import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingFujairah() {
  const profile = getTrainingCityProfile('fujairah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
