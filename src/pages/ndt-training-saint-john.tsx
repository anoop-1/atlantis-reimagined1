import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSaintJohn() {
  const profile = getTrainingCityProfile('saint-john');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
