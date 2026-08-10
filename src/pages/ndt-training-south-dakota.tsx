import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSouthDakota() {
  const profile = getTrainingCityProfile('south-dakota');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
