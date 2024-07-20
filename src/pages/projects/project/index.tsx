import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { blob } from 'stream/consumers'
import Magnetic from '@/components/Magnetic'

export default function Project() {
  const projects = [
    {
      Title: "NoteScape",
      Desc: "NoteScape is a powerful note-taking app featuring bulletins, to-dos, image uploads, and an AI assistant. Built with Next.js 14, Firebase, Vercel Blob, and Novel.sh, it offers seamless sync across devices and a rich editing experience.",
      Mockup: '/assets/mockups/NoteScape.png',
      Lang: "next ts sass firebase",
      Blog: "123",
      Github: "",
      Site: "123",
    },
    {
      Title: "AcademiaHUB",
      Desc: "AcademiaHUB: Bunk management, Reminders, and CGPA calculator. Your all-in-one website, seamlessly connected to your Google account for on-the-go accessibility.",
      Mockup: '/assets/mockups/academiaHub.png',
      Lang: "react js css firebase",
      Blog: "",
      Github: "",
      Site: "123",
    },
    {
      Title: "Manga Scraper",
      Desc: "Manga Scraping Tool made in python, It fetches the manga page from the website and downloads it in JPG format and saves it locally. This is basically web Scraping",
      Mockup: '/assets/mockups/mangaScrapper.png',
      Lang: "python",
      Blog: "123",
      Github: "",
      Site: "123",
    },
    {
      Title: "Weather App",
      Desc: "This Weather App is made in Java using Java swing component and Openweathermap API for the data.",
      Mockup: '/assets/mockups/weather_app.gif',
      Lang: "java",
      Blog: "123",
      Github: "",
      Site: "123",
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.projectContainer}>
        {
          projects.map((project, index) => {
            return <div className={styles.project} key={index}>
                      <Image src={project.Mockup} alt='project mockup' className={styles.projectImg} width={1280} height={720}/>
                      <div className={styles.content}>
                        <div className="">
                          <p className={styles.title}>{project.Title}</p>
                          <p className={styles.desc}>{project.Desc}</p>
                        </div>
                        <div className={styles.lang}>
                          {
                            project.Lang.split(" ").map((lang, index) => {
                              return <Magnetic key={index}>
                                <Image src={`/assets/${lang}.png`} alt='language logo' width={48} height={48}/>
                              </Magnetic>
                            })
                          }
                        </div>
                        <div className={styles.links}>
                          {project.Blog && <Magnetic><a href={project.Blog}>Blog</a></Magnetic>}
                          {project.Github && <Magnetic><a href={project.Github}>Github</a></Magnetic>}
                          {project.Site && <Magnetic><a href={project.Site}>Site</a></Magnetic>}
                        </div>
                      </div>
                    </div>
          })
        }
      </div>
    </main>
  )
}
