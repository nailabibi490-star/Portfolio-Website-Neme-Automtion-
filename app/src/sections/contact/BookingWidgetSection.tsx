import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BookingWidgetSection() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Load Google Calendar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://calendar.google.com/calendar/scheduling-button-script.css';
    document.head.appendChild(link);

    // Load Google Calendar Script
    const script = document.createElement('script');
    script.src =
      'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;

    script.onload = () => {
      if (
        window.calendar &&
        window.calendar.schedulingButton &&
        buttonRef.current
      ) {
        window.calendar.schedulingButton.load({
          url:
            'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RDYo9P0nMNd-CDL7_fI8XJxzSbPIfcu6YXiqE2Tn-CbEFP_kWO0GMOhjmQKCa85IY48btF0MW?gv=true',
          color: '#14B8A6', // teal
          label: 'Book an Appointment',
          target: buttonRef.current,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="bg-navy-panel rounded-[20px] p-12 min-h-[500px] flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Schedule a Meeting
          </h2>

          <p className="text-teal-muted mb-8">
            Book a free consultation directly from my calendar.
          </p>

          {/* Google Calendar Button */}
          <div ref={buttonRef}></div>
        </motion.div>
      </div>
    </section>
  );
}