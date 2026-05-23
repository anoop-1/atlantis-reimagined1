import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBatonRouge() {
  const profile = getTrainingCityProfile('baton-rouge');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
