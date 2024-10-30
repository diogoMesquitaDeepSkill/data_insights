import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation"; // Changed from next/router
import { useEffect } from "react";

export default function Loader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold">Analyzing your data...</p>
          <p className="mt-2 text-sm text-gray-500">
            This may take a few moments
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
