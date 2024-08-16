"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { InView } from "@/components/core/in-view"
import { TextEffect } from "@/components/core/text-effect"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  ProductItem,
  Menu,
  MenuItem,
  HoveredLink,
} from "@/components/ui/navbar-menu"
import { NavbarDemo } from "@/components/ui/Navbar"
import AnimatedBackground from "@/components/ui/animated-background"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import TextReveal from "@/components/magicui/text-reveal"
import { SmoothScrollHero } from "@/components/Hero/SmoothScrollHero"

export function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ]

  const imageUrls = [
    "https://images.beta.cosmos.so/e5ebb6f8-8202-40ec-bc70-976f81153501?format=jpeg",
    "https://images.beta.cosmos.so/1b6f1bee-1b4c-4035-9e93-c93ef4d445e1?format=jpeg",
    "https://images.beta.cosmos.so/9968a6cf-d7f6-4ec9-a56d-ac4eef3f8689?format=jpeg",
    "https://images.beta.cosmos.so/4b88a39c-c657-4911-b843-b473237e83b5?format=jpeg",
    "https://images.beta.cosmos.so/86af92c0-064d-4801-b7ed-232535b03328?format=jpeg",
    "https://images.beta.cosmos.so/399e2a4a-e118-4aaf-9c7e-155ed18f6556?format=jpeg",
    "https://images.beta.cosmos.so/6ff16bc9-dc94-4549-a057-673a603ce203?format=jpeg",
    "https://images.beta.cosmos.so/d67c3185-4480-4408-8f9d-1cbf541e5d91?format=jpeg",
  ]

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ]

  const columnCount = 3
  const columns = Array.from({ length: columnCount }, (_, i) =>
    imageUrls.filter((_, index) => index % columnCount === i)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DD6E42] via-[#E8DAB2] to-[#4F6D7A] flex flex-col">
      <div className="relative w-full flex items-center justify-center">
        <NavbarDemo className="top-2" />
      </div>
      <main className="flex-grow mt-40 flex items-center justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full">
          <TextEffect
            className="text-[12vw] leading-[0.9] font-bold text-white mb-[120px]"
            preset="fade"
            per="char"
          >
            Reaching for the Stars
          </TextEffect>

          <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center md:justify-between md:items-end">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mb-4 md:mb-0">
              <Image
                src="https://i.pinimg.com/550x/89/fc/75/89fc75d58c64ddf77b4e0f9f96f267aa.jpg"
                width={65}
                height={65}
                alt="profile"
              />
            </div>
            <div className="max-w-xs text-center md:text-right">
              <TextEffect preset="blur" className="text-md md:text-lg">
                We're a cutting-edge aerospace company based in the US that
                launches rockets and explores the final frontier.
              </TextEffect>
              <TextEffect
                preset="blur"
                className="text-md md:text-lg font-bold"
              >
                pushing the boundaries of innovation.
              </TextEffect>
            </div>
          </div>
        </div>
      </main>
      <section className="flex h-max items-end justify-center py-8 md:py-12">
        <InView
          viewOptions={{ margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col space-y-4">
                {column.map((imgSrc, imgIndex) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                    key={`${columnIndex}-${imgIndex}`}
                    className="mb-4"
                  >
                    <img
                      src={imgSrc}
                      alt={`Image placeholder from cosmos.so, index:${
                        columnIndex * columnCount + imgIndex
                      }`}
                      className="w-full rounded-lg object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </InView>
      </section>
      {/* <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div> */}
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg">
        <TextReveal
          text="Your life won't be the same after this experience."
          lastWord="Trust."
          lastWordColor="#DD6E42"
        />
      </div>
      <SmoothScrollHero />
    </div>
  )
}

export default Home
