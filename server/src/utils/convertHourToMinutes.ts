export default function convertHourToMinutes(time: string) {
  // Divide em hora e minutos
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
