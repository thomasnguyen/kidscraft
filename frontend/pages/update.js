import UpdateItem from "../components/UpdateItem";

const Update = (props) => {
  console.log(props);
  return (
    <div>
      <UpdateItem id={props.query.id} />
    </div>
  );
};

export default Update;
