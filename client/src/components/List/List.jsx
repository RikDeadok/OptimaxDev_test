import ListItem from "../ListItem/ListItem";

const List = ({ list }) => {
  return (
    <ul className="todo-list">
      {list.map((item, index) => (
        <ListItem todo={item} index={index} />
      ))}
    </ul>
  );
};

export default List;