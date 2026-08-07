import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAntofagasta() {
  const profile = getTrainingCityProfile('antofagasta');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
