import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingShenzhen() {
  const profile = getTrainingCityProfile('shenzhen');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
