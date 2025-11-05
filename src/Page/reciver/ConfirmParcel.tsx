/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParcelIncomingQuery } from "@/redux/features/auth/parcel.api";

import { ParcelConfirmDialog } from "@/components/modules/parcel/parcelConfirmDailog";

export default function ConfirmedParcel() {
  const { data, isLoading, error } = useParcelIncomingQuery(undefined);

  const confirmedData = data?.data?.filter(
    (item:any) => item.status === "DELIVERED"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading parcels</div>;

  return (
    <div className="w-full p-8">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Tracking Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Reciver Address</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Confirm</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {confirmedData.map((Parcel:any) => (
            <TableRow key={Parcel?._id}>
              <TableCell>{Parcel?.type}</TableCell>
              <TableCell>{Parcel?.trackingId}</TableCell>
              <TableCell>{Parcel?.status}</TableCell>
              <TableCell>{Parcel?.sender.name}</TableCell>
              <TableCell>{Parcel?.receiverAddress}</TableCell>
              <TableCell>{Parcel?.fee}</TableCell>
              <TableCell>
                <ParcelConfirmDialog id={Parcel?._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
          <TableCell colSpan={3}>Total Parcel</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
        </TableFooter>
      </Table>
    </div>
  );
}
