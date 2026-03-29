import { Variants, SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";

export const sidebarVariants: Variants = {
  open: { pointerEvents: "auto" },
  closed: { pointerEvents: "none" },
};

export const backgroundVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navVariants: Variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const itemVariants: Variants = {
  open: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.3 } },
  closed: { y: 20, opacity: 0, transition: { ease: "easeIn", duration: 0.2 } },
};

// SVG Path untuk hamburger toggle
interface PathProps extends SVGMotionProps<SVGPathElement> {
  d?: string;
  variants?: Variants;
}

export const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="#78716c"
    strokeLinecap="round"
    {...props}
  />
);

// Hamburger button
interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      style={{
        background: "white",
        border: "1px solid #f5f5f4",
        borderRadius: "50%",
        width: "42px",
        height: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <Path
          variants={{
            closed: { d: "M 2 5 L 18 5" },
            open: { d: "M 3 17 L 17 3" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 2 10 L 18 10"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 15 L 18 15" },
            open: { d: "M 3 3 L 17 17" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  );
}