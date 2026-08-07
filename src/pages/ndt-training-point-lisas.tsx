import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPointLisas() {
  const profile = getTrainingCityProfile('point-lisas');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
