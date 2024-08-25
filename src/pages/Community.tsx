import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from '../components/ui/SideBarAll';
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";


const Community = () => {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-glass-purple w-full flex-1 overflow-hidden",
                "h-screen"
            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={true}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <>
                            <Logo />
                        </>            <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} className="bg-glass rounded-br-2xl rounded-tr-sm rounded-tl-2xl rounded-bl-sm justify-center"/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Tian Mesa",
                                href: "/account",
                                icon: (
                                    <img
                                        src="src/assets/user.jpeg"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}

export default Community

export const Logo = () => {
    return (
        <Link
            to={'/main'}
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 w-fit"
        >
            <div className="h-6 w-7 bg-blue-gradient rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 ">

            </div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
            </motion.span>
        </Link>
    );
};
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="rounded-tl-2xl bg-primary w-full h-full">
                <Spotlight />
            </div>
        </div>
    );
};
