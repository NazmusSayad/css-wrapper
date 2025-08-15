import { Wrapper } from '@/layouts/wrapper'

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
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by developers worldwide
            </h2>
            <p className="text-muted-foreground mb-16 text-lg">
              See what developers are saying about CSS Wrapper
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="text-warning mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="size-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-card-foreground text-sm leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-full text-sm font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-card-foreground text-sm font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Join thousands of developers who love CSS Wrapper
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
