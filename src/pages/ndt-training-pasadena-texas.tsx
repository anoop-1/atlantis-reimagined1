import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingPasadenaTexas() {
  const profile = getTrainingCityProfile('pasadena-texas');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
