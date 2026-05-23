import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingManama() {
  const profile = getTrainingCityProfile('manama');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
