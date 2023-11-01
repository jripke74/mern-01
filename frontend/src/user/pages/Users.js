import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jeff Rip",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2Fphoto%2Fcool-glowing-flower%2F&psig=AOvVaw2CDPbkAKz--FNl-Hap5og5&ust=1698943817088000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiA2Ieho4IDFQAAAAAdAAAAABAE",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
