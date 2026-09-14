import { MessageCircle } from 'lucide-react';

const testimonials = [
  { quote: 'masarap po yung cookie gawa ba po kayo madami kasi bibili pa po ulit ako 😋😋😋😋😋😋😋😋😋😋+idea lang po, pwede po kayo mag benta ng mas malaking cookie like the drip and bites sa tiktok, mas malaking white chocolate po ang sarap po kasi yung white chocolate biscoffff waaaahhhhhh pasok na pasok yung lasa sa quality na cookies😋 inubos ko yun tatlo yun 😆', featured: true },
  { quote: 'ang saraap lahat. number 1 si smores!! hahah' },
  { quote: 'Super yummy and chewy nung cookies!! Love ittt nagustuhan ng mga kids dito hehe bitin. Pa order ulet 5pcs' },
  { quote: 'anw, masarap yung dubai chewy cookie, saktong sakto lang yung lasa\n\nnapapa happy dance rin kami everytime na kumakain kami ng dcc mo HAHAHAHA' },
  { quote: 'nakuha ko na be thank you\n\nang sarap pa din talaga, worth it' },
  { quote: 'Kinakain na po nila agad super sarap daw po sabi ng mga kids will order again next time! 💖🥰' },
  { quote: 'Thank you. iloveboth 🙂\n10/10 for me.\nnot sweet at all\nhindi over sa powder kaya di makalat kainin\nthe portion is a little small from what i usually order pero i think mas okay kasi magkecrave ka pa for more.\nWorth it for its price.\nWill definitely order again soon 🙂\nThank you again.\nCraving satisfied!' },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <header className="testimonials__header section-shell">
        <div><p className="eyebrow">Kind words, shared</p><h2 id="testimonials-title">Loved down to the last crumb.</h2></div>
      </header>
      <div className="testimonials__grid section-shell">
        {testimonials.map((testimonial, index) => (
          <article className={testimonial.featured ? 'testimonial testimonial--featured' : 'testimonial'} key={testimonial.quote}>
            <MessageCircle aria-hidden="true" />
            <blockquote>{testimonial.quote}</blockquote>
            <span>Customer message {index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
