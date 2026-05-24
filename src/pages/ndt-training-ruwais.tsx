import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRuwais() {
  const profile = getTrainingCityProfile('ruwais');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
