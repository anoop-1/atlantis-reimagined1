import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingJubail() {
  const profile = getTrainingCityProfile('jubail');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
