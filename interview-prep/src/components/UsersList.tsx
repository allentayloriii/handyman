import useFetchUsers from "../hooks/useFetchUsers";

function UsersList() {
  const { data, error, loading } = useFetchUsers();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error retrieving users: ${error}</p>}
      {data &&
        data.map(({ email, name, id }) => (
          <li key={id}>
            {name}: {email}
          </li>
        ))}
    </div>
  );
}

export default UsersList;
