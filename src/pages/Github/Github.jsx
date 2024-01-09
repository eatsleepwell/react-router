import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/eatsleepwell`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="flex flex-col m-4 bg-gray-600 text-white p-4 gap-3">
      <h2 className="text-center text-3xl">Github</h2>
      <img src={data.avatar_url} alt="" className=" w-32 h-32 rounded-full" />
      <div className="flex flex-col bg-gray-500 w-fit p-4 text-gray-200">
        <span>{data.login}</span>
        <span>{data.name}</span>
        <span>{data.bio}</span>
        <span>Repo: {data.public_repos}</span>
      </div>
    </div>
  );
};

export default Github;

export const githubInfo = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/eatsleepwell`);
    const data = response.json();
    return data;
  } catch (err) {}
};
