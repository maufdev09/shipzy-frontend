import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useConfirmParcelMutation } from "@/redux/features/auth/parcel.api";
import { PackageCheck } from "lucide-react";
import { toast } from "sonner";

export function ParcelConfirmDialog({ id }: { id: string }) {
  const [confirmParcel] = useConfirmParcelMutation();
  const handleConfirm = async () => {
    try {
      await confirmParcel(id).unwrap();
    } catch (error) {
      toast.error("Failed to confirm parcel.");
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <PackageCheck />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Parcel</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Confirm parcel with ID: {id}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
