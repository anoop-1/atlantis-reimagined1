import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingChennai() {
  const profile = getTrainingCityProfile('chennai');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
