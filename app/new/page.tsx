import SiteHeader from "@/components/SiteHeader";
import SubmitConfessionForm from "@/components/SubmitConfessionForm";

export default function NewPage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <SubmitConfessionForm />
      </main>
    </>
  );
}
