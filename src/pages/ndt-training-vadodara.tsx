import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingVadodara() {
  const profile = getTrainingCityProfile('vadodara');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
