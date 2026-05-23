import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBaltimore() {
  const profile = getTrainingCityProfile('baltimore');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
