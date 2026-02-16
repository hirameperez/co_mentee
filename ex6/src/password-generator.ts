export default function passwordGenerator(len: number = 6): string {
  if (len < 6) {
    console.log('maximun length is 6');
  };

  if (len > 20) {
    console.log('minimum length is 20');
  }

  const upper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers: string = '0123456789';
  const special: string = '.!_"#$%&/()-';
  const allChars: string = upper + numbers + special;

  let password: string =
    upper[Math.floor(Math.random() * upper.length)]!
  numbers[Math.floor(Math.random() * numbers.length)]!
  special[Math.floor(Math.random() * special.length)]!


  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};