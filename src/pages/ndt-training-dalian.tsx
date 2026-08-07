import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDalian() {
  const profile = getTrainingCityProfile('dalian');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
