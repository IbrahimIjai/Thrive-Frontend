"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useAppKit } from "@reown/appkit/react";
import { useRouter } from "next/navigation";
import { ThriveEvmConnectButton } from "@/components/wagmi/connect-button";

export default function Header() {
	const { isConnected, address } = useAccount();
	const { open, close } = useAppKit();
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<nav className="fixed top-0  left-0 right-0 w-full flex  items-center justify-between px-8 py-4 border-b bg-background/40 backdrop-blur-lg">
			<div
				onClick={() => router.push("/")}
				className="flex  items-center cursor-pointer">
				<Image src="/logo.svg" height={30} width={30} alt="thrive logo" />
				<span className="">Thrive</span>
			</div>
			<ThriveEvmConnectButton />
		</nav>
	);
}
