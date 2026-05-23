import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSeattle() {
  const profile = getTrainingCityProfile('seattle');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
