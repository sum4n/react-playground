function ListItems(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItems key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function ListRender() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals} />
    </div>
  );
}

export default ListRender;
