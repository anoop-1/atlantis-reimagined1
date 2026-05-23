import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPortland() {
  const profile = getTrainingCityProfile('portland');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
