import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRasLaffan() {
  const profile = getTrainingCityProfile('ras-laffan');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
