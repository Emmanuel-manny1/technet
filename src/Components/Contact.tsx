
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin, FiSend, FiChevronDown } from "react-icons/fi";

const inputClass =
  "w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none";

const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-12 lg:px-36 font-['DM_Sans',sans-serif] text-neutral-900">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-lg bg-neutral-900">
  <img
    src="/microphone.png"
    alt=""
    className="absolute inset-y-0 -right-[2%] h-full w-auto max-w-none opacity-50 sm:-right-[4%] sm:opacity-100 lg:-right-[5%]"
    style={{
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
      maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
    }}
  />

  <div className="relative flex min-h-[180px] items-center px-6 py-10 sm:min-h-[200px] sm:px-12 lg:min-h-[240px] lg:px-16">
    <div className="max-w-[16rem] sm:max-w-xs">
      <h1 className="font-['Roboto_Serif',serif] text-2xl font-bold leading-tight text-white sm:text-3xl">
        Get in touch
        <br />
        with TECHNET
      </h1>
      <p className="mt-2 text-xs text-neutral-300">
        Got something on your mind? From song requests and shout-outs to questions and
        collaborations, we're here to listen.
      </p>
    </div>
  </div>
</div>

      {/* BODY */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          {/* WhatsApp */}
          <div className="flex flex-col overflow-hidden rounded-lg bg-green-50 sm:flex-row">
            <div className="flex items-center justify-center bg-[#25B52A] p-6 sm:w-28">
              <FaWhatsapp className="h-12 w-12 text-white" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3 p-4">
              <div>
                <p className="text-sm font-semibold">Chat with us on WhatsApp</p>
                <p className="text-xs text-neutral-600">We will reply you in minutes</p>
              </div>
              <span className="w-fit rounded-md bg-[#25B52A] px-4 py-2 text-xs font-semibold text-white">
                Send WhatsApp message
              </span>
            </div>
          </div>

          {/* Call + Email */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-neutral-100 p-4">
              <FiPhone className="h-4 w-4" />
              <p className="mt-2 text-sm font-semibold">Call</p>
              <p className="text-xs text-neutral-500">Give us a call</p>
              <p className="mt-3 text-sm font-medium">+234 70548219</p>
            </div>

            <div className="rounded-lg bg-neutral-100 p-4">
              <FiMail className="h-4 w-4" />
              <p className="mt-2 text-sm font-semibold">Email</p>
              <p className="text-xs text-neutral-500">Send us an email</p>
              <p className="mt-3 break-all text-sm font-medium">technetrad@gmail.com</p>
            </div>
          </div>

          {/* Visit */}
          <div className="rounded-lg bg-neutral-100 p-4">
            <FiMapPin className="h-4 w-4" />
            <p className="mt-2 text-sm font-semibold">Visit us</p>
            <p className="text-xs text-neutral-500">Come right to our studio</p>
            <p className="mt-3 text-sm font-semibold">
              123, Broadcast avenue, Alausa Ikeja, Lagos state
            </p>
            <div className="mt-4 overflow-hidden rounded-md">
              <iframe
                title="TECHNET studio location"
                src="https://www.google.com/maps?q=Alausa,Ikeja,Lagos&output=embed"
                className="h-44 w-full border-0 sm:h-52"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          <form className="rounded-lg bg-neutral-100 p-5 sm:p-6">
            <h2 className="font-['DM_Serif_Display',serif] text-2xl">Send a message</h2>
            <p className="text-xs text-neutral-600">
              Fill in the form and we'll get back to you as fast as we can
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1 block text-xs font-semibold">
                  Full Name
                </label>
                <input id="fullName" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-semibold">
                  Email address
                </label>
                <input id="email" type="email" className={inputClass} />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="mb-1 block text-xs font-semibold">
                Subject
              </label>
              <div className="relative">
                <select id="subject" className={`${inputClass} appearance-none pr-9`}>
                  <option value=""></option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1 block text-xs font-semibold">
                Message
              </label>
              <textarea id="message" rows={6} className={`${inputClass} resize-none`} />
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-3 text-sm font-semibold text-yellow-400"
            >
              Send message <FiSend />
            </button>
          </form>

          {/* Socials */}
          <div>
            <h2 className="font-['DM_Serif_Display',serif] text-xl">
              Connect with us on our socials
            </h2>
            <p className="text-xs text-neutral-600">
              Follow us on all socials and interact with the team in different way
            </p>
            <div className="mt-3 flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E1306C] text-white">
                <FaInstagram className="h-4 w-4" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
                <FaXTwitter className="h-4 w-4" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0A66C2] text-white">
                <FaLinkedinIn className="h-4 w-4" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1877F2] text-white">
                <FaFacebookF className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;