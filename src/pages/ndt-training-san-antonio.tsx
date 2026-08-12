import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSanAntonio() {
  const profile = getTrainingCityProfile('san-antonio');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
