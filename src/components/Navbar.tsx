import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import images from 'assets';
import Link from 'next/link';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <nav className="fixed z-10 flex-row w-full p-4 border-b flexBetween dark:bg-nft-dark bg-slate-200 dark:border-nft-dark border-nft-gray-1">
            <div className="flex flex-row justify-start flex-1">
                <Link href="/" >
                    <div className="cursor-pointer flexCenter md:hidden">
                        <Image src="/logo.png" width={100} height={100} objectFit="contain" alt="logo" />
                    </div>
                </Link>
            </div>

            <ConnectButton />
        </nav>
    );
};

export default Navbar;