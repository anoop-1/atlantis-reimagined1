import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGalveston() {
  const profile = getTrainingCityProfile('galveston');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
