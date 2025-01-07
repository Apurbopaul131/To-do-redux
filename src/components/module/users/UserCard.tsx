import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

type TUserProp = {
  user: IUser;
};
const UserCard = ({ user }: TUserProp) => {
  console.log(user);
  return (
    <div className="flex justify-between items-center p-5 border-2 rounded-md border-green-500">
      <div>
        <h1>{user.name}</h1>
      </div>
      <div>
        <Button variant="link" className="p-0 text-red-500">
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
