import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const BlenderLogo = () => (
  <svg
    className="inline-block h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 6.42857C18.9853 6.42857 21 8.44327 21 10.9286C21 12.0375 20.6213 13.0583 20.0053 13.8821C19.9984 13.8906 19.9916 13.899 19.9847 13.9073L13.9073 19.9847C13.899 19.9916 13.8906 19.9984 13.8821 20.0053C13.0583 20.6213 12.0375 21 10.9286 21C8.44327 21 6.42857 18.9853 6.42857 16.5C6.42857 14.0147 8.44327 12 10.9286 12C12.0375 12 13.0583 12.3787 13.8821 12.9947C13.8906 13.0016 13.899 13.0084 13.9073 13.0153L19.9847 7.0153C19.9916 7.00845 19.9984 7.00161 20.0053 6.99472C20.6213 7.62128 21 8.44327 21 10.9286"
      fill="#F5792A"
      stroke="#fff"
      strokeWidth="1.5"
    />
    <circle cx="10.9286" cy="10.9286" r="4.5" fill="#F5792A" stroke="#fff" strokeWidth="1.5" />
    <circle cx="10.9286" cy="10.9286" r="1.5" fill="#fff" />
  </svg>
);

const SubstancePainterLogo = () => (
    <svg 
        className="inline-block h-6 w-6"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#317236"/>
        <path d="M12 12L22 7L12 2L2 7L12 12Z" fill="#3A3A3A"/>
        <path d="M16 14.5C16 15.3284 15.3284 16 14.5 16H9.5C8.67157 16 8 15.3284 8 14.5V9.5C8 8.67157 8.67157 8 9.5 8H14.5C15.3284 8 16 8.67157 16 9.5V14.5Z" fill="#fff"/>
        <path d="M12 12H14.5C15.3284 12 16 11.3284 16 10.5V9.5C16 8.67157 15.3284 8 14.5 8H12V12Z" fill="#3A3A3A"/>
    </svg>
);

export default function Home() {
  const professionalPhoto = PlaceHolderImages.find(
    (img) => img.id === "professional-photo"
  );
  const projects = PlaceHolderImages.filter((img) =>
    img.id.startsWith("project-")
  );

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m a <span className="text-primary">Cipher</span>
                  </h1>
                  <p className="flex max-w-[600px] flex-wrap items-center gap-x-2 text-muted-foreground md:text-xl">
                    I&apos;m a 3D Modeler, specializing in creating high-quality 3D models with
                    <span className="inline-flex items-center gap-2">
                      <BlenderLogo />
                      <b style={{color: '#F5792A'}}>Blender</b>
                    </span>
                     and texturing them in
                    <span className="inline-flex items-center gap-2">
                      <SubstancePainterLogo />
                      <b style={{color: '#317236'}}>Substance Painter</b>
                    </span>
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
              <div className="flex items-center justify-center">
                {professionalPhoto && (
                  <Image
                    alt="Professional Photo"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                    data-ai-hint={professionalPhoto.imageHint}
                    height="400"
                    src={professionalPhoto.imageUrl}
                    width="400"
                  />
                )}
              </div>
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
                I am a passionate and creative professional with a love for technology and design. My journey in web development started years ago, and I have been honing my skills ever since. I thrive on bringing ideas to life and creating digital experiences that are not only functional but also aesthetically pleasing.
              </p>
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
            <div className="mx-auto mt-12 max-w-6xl">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
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
                            <CardTitle className="font-headline text-xl">Project {index + 1}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-8 md:ml-0" />
                <CarouselNext className="mr-8 md:mr-0" />
              </Carousel>
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
