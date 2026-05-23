import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMuscat() {
  const profile = getTrainingCityProfile('muscat');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
