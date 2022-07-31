import Accordion from "./components/Accordion";

export default function App() {
  const containerStyle = {
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
  };
  return (
    <div style={containerStyle}>
      <Accordion
        title="what is your return policy?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      />
      <Accordion
        title="what is your return policy?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      />

      <Accordion
        title="what is your return policy?"
        content="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><br/><p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br/><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>"
      />
    </div>
  );
}
