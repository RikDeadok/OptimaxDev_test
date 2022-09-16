import "./ListItem.css"

const ListItem = ({ todo }) => {
    return (
      <li className="todo-item">
        <div className="todo-item__checkbox">
          <input className="checkbox__input" type="checkbox" id="{todo}" name="{todo}"/>
          <label className="checkbox__label" for="{todo}"></label>
        </div>
        <div className="todo-item__todo">
          {todo}
        </div>
        <button className="todo-item__btn">Delete</button>
      </li>
    );
  };
  export default ListItem;