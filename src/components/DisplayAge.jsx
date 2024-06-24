import AgeText from "./AgeText";
function DisplayAge({ age }) {
  return (
    <div>
      <AgeText value={age.years ?? "--"} unit="Years" />
      <AgeText value={age.months ?? "--"} unit="Months" />
      <AgeText value={age.days ?? "--"} unit="Days" />
    </div>
  );
}

export default DisplayAge;
