import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMilwaukee() {
  const profile = getTrainingCityProfile('milwaukee');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
