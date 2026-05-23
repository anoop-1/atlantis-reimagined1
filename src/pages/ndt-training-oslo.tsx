import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOslo() {
  const profile = getTrainingCityProfile('oslo');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
