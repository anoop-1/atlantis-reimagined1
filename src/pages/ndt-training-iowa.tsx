import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingIowa() {
  const profile = getTrainingCityProfile('iowa');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
