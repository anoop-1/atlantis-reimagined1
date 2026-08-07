import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingUlsan() {
  const profile = getTrainingCityProfile('ulsan');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
