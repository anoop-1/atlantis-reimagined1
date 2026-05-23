import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMinneapolis() {
  const profile = getTrainingCityProfile('minneapolis');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
