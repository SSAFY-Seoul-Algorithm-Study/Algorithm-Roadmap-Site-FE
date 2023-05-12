import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function LoginCard({
  title,
  demo,
  large,
}: {
  title: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`w-3/4 relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${large ? "md:col-span-2" : ""
        }`}
    >
      <div className="mt-12 mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal mb-4">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
        </div>
      </div>
      <div className="flex h-60 items-center justify-center">{demo}</div>
    </div>
  );
}
