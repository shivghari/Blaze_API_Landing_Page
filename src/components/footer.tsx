"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
              placeholder={""}
            >
              Blaze API
            </Typography>
            <Typography
              color="white"
              className="mb-12 font-normal md:w-[70%] text-[#a5a8a6]"
              placeholder={""}
            >
              Unleash the Power of Instant Innovation: Transform Your Ideas into
              Reality with Blaze API&apos;s Intuitive No-Code Backend Solution,
              Anytime, Anywhere.
            </Typography>
            {/* <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                    placeholder={""}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography
              variant="h6"
              color="white"
              className="mb-3"
              placeholder={""}
            >
              Join us
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"
                placeholder={""}
              >
                Join Waitlist Now
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
            placeholder={""}
          >
            &copy; {CURRENT_YEAR} Blaze API.
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white" placeholder={""}>
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white" placeholder={""}>
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white" placeholder={""}>
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white" placeholder={""}>
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white" placeholder={""}>
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
