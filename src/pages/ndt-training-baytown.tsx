import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBaytown() {
  const profile = getTrainingCityProfile('baytown');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
