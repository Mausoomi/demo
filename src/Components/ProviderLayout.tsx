"use client";

import { Provider } from "react-redux";
import { store } from "../Store/store";
import LayoutWrapper from "./LayoutWrapper";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Provider store={store}>
        {/* <LayoutWrapper>{children}</LayoutWrapper> */}
     {children}
      </Provider>
    </div>
  );
}
