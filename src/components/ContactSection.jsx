import { CONTACT } from "../constants"
import { IoLocationOutline } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section className='container mx-auto py-16' id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p 
            key={detail.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl">
            {/* Render icon for location */}
            {detail.key === 'location' ? (
              <a href={detail.value} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <IoLocationOutline /> View Location
              </a>
            ) : (
              detail.value
            )}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContactSection
