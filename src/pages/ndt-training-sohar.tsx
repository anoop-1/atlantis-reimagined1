import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSohar() {
  const profile = getTrainingCityProfile('sohar');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
