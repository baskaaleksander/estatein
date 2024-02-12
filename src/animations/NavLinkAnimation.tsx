import { motion } from 'framer-motion'

const NavLinkAnimation = ({children} : React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <motion.li 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1 + 2 / 10,
    }}
    className='p-8'
    >
        {children}
    </motion.li>
  )
}

export default NavLinkAnimation