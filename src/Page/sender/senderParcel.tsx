/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParcelSentQuery } from "@/redux/features/auth/parcel.api";
import { ParcelCancelDialog } from "@/components/modules/parcel/parcelCancelDailog";
import { ParcelStatusLog } from "@/components/modules/parcel/parcelStatusLog";

export default function senderParcel() {
  const { data, isLoading, error } = useParcelSentQuery(undefined);

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
            <TableHead>Cancel</TableHead>
            <TableHead>Status Log</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((Parcel:any) => (
            <TableRow key={Parcel?._id}>
              <TableCell>{Parcel?.type}</TableCell>
              <TableCell>{Parcel?.trackingId}</TableCell>
              <TableCell>{Parcel?.status}</TableCell>
              <TableCell>{Parcel?.sender}</TableCell>
              <TableCell>{Parcel?.receiverAddress}</TableCell>
              <TableCell>{Parcel?.fee}</TableCell>
              <TableCell>
                <ParcelCancelDialog id={Parcel?._id} />
              </TableCell>
              <TableCell>
                <ParcelStatusLog statusLog={Parcel?.statusLog} />
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
