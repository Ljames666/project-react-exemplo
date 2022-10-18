interface LogoProps {
  image: string;
  title: string;
}

export default function Logo(props: LogoProps) {
  return (
    <>
      <img src={props.image} alt={props.title} width="80" />
    </>
  );
}
