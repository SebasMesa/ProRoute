import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: React.ComponentProps<typeof Link>;
}) => {
  const { open, animate } = useSidebar();
      console.log(link.href)
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center gap-2 group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
