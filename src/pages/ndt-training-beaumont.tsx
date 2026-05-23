import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBeaumont() {
  const profile = getTrainingCityProfile('beaumont');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
