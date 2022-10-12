export default function Information() {
  const heading = "Make remote work";

  const details =
    "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.";
  return (
    <div>
      <h1>{heading}</h1>
      <h3>{details}</h3>
      <button>Learn More</button>
    </div>
  );
}
