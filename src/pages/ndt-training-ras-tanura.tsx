import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRasTanura() {
  const profile = getTrainingCityProfile('ras-tanura');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
