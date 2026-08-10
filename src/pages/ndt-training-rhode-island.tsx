import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRhodeIsland() {
  const profile = getTrainingCityProfile('rhode-island');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
