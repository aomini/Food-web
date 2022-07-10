import Image from 'next/image';

import Typography from '../Typography';

const steps = [
  {
    title: 'Choose Location',
    description:
      'Enter your address or choose your current location using app.',
    illustration: '/step-1.svg'
  },
  {
    title: 'Order Favourte Food',
    description: 'Choose your favorite food and a payment method.',
    illustration: '/step-2.svg'
  },
  {
    title: 'Fast Delivery',
    description: 'Get it delivered right to your door in 1 hour or less.',
    illustration: '/step-3.svg'
  }
];

const OurWorking = () => {
  return (
    <section className="my-28">
      <div className="container">
        <div className="text-center">
          <Typography
            variant="body"
            className="font-semibold uppercase text-green-default"
          >
            step by step
          </Typography>
          <Typography
            variant="h2"
            className="mt-2 mb-4  font-bold text-black-50"
          >
            How it Works?
          </Typography>
          <Typography variant="body" className="text-grey-secondary">
            Explore following these steps will help you to find find a disher
            you love easily.
          </Typography>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-[30px]">
          {steps.map((step, index) => (
            <div
              className="flex max-w-[360px] flex-col items-center px-8 pb-7"
              key={index}
            >
              <Image
                src={step.illustration}
                width={250}
                height={200}
                alt={step.title}
              />
              <Typography
                variant="h4"
                className="mt-10 mb-4 font-bold text-black-50"
              >
                {step.title}
              </Typography>
              <Typography
                variant="body"
                className="text-center font-normal text-grey-secondary"
              >
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurWorking;
