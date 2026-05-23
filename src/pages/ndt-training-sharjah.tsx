import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSharjah() {
  const profile = getTrainingCityProfile('sharjah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
