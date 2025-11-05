/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import UserUpdateDailog from "@/components/modules/user/userUpdateDailog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllusersQuery } from "@/redux/features/auth/user.api";


export default function allUser() {
  const { data: allUser } = useGetAllusersQuery(undefined);


  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>role</TableHead>
            <TableHead>email</TableHead>
            <TableHead>_id</TableHead>
            <TableHead>UpDate Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUser?.data?.map((user:any) => (
            <TableRow key={user?._id}>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.role}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?._id}</TableCell>
              <TableCell>
<UserUpdateDailog id={user?._id} ></UserUpdateDailog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total User</TableCell>
            <TableCell >{allUser?.meta?.total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
