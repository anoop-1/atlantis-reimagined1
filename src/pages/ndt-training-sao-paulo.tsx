import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSaoPaulo() {
  const profile = getTrainingCityProfile('sao-paulo');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
