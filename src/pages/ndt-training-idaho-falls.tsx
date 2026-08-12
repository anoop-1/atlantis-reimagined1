import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingIdahoFalls() {
  const profile = getTrainingCityProfile('idaho-falls');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
