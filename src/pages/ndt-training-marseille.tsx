import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMarseille() {
  const profile = getTrainingCityProfile('marseille');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
