import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBintulu() {
  const profile = getTrainingCityProfile('bintulu');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
