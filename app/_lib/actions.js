"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
  getSettings,
} from "./data-service";
import { redirect } from "next/navigation";

export async function signInWithGitHub() {
  await signIn("github", {
    redirectTo: "/account",
  });
}

export async function signOutAciton() {
  await signOut({
    redirectTo: "/",
  });
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("-");

  if (!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Invalid national ID number.");
  }
  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };
  await updateGuest(session.user.guestId, updateData);

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to delete a reservation.");
  }

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not authorized to delete this reservation.");
  }

  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update a reservation.");
  }

  const bookingId = Number(formData.get("bookingId"));

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not authorized to update this reservation.");
  }

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    hasBreakfast: formData.get("hasBreakfast") === "true",
  };

  await updateBooking(bookingId, updateData);

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to create a reservation.");
  }

  const hasBreakfast = formData.get("hasBreakfast") === "true";
  const { numNights } = bookingData;

  const { breakfastPrice } = await getSettings();
  const extraPrice = hasBreakfast ? breakfastPrice * numNights : 0;
  const totalPrice = bookingData.cabinPrice + extraPrice;

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    extraPrice,
    totalPrice,
    isPaid: false,
    hasBreakfast,
    status: "unconfirmed",
  };

  await createBooking(newBooking);
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/thanks");
}
