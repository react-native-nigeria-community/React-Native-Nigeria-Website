import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoPNG from "../../assets/img/nav-logo.png";
import ButtonComponent from "../commons/button.jsx";
import en from "../../locales/en.js";
import NavList from "../commons/nav-list.jsx";
import { getNavLinks } from "../../../utils/nav-links.jsx";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-white lg:bg-bg1">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">

        {/* Desktop Nav Links — use motion.div instead of motion.li */}
        <motion.ul
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.07 }}
          className="hidden lg:flex items-center gap-12 text-primary absolute left-1/2 -translate-x-1/2"
        >
          {getNavLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <NavList label={link.label} link={link.link} isActive={location.pathname === link.link} />
            </motion.div>
          ))}
        </motion.ul>

        {/* Desktop Logo */}
        <Link to="/" className="hidden lg:flex items-center gap-2">
          <motion.img
            src={LogoPNG}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, ease: "easeInOut" }}
            whileHover={{ rotate: 360, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col leading-tight"
          >
            <span className="text-primary text-sm font-semibold">{en.reactNativeNigeria.line1}</span>
            <span className="text-primary text-sm font-semibold">{en.reactNativeNigeria.line2}</span>
          </motion.div>
        </Link>

        {/* Desktop Button */}
        <motion.a
          href={en.joinCommunityLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <ButtonComponent variant="primary">{en.joinCommunity}</ButtonComponent>
        </motion.a>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={LogoPNG}
              alt="Logo"
              className="h-8 w-auto cursor-pointer"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, ease: "easeInOut" }}
              whileHover={{ rotate: 360, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            />
            <span className="flex flex-col leading-tight text-black font-medium text-sm">
              <span>{en.reactNativeNigeria.line1}</span>
              <span>{en.reactNativeNigeria.line2}</span>
            </span>
          </Link>

          {/* Hamburger to X */}
          <button
            aria-label="open-menu"
            onClick={toggle}
            className="text-black text-3xl relative w-8 h-8 z-50"
          >
            <motion.div className="absolute inset-0 flex flex-col justify-center gap-1.5">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className="block w-7 h-0.5 bg-current origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-7 h-0.5 bg-current" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className="block w-7 h-0.5 bg-current origin-center" />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-bg1 z-40"
            onClick={close}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="h-full w-full flex flex-col items-center justify-center space-y-8"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={close}
                className="absolute top-7 right-7 text-4xl text-primary"
              >
                ×
              </motion.button>

              {getNavLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link to={link.link} onClick={close} className="text-xl text-primary">
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href={en.joinCommunityLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <ButtonComponent variant="primary" className="px-6 py-3">
                  {en.joinCommunity}
                </ButtonComponent>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarComponent;