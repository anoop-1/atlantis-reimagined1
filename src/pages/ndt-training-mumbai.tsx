import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMumbai() {
  const profile = getTrainingCityProfile('mumbai');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
