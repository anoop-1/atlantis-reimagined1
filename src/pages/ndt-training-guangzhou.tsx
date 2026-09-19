import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGuangzhou() {
  const profile = getTrainingCityProfile('guangzhou');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
