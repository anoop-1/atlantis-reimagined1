import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingShanghai() {
  const profile = getTrainingCityProfile('shanghai');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
