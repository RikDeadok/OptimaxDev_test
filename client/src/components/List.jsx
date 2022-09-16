import ListItem from "./ListItem";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem todo={item} />
      ))}
    </ul>
  );
};

export default List;