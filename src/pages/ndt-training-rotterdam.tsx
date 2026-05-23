import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRotterdam() {
  const profile = getTrainingCityProfile('rotterdam');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
