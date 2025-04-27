import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";
import { faqs } from "@/data/faqs";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";



export default function Home() {
  return (
    <div>
      <div className="grid-background">  </div>
        <HeroSection/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/80">
          <div className="container mx-auto px-4 md:px-6">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tighter text-center mb-12">Discover the Powerful Features Shaping Your Career with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
           {features.map((feature,index)=>{
            return(
                <Card key={index} className={'border-2 cursor-pointer hover:border-primary bg-black transition-colors duration-300 '}>
                <CardContent className={'pt-6 flex items-center hover:text-gray-100 text-gray-300'}>
                  <div className="flex justify-center items-center gap-2 flex-col text-center">{feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="font-bold">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>)
           })}
          </div>
          </div>
        </section>




        <section className="w-full py-12 md:py-24 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
                
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

            <div className="flex flex-col items-center justify-center space-y-2 ">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>


            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>


            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>

                 
          </div>

          </div>
        </section>



        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/80">
          <div className="container mx-auto px-4 md:px-6">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tighter text-center mb-6">How it works?</h2>
          <p className="text-muted-foreground text-center mb-6">Four simple steps to accelerate your career growth</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
           {howItWorks.map((item,index)=>{
            return(
            
              <div key={index} className="flex justify-center items-center flex-col py-12 space-y-4">
                <div className="w-16 h-16  rounded-full bg-primary/10 flex items-center justify-center">{item.icon}</div>

                <h3 className="font-semibold text-xl text-center">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.description}</p>

              </div>


                )
           })}
          </div>
          </div>
        </section>



        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/10">
          <div className="container mx-auto px-4 md:px-6">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tighter text-center mb-12">What our users says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
           {testimonial.map((testimonial,index)=>{
            return(
                <Card key={index} className={'bg-black hover:border-1 hover:border-white/20 '}>
                <CardContent className={'pt-6'}>

                  <div>
                    <div className="flex space-x-4 items-center">
                      <div className="relative h-12 w-12 flex-shrink-0"><Image
                      width={40}
                      height={40}
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full object-cover border-2 border-primary/20"
                      /></div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>

                      </div>

                    </div>
                    <blockquote className="py-7">
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                 
                </CardContent>
              </Card>)
           })}
          </div>
          </div>
        </section>



        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/80">
          <div className="container mx-auto px-4 md:px-6">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tighter text-center mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center mb-6">Find answers to common questions about our platform</p>
          <div className="max-w-6xl mx-auto">

          <Accordion type="single" collapsible>
              
           {faqs.map((item,index)=>{
             
             return(
                
              <AccordionItem key={index} value={`${index}`}>
                <AccordionTrigger className={'py-7'}>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            
             )
               
           })}
            </Accordion>
          </div>
          </div>
        </section>




        <section className="w-full mb-10 ">
          <div className="mx-auto py-12 md:py-24 gradient rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">Ready to Accelerate Your Career with Ankit's Elevate.ai?</h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">Join hundreds of professionals who are advancing their careers with AI-powered guidance.</p>

          <Link href="/dashboard" passHref className="">
          <Button
          size={'lg'}
          variant={'secondary'}
           className={'font-bold h-11 mt-5 animate-bounce cursor-pointer'}>Start Your Journey Today
           <ArrowRight className="ml-2 h-4 w-4"/>
           </Button>
          </Link>
          </div>
          </div>
        </section>


    </div>
  );
}
