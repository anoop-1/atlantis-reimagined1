import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingStLouis() {
  const profile = getTrainingCityProfile('st-louis');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
