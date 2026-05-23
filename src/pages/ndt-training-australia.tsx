import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAustralia() {
  const profile = getTrainingCityProfile('australia');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
