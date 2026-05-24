import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOdessa() {
  const profile = getTrainingCityProfile('odessa');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
