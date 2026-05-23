import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCalgary() {
  const profile = getTrainingCityProfile('calgary');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
