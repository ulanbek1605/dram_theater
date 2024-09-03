import React, { Suspense } from "react";
import Forgot from "@/components/ModalLogin/forgotaccount/Forgot";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Forgot />{" "}
    </Suspense>
  );
}

export default Page;
