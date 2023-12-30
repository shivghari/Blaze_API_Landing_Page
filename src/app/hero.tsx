"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[44rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-22 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-12 text-center">
            <Typography
              variant="h1"
              color="white"
              className="md:w-[60%] md:m-auto !mb-[20px]"
              placeholder={""}
            >
              No Code, Just Results: Instant Backends for Your Ideas
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 text-[#a5a8a6] md:w-[80%] m-auto"
              placeholder={""}
            >
              Unleash the Power of Instant Innovation: Transform Your Ideas into
              Reality with Blaze API&apos;s Intuitive No-Code Backend Solution,
              Anytime, Anywhere.
            </Typography>

            <div className="flex md:mb-2 md:w-10/12 mt-20 justify-center text-center m-auto">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder={""}
              >
                Join Waitlist Now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Hero;
