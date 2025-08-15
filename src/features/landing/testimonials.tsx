import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Wrapper } from '@/layouts/wrapper'
import { Heart, Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      content:
        'Finally, a solution that gives me exactly the content width I want without doing math in my head every time!',
      author: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'TechStart',
      avatar: 'SC',
    },
    {
      content:
        'This solved our nested layout issues immediately. No more broken padding in complex component hierarchies.',
      author: 'Marcus Johnson',
      role: 'Senior UI Engineer',
      company: 'DesignCorp',
      avatar: 'MJ',
    },
    {
      content:
        'The responsive behavior is perfect. Set it once and it works beautifully on every screen size.',
      author: 'Elena Rodriguez',
      role: 'UX Developer',
      company: 'WebStudio',
      avatar: 'ER',
    },
    {
      content:
        'Saved hours of debugging responsive layouts. The math just works automatically now.',
      author: 'David Kim',
      role: 'Full-Stack Developer',
      company: 'AppFlow',
      avatar: 'DK',
    },
    {
      content:
        'Love that it works with vanilla CSS, React, and Vue. Consistent results across all our projects.',
      author: 'Jessica Taylor',
      role: 'Lead Frontend Engineer',
      company: 'DevHub',
      avatar: 'JT',
    },
    {
      content:
        "The percentage-based padding approach is genius. Why didn't I think of this before?",
      author: 'Ahmed Hassan',
      role: 'Web Developer',
      company: 'Digital Agency',
      avatar: 'AH',
    },
  ]

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by developers worldwide
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            See what developers are saying about CSS Wrapper
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-background/50 h-full rounded-lg border p-6 backdrop-blur-sm">
                  <div className="mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-warning size-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-foreground mb-6 text-center leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-full text-sm font-medium">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-foreground text-sm font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <Heart className="size-4 fill-current" />
            Join thousands of developers who love CSS Wrapper
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
