import ListItem from "../ListItem/ListItem";

const List = ({ list }) => {
  return (
    <ul className="todo-list">
      {list.map((item) => (
        <ListItem todo={item} />
      ))}
    </ul>
  );
};

export default List;