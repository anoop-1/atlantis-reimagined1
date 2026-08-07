import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMesaieed() {
  const profile = getTrainingCityProfile('mesaieed');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
