"use client";

/* eslint-disable @next/next/no-img-element */
import { Button, buttonVariants } from "@/components/ui/button";
import { CenteredLayout } from "@/components/ui/centeredLayout";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();

  const handleContinue = () => {
    // Save goals and KPIs to state or context
    router.push("/journey/company");
  };

  return (
    <CenteredLayout>
      <section className="relative overflow-hidden py-32">
        <div className="container">
          <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100">
            {/* SVG background pattern (unchanged) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1125">
              {/* ... (SVG content remains the same) ... */}
            </svg>
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-6 text-center">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                alt="BI Tool Logo"
                className="h-16 w-16"
              />
              <div>
                <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                  Unlock Insights with Our BI Tool
                </h1>
                <p className="text-muted-foreground lg:text-xl">
                  Empower your small to mid-sized business with data-driven
                  decisions. Import, analyze, and visualize your data with ease
                  using our AI-powered platform.
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <Button onClick={handleContinue}>Get Started</Button>
                <Button variant="outline">
                  Learn more <ExternalLink className="ml-2 h-4" />
                </Button>
              </div>
              <div className="mt-20 flex flex-col items-center gap-4">
                <p className="text-center text-muted-foreground lg:text-left">
                  Seamlessly integrate with your favorite tools
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group px-3"
                    )}
                  >
                    <img
                      src="https://www.svgrepo.com/show/306208/hubspot.svg?height=24&width=24"
                      alt="Hubspot logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group px-3"
                    )}
                  >
                    <img
                      src="https://www.svgrepo.com/show/314577/salesforce.svg?height=24&width=24"
                      alt="Salesforce logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group px-3"
                    )}
                  >
                    <img
                      src="https://www.svgrepo.com/show/443356/brand-quickbooks.svg?height=24&width=24"
                      alt="QuickBooks logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group px-3"
                    )}
                  >
                    <img
                      src="https://www.svgrepo.com/show/79506/excel-file.svg?height=24&width=24"
                      alt="Microsoft Excel logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CenteredLayout>
  );
}
