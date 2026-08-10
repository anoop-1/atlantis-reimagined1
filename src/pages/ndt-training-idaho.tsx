import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingIdaho() {
  const profile = getTrainingCityProfile('idaho');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
