"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

const TextRevealByWord = ({
  text,
  className,
  lastWord = "",
  lastWordColor = "lightgreen",
}) => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const words = text.split(" ")
  const hasLastWord = lastWord !== ""

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center justify-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap justify-center p-5 text-[10vw] font-bold text-black/20 dark:text-white/20 md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
          }
        >
          {words.slice(0, -1).map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
          {hasLastWord && (
            <Word
              key={words.length}
              progress={scrollYProgress}
              range={[1 - 1 / words.length, 1]}
              customStyles={{
                color: lastWordColor,
              }}
            >
              {lastWord}
            </Word>
          )}
        </p>
      </div>
    </div>
  )
}

const Word = ({ children, progress, range, customStyles = {} }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const color = useTransform(
    opacity,
    [0, 1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  )

  return (
    <span className="relative mx-0.5 lg:mx-1">
      <span className={"absolute opacity-0"}>{children}</span>
      <motion.span
        style={{ opacity: opacity, color: color, ...customStyles }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default TextRevealByWord
