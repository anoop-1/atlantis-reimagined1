import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingWinnipeg() {
  const profile = getTrainingCityProfile('winnipeg');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
