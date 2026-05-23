import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingUae() {
  const profile = getTrainingCityProfile('uae');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
