import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAlZour() {
  const profile = getTrainingCityProfile('al-zour');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
