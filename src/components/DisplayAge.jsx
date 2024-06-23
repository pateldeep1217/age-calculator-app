import AgeText from "./AgeText";
function DisplayAge() {
  return (
    <div>
      <AgeText value="--" unit="Years" />
      <AgeText value="--" unit="Months" />
      <AgeText value="--" unit="Days" />
    </div>
  );
}

export default DisplayAge;
