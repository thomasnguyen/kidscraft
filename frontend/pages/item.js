import SingleItem from "../components/SingleItem";

const Item = (props) => {
  console.log(props.query.id);
  return (
    <div>
      sfdsdf
      <SingleItem id={props.query.id} />
    </div>
  );
};

export default Item;
