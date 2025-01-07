import AddUser from "@/components/module/users/AddUser";
import UserCard from "@/components/module/users/UserCard";
import { selactUser } from "@/redux/features/user/userSlice";
import { useAppSelactor } from "@/redux/hook";

const Users = () => {
  const users = useAppSelactor(selactUser);
  return (
    <div className="max-w-7xl mx-auto border-2 px-5 mt-20 py-5">
      <div className="flex justify-end">
        <AddUser />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3  gap-y-5 my-10">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
