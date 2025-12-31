"use client";

import { updateProfile } from "@/app/_lib/actions";
import Image from "next/image";
import SubmitButton from "../button/SubmitButton";

export default function UpdateProfileForm({ children, guest }) {
  const { countryFlag, fullName, email, nationalID } = guest || {};

  return (
    <div>
      <form
        action={updateProfile}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            name="fullName"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            defaultValue={fullName}
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            name="email"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            defaultValue={email}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <div className="relative h-5 w-8">
              {countryFlag ? (
                <Image
                  src={countryFlag}
                  alt="Country flag"
                  fill
                  className="object-cover rounded-sm"
                />
              ) : (
                // 当没有国旗数据时，渲染一个占位符或空标签，避免崩溃
                <div className="bg-primary-700 w-full h-full rounded-sm" />
              )}
            </div>
          </div>
          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultValue={nationalID}
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton>Update profile</SubmitButton>
        </div>
      </form>
    </div>
  );
}
