import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingHamburg() {
  const profile = getTrainingCityProfile('hamburg');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
