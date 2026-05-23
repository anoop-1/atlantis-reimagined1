import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMidland() {
  const profile = getTrainingCityProfile('midland');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
