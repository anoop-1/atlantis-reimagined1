import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingJurongIsland() {
  const profile = getTrainingCityProfile('jurong-island');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
