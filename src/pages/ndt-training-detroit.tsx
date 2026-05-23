import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDetroit() {
  const profile = getTrainingCityProfile('detroit');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
