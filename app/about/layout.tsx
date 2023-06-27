"use client";

import Script from "next/script";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
      <Script id="iubenda-banner" src="/js/iubenda.js" />
      <Script src="//cdn.iubenda.com/cs/gpp/stub.js" type="text/javascript" />;
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        type="text/javascript"
        async
      />
    </>
  );
}
