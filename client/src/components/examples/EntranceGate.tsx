import EntranceGate from "../EntranceGate";

export default function EntranceGateExample() {
  return (
    <EntranceGate
      onEnter={() => console.log("User clicked Yes! Entering website...")}
    />
  );
}
