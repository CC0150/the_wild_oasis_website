"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "@/app/_lib/actions";

export default function ReservationList({ bookings, settings }) {
  const [optimisticBookings, setOptimisticBookings] = useOptimistic(
    bookings,
    (currentBookings, bookingId) =>
      currentBookings.filter((booking) => booking.id !== bookingId)
  );

  async function handleDelete(bookingId) {
    setOptimisticBookings(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <div>
      <ul className="space-y-6">
        {optimisticBookings.map((booking) => (
          <ReservationCard
            booking={booking}
            key={booking.id}
            onDelete={handleDelete}
            settings={settings}
          />
        ))}
      </ul>
    </div>
  );
}
