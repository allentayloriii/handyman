import useFetch from "./useFetch";

const useFetchUsers = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch<User>(url);

  return { data, loading, error };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Record<string, unknown>;
  phone: string;
  website: string;
  company: Record<string, string>
}

export default useFetchUsers;