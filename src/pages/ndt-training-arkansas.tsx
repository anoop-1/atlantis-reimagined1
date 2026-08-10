import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingArkansas() {
  const profile = getTrainingCityProfile('arkansas');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
