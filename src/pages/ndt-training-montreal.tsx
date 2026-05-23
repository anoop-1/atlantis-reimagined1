import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMontreal() {
  const profile = getTrainingCityProfile('montreal');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
