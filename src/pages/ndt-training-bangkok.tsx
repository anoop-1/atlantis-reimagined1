import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBangkok() {
  const profile = getTrainingCityProfile('bangkok');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
