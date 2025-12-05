import Spinner from "@/app/_components/loader/Spinner";

export default function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-2xl font-bold text-primary-200">
        Loading cabin details...
      </p>
    </div>
  );
}
