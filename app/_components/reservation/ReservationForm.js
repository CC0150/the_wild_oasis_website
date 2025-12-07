"use client";

import { createReservation } from "@/app/_lib/actions";
import { useReservationStore } from "@/app/store/reservationStore";
import { differenceInDays } from "date-fns";
import SubmitButton from "../button/SubmitButton";

function ReservationForm({ cabin, user }) {
  const { id, maxCapacity, price, discount } = cabin;
  const range = useReservationStore((state) => state.range);
  const resetRange = useReservationStore((state) => state.resetRange);

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (price - discount);

  const bookingData = {
    cabinId: id,
    numNights,
    cabinPrice,
    startDate,
    endDate,
  };

  const createReservationWithBookingData = createReservation.bind(
    null,
    bookingData
  );

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-2 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createReservationWithBookingData}
        action={async (formData) => {
          await createReservationWithBookingData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="space-y-2">
          <label>Do you want breakfast included?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasBreakfast"
                value="true"
                className="text-accent-500"
                defaultChecked
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasBreakfast"
                value="false"
                className="text-accent-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end items-center gap-6">
          {!startDate || !endDate ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton>Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
