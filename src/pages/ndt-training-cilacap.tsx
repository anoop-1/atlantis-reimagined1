import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCilacap() {
  const profile = getTrainingCityProfile('cilacap');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
