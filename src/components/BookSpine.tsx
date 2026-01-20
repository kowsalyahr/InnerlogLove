import { motion } from "framer-motion";

const BookSpine = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-16 flex-shrink-0 hidden md:block">
      {/* Book spine shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 via-amber-900/20 to-transparent" />
      
      {/* Leather texture spine */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-l-sm">
        {/* Gold embossing lines */}
        <div className="absolute top-8 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
        <div className="absolute top-10 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="absolute bottom-10 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="absolute bottom-8 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
        
        {/* Spine title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="font-serif text-xs tracking-widest text-gold/70 transform -rotate-90 whitespace-nowrap"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            INNERLOG
          </span>
        </div>
      </div>

      {/* Page edges (visible from spine side) */}
      <div className="absolute left-10 top-2 bottom-2 w-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-amber-200/60 to-amber-100/30"
            style={{ top: `${(i + 1) * 7.5}%` }}
          />
        ))}
      </div>

      {/* Binding holes/stitching */}
      <div className="absolute left-8 top-0 bottom-0 w-px flex flex-col justify-evenly py-12">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="w-1.5 h-1.5 -ml-0.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 shadow-inner"
          />
        ))}
      </div>
    </div>
  );
};

export default BookSpine;
