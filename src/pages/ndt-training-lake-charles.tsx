import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingLakeCharles() {
  const profile = getTrainingCityProfile('lake-charles');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
