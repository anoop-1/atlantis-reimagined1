import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingManila() {
  const profile = getTrainingCityProfile('manila');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
