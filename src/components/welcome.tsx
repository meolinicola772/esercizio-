interface WelcomeProps {
  name: string;
}

function Welcome({ name }: WelcomeProps) {
  return <h1>Benvenuto, {name}!</h1>;
}

export default Welcome;