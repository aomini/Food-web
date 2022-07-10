import Typography from '../Typography';

const Hero = () => {
  return (
    <section
      className="flex h-screen items-center justify-center bg-gradient-to-r"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("/banner.png")'
      }}
    >
      <Typography
        variant="h1"
        className="text-center text-[40px] font-bold leading-[3.5rem] text-white-default"
      >
        We Link. We Serve <br />
        Get It Delivered Right to Your Door.
      </Typography>
    </section>
  );
};
export default Hero;
