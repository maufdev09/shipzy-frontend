/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackageCheck } from "lucide-react";

export function ParcelStatusLog({ statusLog }:any) {

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <PackageCheck />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" min-w-fit w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Parcel StatusLog</AlertDialogTitle>
          <AlertDialogDescription>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>TimeStamp</TableHead>
                  <TableHead>location</TableHead>
                  <TableHead>updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statusLog.map((Parcel:any) => (
                  <TableRow key={Parcel.id}>
                    <TableCell>{Parcel.status}</TableCell>
                    <TableCell>{Parcel.timestamp}</TableCell>
                    <TableCell>{Parcel.location}</TableCell>
                    <TableCell>{Parcel.updatedBy}</TableCell>
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
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
