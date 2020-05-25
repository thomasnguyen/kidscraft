import Link from "next/link";

const Home = (props) => {
  return (
    <div>
      <Link href="/sell">
        <a>Go to sell</a>
      </Link>
    </div>
  );
};

export default Home;
