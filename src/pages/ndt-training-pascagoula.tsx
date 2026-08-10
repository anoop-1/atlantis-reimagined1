import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPascagoula() {
  const profile = getTrainingCityProfile('pascagoula');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
