import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSouthKorea() {
  const profile = getTrainingCityProfile('south-korea');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
