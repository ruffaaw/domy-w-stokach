export const metadata = {
  title: "Domy przy winnicy w Stokach",
  description: "Funkcjonalne domy w zabudowie bliźniaczej",
  image: "/logo.png",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
    </head>
  );
}
