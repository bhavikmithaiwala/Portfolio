import ContactCard from "./ContactCard";
import CopyButton from "../common/CopyButton";
import BookCall from "./BookCall";
import SocialLinks from "./SocialLinks";
import Standards from "./Standards";
import useLocalTime from "../../hooks/useLocalTime";
import { EMAIL, PHONE, PHONE_TXT } from "../../data/profile";

export default function Contact() {
  const time = useLocalTime("America/Toronto");

  return (
    <div className="aboutBox" id="contact" style={{ marginTop: 56 }}>
      <div className="about">
        <span className="badge">✨ Initiate collaboration & inquiries</span>
        <h2>Get in <span className="grad">Touch</span></h2>
        <p className="tagline" style={{ maxWidth: 560, margin: "0 auto 18px" }}>
          Ready to collaborate? Let’s discuss your project, product ideas or full-time engineering opportunities.
        </p>
        <div className="pillrow">
          <span className="dot" /> Open to full-time roles across Canada <span>·</span> Let’s build something together
        </div>

        <div className="cgrid">
          <div className="cl">
            <ContactCard icon="✉️" label="Direct email" value={EMAIL} aside={<CopyButton text={EMAIL} />}>
              <span>Primary channel for inquiries</span>
              <a href={"mailto:" + EMAIL}>Send email ↗</a>
            </ContactCard>

            <ContactCard icon="📞" label="Phone / WhatsApp" value={PHONE_TXT} aside={<CopyButton text={PHONE_TXT} />}>
              <a href={"https://wa.me/" + PHONE.slice(1)} target="_blank" rel="noreferrer">Message on WhatsApp ↗</a>
              <a href={"tel:" + PHONE}>Call now ↗</a>
            </ContactCard>

            <ContactCard
              icon="📍"
              label="Base location"
              value="Ottawa, Ontario, Canada"
              aside={<span className="tz">Eastern Time</span>}
            >
              <span>Open to roles across Canada</span>
              <span>Local: {time} ET</span>
            </ContactCard>
          </div>

          <div className="cr">
            <BookCall />
            <SocialLinks />
          </div>
        </div>

        <Standards />
      </div>
    </div>
  );
}
