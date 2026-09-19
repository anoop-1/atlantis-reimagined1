import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingGladstone() {
  const profile = getTrainingCityProfile('gladstone');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
