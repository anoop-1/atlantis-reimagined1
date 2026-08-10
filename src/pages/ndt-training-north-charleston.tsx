import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNorthCharleston() {
  const profile = getTrainingCityProfile('north-charleston');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
