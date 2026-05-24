import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingJebelAli() {
  const profile = getTrainingCityProfile('jebel-ali');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
