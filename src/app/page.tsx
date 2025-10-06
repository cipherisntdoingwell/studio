import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/typing-animation";

export default function Home() {
  const projects = PlaceHolderImages.filter((img) =>
    img.id.startsWith("project-")
  );

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 text-left">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m a{" "}
                  <TypingAnimation
                    text="Cipher,"
                    className="text-primary"
                  />
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  I&apos;m a 3D Modeler, specializing in creating high-quality 3D models with
                  {' '}
                  <b className="underline" style={{color: '#F5792A'}}>Blender</b>
                  {' '}
                   and texturing them in
                  {' '}
                  <b className="underline" style={{color: '#317236'}}>Substance Painter</b>
                  . Welcome to my portfolio.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#contact-me">Contact Me</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#my-work">My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="my-work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      alt={`Project ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={project.imageHint}
                      height="400"
                      src={project.imageUrl}
                      width="600"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      Project {index + 1}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about-me" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I embarked on my 3D modeling journey two years ago and have been passionately honing my skills ever since. I am dedicated to continuous improvement and creating high-quality digital art.
              </p>
            </div>
          </div>
        </section>

        <section id="contact-me" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>
            <div className="mx-auto mt-6 w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full">
                <a href="mailto:hello@persona.dev">
                  <Mail className="mr-2 h-4 w-4" />
                  Say Hello
                </a>
              </Button>
              <div className="flex justify-center space-x-4 pt-4">
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
