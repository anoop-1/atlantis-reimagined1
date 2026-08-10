import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingEastHartford() {
  const profile = getTrainingCityProfile('east-hartford');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
