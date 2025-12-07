"use client";

import { deleteReservation } from "@/app/_lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import SpinnerMini from "../loader/SpinnerMini";
import Swal from "sweetalert2";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    Swal.fire({
      title: "Are you sure you want to delete this reservation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#7C99B6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        startTransition(() => {
          onDelete(bookingId);
        });
      }
    });
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
