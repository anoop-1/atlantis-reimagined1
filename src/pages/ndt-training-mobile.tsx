import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMobile() {
  const profile = getTrainingCityProfile('mobile');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
