import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jeff Rip",
      image:
        "https://gratisography.com/wp-content/uploads/2023/05/gratisography-luminescent-flower-free-stock-photo-1170x780.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
