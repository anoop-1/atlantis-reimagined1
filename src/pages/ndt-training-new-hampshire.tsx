import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNewHampshire() {
  const profile = getTrainingCityProfile('new-hampshire');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
