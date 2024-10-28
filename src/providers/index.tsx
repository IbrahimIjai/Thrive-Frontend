"use client";

import { FC, ReactNode } from "react";
import Web3ContextProvider from "./web3-provider";
import { State } from "wagmi";
import { ThemeProvider } from "./theme-provider";
export const RootProvider = ({
	children,
	cookies,
}: {
	children: ReactNode;
	cookies: string | null;
}) => {
	return (
		<Web3ContextProvider cookies={cookies}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				// disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</Web3ContextProvider>
	);
};
