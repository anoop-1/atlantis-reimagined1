import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSurat() {
  const profile = getTrainingCityProfile('surat');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
