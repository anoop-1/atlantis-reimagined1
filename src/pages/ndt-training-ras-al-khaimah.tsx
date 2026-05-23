import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRasAlKhaimah() {
  const profile = getTrainingCityProfile('ras-al-khaimah');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
