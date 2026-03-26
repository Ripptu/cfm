import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Lock, Zap, Globe, Sparkles } from "lucide-react"

function CleaningAnimation() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.3 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-white" />
      </motion.div>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"]

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-1.5 w-full max-w-[140px] h-full`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-white/20 rounded-md h-5 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 bg-white/10 rounded"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -20, position: 'absolute' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-3xl md:text-4xl font-sans font-medium text-white"
            >
              Schnell
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm text-gray-400">Reaktionszeit</span>
      <div className="w-full max-w-[120px] h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  )
}

function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active)
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }))
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s)
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-2">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            shield.active ? 'bg-white/20' : 'bg-white/5'
          }`}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock className={`w-5 h-5 ${shield.active ? 'text-white' : 'text-gray-600'}`} />
        </motion.div>
      ))}
    </div>
  )
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3, 4])

  return (
    <div className="flex items-center justify-center h-full relative">
      <Globe className="w-16 h-16 text-white/80 z-10" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-16 h-16 border-2 border-white/30 rounded-full"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default function BentoGrid01() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] max-w-7xl mx-auto">
      
      {/* 1. Unterhaltsreinigung - Tall (2x2) */}
      <motion.div
        className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 1)" }}
      >
        <div className="flex-1">
          <CleaningAnimation />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-xl text-white font-medium">Unterhaltsreinigung</h3>
          <p className="text-gray-400 text-sm mt-1">Gründliche, regelmäßige Reinigung für ein repräsentatives Erscheinungsbild.</p>
        </div>
      </motion.div>

      {/* 2. Technisches FM - Standard (2x1) */}
      <motion.div
        className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1">
          <LayoutAnimation />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-xl text-white font-medium">Technisches FM</h3>
          <p className="text-gray-400 text-sm mt-1">Wartung, Instandhaltung und Betriebstechnik für reibungslose Abläufe.</p>
        </div>
      </motion.div>

      {/* 3. Grünanlagenpflege - Tall (2x2) */}
      <motion.div
        className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <GlobalNetwork />
          </div>
        </div>
        <div className="mt-auto relative z-20 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-2">
          <h3 className="font-serif text-xl text-white flex items-center gap-2 font-medium">
            <Globe className="w-5 h-5" />
            Grünanlagenpflege
          </h3>
          <p className="text-gray-400 text-sm mt-1">Gepflegte Außenanlagen, die einen perfekten ersten Eindruck hinterlassen.</p>
        </div>
      </motion.div>

      {/* 4. Hausmeisterservice - Standard (2x1) */}
      <motion.div
        className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1">
          <SpeedIndicator />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-xl text-white font-medium">Hausmeisterservice</h3>
          <p className="text-gray-400 text-sm mt-1">Schnelle Hilfe direkt vor Ort für alle kleinen und großen Anliegen.</p>
        </div>
      </motion.div>

      {/* 5. Sicherheitsdienste - Wide (3x1) */}
      <motion.div
        className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1">
          <SecurityBadge />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-xl text-white flex items-center gap-2 font-medium">
            <Lock className="w-5 h-5" />
            Sicherheitsdienste
          </h3>
          <p className="text-gray-400 text-sm mt-1">Objektschutz und Pfortendienst für maximale Sicherheit rund um die Uhr.</p>
        </div>
      </motion.div>

      {/* 6. Energiemanagement - Wide (3x1) */}
      <motion.div
        className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 0.98 }}
      >
        <div className="flex-1 flex items-center justify-center">
          <Zap className="w-16 h-16 text-white" />
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-xl text-white font-medium">Energiemanagement</h3>
          <p className="text-gray-400 text-sm mt-1">Verbrauchsoptimierung für nachhaltige Kosteneinsparungen.</p>
        </div>
      </motion.div>

    </div>
  )
}
